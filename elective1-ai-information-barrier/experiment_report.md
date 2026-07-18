# 08 · 最小实验：用低价国产 API 完成一次真实 bug 修复

> 对应 [action_plan.md](action_plan.md) 场景一第 3 条、[reflection.md](reflection.md) 中"缺少动手验证"的补课。实验日期：2026-07-18。所有过程文件保留在 [experiment/](experiment/) 目录，可完整复现。

## 实验目的

验证报告主线二的核心判断：**"低价 API + 成熟 harness"组合可以用极低成本完成真实编码任务**，并拿到第一手的耗时、token 消耗和成本数据，而不是转述媒体数字。

## 实验设置

| 项 | 值 |
|---|---|
| 模型 | deepseek-v4-pro（DeepSeek 官方 Anthropic 兼容端点 `api.deepseek.com/anthropic`） |
| 任务 | 修复一个含 2 个 bug 的 JS 购物车结算函数（数组越界 `<=`、满减边界 `>` 应为 `>=`） |
| 验证方式 | 4 个预写测试用例（`experiment/test.js`），修复前后各跑一次 |
| 调用方式 | curl 直接调 `/v1/messages`，请求体见 `experiment/body.json`，原始响应见 `experiment/response.json` |

## 实验结果

| 指标 | 数值 |
|---|---|
| 修复前测试 | 4/4 失败（全部抛出 undefined 异常） |
| 修复后测试 | **4/4 通过**，两个 bug 一次性全部修复（含未在提示中明说的越界 bug） |
| 端到端耗时 | 6593 ms（模型输出含 thinking 推理块） |
| Token 消耗 | 输入 175 + 输出 456 = 631 tokens |
| 单次成本估算 | **< 0.01 元人民币**（按公开报道的 DeepSeek 定价区间上限粗估；精确单价以[官方定价页](https://api-docs.deepseek.com/quick_start/pricing)为准，本机访问该页受限未能核实） |

## 附带发现（比实验本身更有价值）

1. **harness 与模型确实已解耦**：本实验所在的开发环境本身就是 Claude Code harness + `ANTHROPIC_BASE_URL` 指向 DeepSeek 兼容端点的组合，日常使用稳定。这直接验证了主线一"竞争焦点转向 harness"和主线四"兼容标准降低锁定"的判断——换模型后端只需改一个环境变量。
2. **推理模型的响应结构差异**：deepseek-v4-pro 返回 `thinking` + `text` 两个内容块，首次解析按 `content[0].text` 取值直接报错。这类"文档不会强调、上手必踩"的坑，正是一手实验相对二手评测的信息差所在。
3. **中文请求体编码坑**：Windows 下 shell 变量替换会破坏 JSON 中的中文（`invalid unicode code point`），改为 Node 写 UTF-8 文件 + `--data-binary @file` 后解决。
4. **对照报告数据**：雷峰网横评称 DeepSeek"单个 bug 修复约 $0.05"[#14]，本实验实测约为其 1/40——差异来自任务规模（横评是真实工程任务，本实验是最小任务），说明引用成本数据时必须同时说明任务粒度，否则没有比较意义。

## 结论

"50 元/月内搭建个人 Agent 环境"的行动建议成立且留有巨大余量：按本实验单次成本粗估，50 元预算足够支撑数千次同量级的小任务修复。下一步实验（待做）：用同一端点驱动开源 Agent（Cline/OpenCode）跑多文件任务，测量任务粒度放大后成本的非线性增长。
