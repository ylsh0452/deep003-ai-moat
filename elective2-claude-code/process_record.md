# 过程记录

## 工作流总览

```
描述需求 → Claude Code 生成代码 → 本地验证 → 发现 bug → Claude Code 修复 → 截图 → 推送
```

## 步骤 1：需求描述（2026-07-19 01:15）

用自然语言向 Claude Code 描述仪表盘的功能需求（见 `problem_description.md`）。不需要说"用 Chart.js 的折线图配置项里的 tension 参数"，只需要说"显示每天 Token 消耗趋势的折线图"。

## 步骤 2：代码生成（01:16 - 01:20）

Claude Code 在约 40 秒内生成了：
- `index.html`：完整的单文件仪表盘（HTML + CSS + JS，约 280 行）
- 包含 Chart.js CDN 引用、深色 UI、4 个统计卡、折线图、饼图、表格、表单
- 内置 5 条示例数据 + 7 个模型的定价表
- `log.js`：Node.js 命令行日志脚本（约 40 行）

## 步骤 3：本地验证（01:20 - 01:24）

- 执行 `node log.js` 记录了 5 条真实数据，确认脚本正常
- 用 Edge headless 打开仪表盘并截图：`msedge --headless --screenshot=dashboard.png index.html`

## 步骤 4：报错处理（01:28 - 01:42）

遇到两个问题：

**问题 A — 截图目录不存在**
- 错误：`Failed to write file ... 系统找不到指定的路径`
- 原因：`screenshots/` 目录未创建
- 修复：`mkdir -p screenshots` 后重新截图
- 耗时：约 2 分钟

**问题 B — git submodule 误判**
- 错误：GitHub 上 cost-dashboard 显示为文件夹图标带箭头，点击无法打开
- 原因：`cost-dashboard/` 作为独立项目包含了 `.git/` 目录，被外层 git 识别为 submodule
- 修复：删除内层 `.git/` → `git rm --cached` → 重新 `git add` → commit → push
- 耗时：约 15 分钟（第一次没删干净，重来了一次）

## 步骤 5：最终验证（01:43）

- GitHub 仓库文件可正常点开查看
- 仪表盘截图确认图表渲染正常
- README 和 TASK_REPORT 补充完毕
- 推送成功
