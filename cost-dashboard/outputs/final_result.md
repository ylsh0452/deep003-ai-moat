# AI Token 成本仪表盘 — 最终成果

## 问题

按量计费时代，Token 消耗直接影响成本。月预算 ¥50 是否够用——需要数据，不是感觉。

## 解决方案

一个纯前端仪表盘 + 命令行日志脚本，记录和可视化 AI API 的 Token 消耗与成本。

## 产出文件

| 文件 | 说明 |
|---|---|
| `project/index.html` | 仪表盘主页（统计卡片 + 趋势图 + 饼图 + 表格 + 表单） |
| `project/log.js` | 命令行日志脚本 |
| `project/log.json` | 5 条真实使用记录 |
| `screenshots/dashboard.png` | 运行截图 |

## 验证方式

1. 浏览器打开 `project/index.html`，确认统计卡片、图表、表格、表单均正常
2. 命令行执行 `node project/log.js "测试" 100 200`，确认日志写入 log.json
3. GitHub 仓库：https://github.com/ylsh0452/deep003-ai-moat/tree/main/cost-dashboard

## 与信息壁垒报告的关系

本仪表盘是选修任务一（AI 信息壁垒报告）行动建议的直接落地产物，验证了报告中"低成本方案可行"的结论——5 次真实 API 调用总计约 ¥0.02。
