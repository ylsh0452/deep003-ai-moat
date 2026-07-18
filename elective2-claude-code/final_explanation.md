# 最终成果说明

## 我做了什么

用 Claude Code 做了一个 **AI Token 成本仪表盘**：一个可交互的网页 + 命令行日志脚本，用于追踪每次 AI API 调用的 Token 消耗和成本。

## 核心产出

| 文件 | 说明 | 行数 |
|---|---|---|
| `project/index.html` | 仪表盘主页（HTML + CSS + JS 单文件） | ~280 行 |
| `project/log.js` | Node.js 命令行日志脚本 | ~45 行 |
| `project/log.json` | 5 条真实使用记录 | — |
| `screenshots/dashboard.png` | 仪表盘运行截图（67KB，1440×900） | — |

## 功能清单

- [x] 4 个统计卡片（总调用次数 / 总 Token / 总成本 / 日均成本）
- [x] Token 消耗趋势折线图（按日汇总）
- [x] 成本分布饼图（按模型分组，7 种模型的定价表内置）
- [x] 使用记录表格（日期/模型/Token/成本/描述）
- [x] 手动录入表单（日期选择 + 模型下拉 + Token 输入 + 描述）
- [x] localStorage 持久化 + 重置按钮
- [x] 命令行 `node log.js` 快速记录

## 定价数据来源

所有模型定价来自公开页面（Anthropic 官方、OpenAI 官方、DeepSeek 官方、阿里云百炼、Moonshot 官方），已在 README 中逐条标注来源。

## 运行方式

**网页端**：浏览器打开 `project/index.html`，数据自动加载。

**命令行**：
```bash
node project/log.js "修复了搜索排序的 bug" 320 1450 deepseek-v4-pro
# 输出：已记录 ... 1,770 tokens | 估算成本: ¥0.0035
```

## 与 AI 信息壁垒报告的关系

本仪表盘是 AI 信息壁垒报告行动建议中"项目从 Day 1 加入成本监控"的第一个落地产物。它不是独立作品——它直接服务于报告中确立的"成本意识 = 信息壁垒"这条主线。
