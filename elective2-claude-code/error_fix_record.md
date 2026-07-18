# 报错与问题修复记录

---

## 修复 1：截图目录不存在导致 Edge 报错

**出现的问题**：
```
Failed to write file D:/wadfaf/cost-dashboard/screenshots/dashboard.png:
系统找不到指定的路径。 (0x3)
```

**我如何发现的**：
在终端执行 Edge headless 截图命令后，命令返回非 0 退出码，截图文件未生成。

**我向 Claude Code 如何描述**：
> Edge headless 截图时报错：Failed to write file ... 系统找不到指定的路径。帮我检查并修复。

**Claude Code 给出的修改**：
Claude Code 分析报错信息后判断 `screenshots/` 目录不存在，Edge 不会自动创建。给出的修复命令：
```bash
mkdir -p /d/wadfaf/cost-dashboard/screenshots
```
重新执行截图命令后成功。

**我是否验证成功**：
是。`ls -lh screenshots/dashboard.png` 确认文件存在（67KB），且文件格式正确（PNG 1440×900）。

**我从这次修复中学到了什么**：
给 AI 描述任务时如果涉及文件输出，需要同时说明"目录不存在则创建"——我当时只描述了截图命令，没有考虑前置条件。写 Prompt 时把所有前置条件写清楚，可以避免这类低级错误。

---

## 修复 2：git submodule 导致 GitHub 文件无法查看

**出现的问题**：
推送到 GitHub 后，`cost-dashboard/` 目录在仓库页面上显示为一个带箭头的文件夹图标 `cost-dashboard @ 5101b79`，点击后跳转到空页面，无法查看目录内的任何文件。

**我如何发现的**：
通过 GitHub API 验证推送成功后，发现 `cost-dashboard/` 下只有一个 `README.md` 和 `screenshots`，而 `project/index.html`、`log.js` 等核心文件完全看不到——但本地文件明明存在。

**我向 Claude Code 如何描述**：
> git push 之后 cost-dashboard 在 GitHub 上点不开，显示为一个文件夹图标带箭头。帮我检查原因并给出修复步骤。

**Claude Code 给出的修改**：
Claude Code 判断原因：`cost-dashboard/` 作为独立 `git init` 项目包含了 `.git/` 目录，外层仓库检测到内层 `.git/` 后将其识别为 git submodule，而不是普通目录。Submodule 只存储 commit hash 引用，不传输实际文件。

给出的修复步骤：
```bash
# 1. 从外层 git 索引中移除
git rm --cached cost-dashboard

# 2. 删除内层 .git 目录（使子目录变为普通目录）
rm -rf cost-dashboard/.git

# 3. 重新添加为普通目录
git add cost-dashboard/
git commit -m "修复：cost-dashboard 作为普通子目录而非 submodule"
git push
```

**我是否验证成功**：
第一次执行后仍有残留——因为 `rm -rf .git` 后 `cp -r` 的源目录还有 `.git`。重新确认内层 `.git/` 已完全删除后，第二次 add + commit + push 成功。通过 GitHub API 确认所有文件（index.html、log.js、log.json 等）已正常显示。

**我从这次修复中学到了什么**：
- 子目录中包含 `.git/` 会被外层仓库自动识别为 submodule——之前完全不知道这个机制
- 修复时要确认修复真的生效了（第一次没删干净，说明我的验证不够仔细）
- 用 `git submodule add <url>` 是正确的"仓库包含仓库"方式，直接 `cp -r` 是不对的

---

## 优化过程 1：仪表盘示例数据的"成本全是 ¥0.00"问题

**原始结果的问题**：
仪表盘首次生成后，5 条示例数据的成本列全部显示 `¥0.0000`——已经消耗了 11,000+ tokens，但成本显示为 0，明显不对。

**我不满意的地方**：
数据看起来像没算对，虽然实际上是因为单次调用成本太低（¥0.0013 ~ ¥0.0072），四舍五入后显示为 0.00。但这是用户看到的第一印象——"成本 ¥0.00"会让人觉得仪表盘没起作用。

**我让 Claude Code 如何修改**：
> 成本列显示 4 位小数（¥0.0013），不要只显示 2 位。总成本保持 2 位小数。

**修改后效果**：
成本列从 `¥0.00` 改为 `¥0.0013`，能正常看到每次调用的微小成本。同时在统计卡片的副标题里加了"月预算 ¥50，已用 0.1%"的进度提示，让成本数字有参照物。

---

## 优化过程 2：Prompt 格式从"一句话"改为结构化

**原始结果的问题**：
第一次给 Claude Code 的 Prompt 是一段连续的自然语言描述，没有分段、没有结构化。虽然 Claude Code 理解了我的意思，但生成的第一个版本漏掉了命令行日志脚本（log.js）。

**我不满意的地方**：
漏功能说明我的需求描述不够系统——如果我有明确的"需要包含的内容"清单，AI 不会漏。

**我让 Claude Code 如何修改**：
把原始 Prompt 重构为标准格式：
```
我要做什么：
使用场景：
目标用户：
需要包含的内容：
希望的页面或文件结构：
风格要求：
不需要做什么：
最终希望输出什么：
```

重构后重新输入，Claude Code 一次性生成了完整版本（含 log.js）。

**修改后效果**：
用结构化 Prompt 生成的结果不再遗漏功能。这个格式本身也成了我以后给 AI 描述任务的标准模板——如果是模糊需求，先填完这个模板再提交给 AI。
