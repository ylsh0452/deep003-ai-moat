# Claude Code 初始需求 Prompt

## Prompt 1：生成仪表盘主页面（首次输入）

```
我要做什么：
做一个 AI Token 成本仪表盘页面。

使用场景：
每次用 AI API 完成任务后，我需要记录 Token 消耗，并定期回看趋势和成本。

目标用户：
我自己（个人开发者，预算 ¥50/月）。

需要包含的内容：
1. 顶部 4 个统计卡片：总调用次数、总 Token 消耗、总估算成本、日均成本
2. 折线图：每日 Token 消耗趋势（X 轴日期，Y 轴 Token 数）
3. 饼图：按模型（deepseek/claude/gpt/qwen/kimi）的成本分布
4. 使用记录表格：日期、模型、输入 Token、输出 Token、总计、估算成本、任务描述
5. 录入表单：日期选择器、模型下拉框、输入/输出 Token 输入框、任务描述输入框、提交按钮
6. 数据存储在浏览器 localStorage
7. 内置 5 条示例数据（来自我的真实实验）

希望的页面或文件结构：
单个 HTML 文件（内联 CSS 和 JS），用 Chart.js CDN

风格要求：
深色主题，简洁，专业感，不要花哨

不需要做什么：
- 不需要后端服务器
- 不需要数据库
- 不需要登录功能
- 不需要移动端适配（桌面优先）

最终希望输出什么：
一个浏览器可直接打开的 index.html
```

## Prompt 2：命令行日志脚本

```
我要做一个 Node.js 命令行脚本 log.js。

使用场景：在终端完成 AI API 调用后，快速记录 Token 消耗，不用打开网页。

用法：node log.js "任务描述" input_tokens output_tokens [model]
默认模型：deepseek-v4-pro

需要做的事：
1. 接收命令行参数（描述、input、output、model）
2. 将记录追加写入 log.json
3. 根据内置定价表计算本次调用成本
4. 打印确认信息（任务描述、token 数、成本）

定价表与仪表盘（index.html）保持一致。

最终输出：log.js 文件
```

## Prompt 3：修复截图路径

```
运行截图命令时遇到报错：

Failed to write file D:/wadfaf/cost-dashboard/screenshots/dashboard.png:
系统找不到指定的路径。 (0x3)

帮我修复。
```

## Prompt 4：修复 git submodule

```
git push 后，GitHub 上 cost-dashboard 目录显示为带箭头的文件夹图标，
点击无法打开。帮我检查并修复。
```

---

## AI 辅助说明

- 所有 Prompt 由我口述需求，Claude Code 整理为结构化的工程描述
- 生成的代码（index.html、log.js）均经过我本地验证（浏览器打开、命令行执行）
- README、过程记录等文档由 Claude Code 起草，我逐项确认内容准确后提交
