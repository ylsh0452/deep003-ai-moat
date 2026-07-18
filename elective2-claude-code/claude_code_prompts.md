# Claude Code 使用的关键 Prompt

## Prompt 1：生成仪表盘主页面

```
帮我做一个 AI Token 成本仪表盘页面，单个 HTML 文件，
用 Chart.js CDN。功能：
- 顶部 4 个统计卡片（总调用次数 / 总 Token / 总成本 / 日均成本）
- 折线图显示每日 Token 消耗趋势
- 饼图显示按模型的成本分布
- 表格显示所有使用记录
- 表单可新增记录（日期、模型下拉选择、输入/输出 token、描述）
- 数据存 localStorage
- 内置 5 条示例数据（来自我之前实验的真实数据）
- 深色主题，风格简洁
- 模型定价表内置在代码中（从公开定价页汇总）
```

## Prompt 2：创建命令行日志脚本

```
写一个 Node.js 脚本 log.js，用法：
  node log.js "任务描述" input_tokens output_tokens [model]
将记录写入 log.json 文件，并打印本次调用的 token 数和估算成本。
默认模型 deepseek-v4-pro。定价表与仪表盘保持一致。
```

## Prompt 3：修复截图路径错误

```
Edge headless 截图时报错：
Failed to write file ... 系统找不到指定的路径
```

Claude Code 分析后确认 `screenshots/` 目录不存在，执行 `mkdir -p` 后解决。

## Prompt 4：修复 git submodule 问题

```
git push 之后 cost-dashboard 在 GitHub 上点不开，
显示为一个文件夹图标带箭头
```

Claude Code 判断是 git 将内层 `.git/` 目录识别为 submodule。解决方案：删除内层 `.git/` → 重新 add → commit → push。

## AI 辅助说明

所有代码文件（index.html、log.js）由 Claude Code 一次性生成，后续只做了参数微调（截图路径、虚拟时间预算）。README 和 TASK_REPORT 由 Claude Code 按我的需求描述起草。所有内容均经过我逐项验证（浏览器打开确认图表渲染、命令行执行 log.js 确认打印正确）。
