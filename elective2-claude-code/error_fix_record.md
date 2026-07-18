# 报错与修复记录

## 错误 1：截图目录不存在

**报错信息**：
```
Failed to write file D:/wadfaf/cost-dashboard/screenshots/dashboard.png:
系统找不到指定的路径。 (0x3)
```

**原因**：Edge headless 不会自动创建不存在的目录。

**修复**：
```bash
mkdir -p /d/wadfaf/cost-dashboard/screenshots
```
重新执行截图命令后成功生成 67KB PNG。

**教训**：给 AI 描述任务时如果涉及文件输出，需要同时说明"如果目录不存在请先创建"——但我当时没说，所以踩了这个坑。

---

## 错误 2：git submodule 误判

**表现**：推送到 GitHub 后，`cost-dashboard/` 目录显示为 `cost-dashboard @ 5101b79`，点击后跳转到空页面，无法查看其中文件。

**原因**：`cost-dashboard/` 是独立的 `git init` 项目，包含 `.git/` 目录。外层仓库（`deep003-ai-moat`）的 git 检测到内层 `.git/` 后，将其视为 submodule 而非普通目录。Submodule 只记录了 commit hash，不传输文件内容。

**修复步骤**：
```bash
# 1. 从外层索引中移除
cd /d/wadfaf/ai-info-radar
git rm --cached cost-dashboard

# 2. 删除内层 .git
rm -rf cost-dashboard/.git

# 3. 重新添加为普通目录
git add cost-dashboard/
git commit -m "修复：cost-dashboard 作为普通子目录而非 submodule"
git push
```

**教训**：如果需要把多个独立 git 项目放在同一个仓库中，应该用 `git submodule add <url>` 正确地添加，或者确保子目录不包含 `.git/`。我当时图方便直接 `cp -r` 了，导致了这个问题。

---

## 潜在但未触发的风险

**风险**：Chart.js 从 CDN 加载，如果 jsdelivr.net 国内被墙，图表区域会空白。
**当前状态**：本机测试时正常加载。但如果审核人在国内网络打开，可能需要把 Chart.js 下载到本地引用。
**预留方案**：可添加 `chart.min.js` 到 `project/` 目录，将 CDN 引用改为本地引用。目前未触发，暂不修改。
