# 02 · 信息来源记录

> 检索日期：2026-07-18。共 15 条，按来源类型分组。「类型」标注该信息的一手/二手属性，二手信息的关键数据在使用前需交叉验证。

## A. 官方公告与文档（一手）

| # | 标题 | 来源 | 时间 | 一句话摘要 |
|---|---|---|---|---|
| 1 | [GitHub Copilot is moving to usage-based billing](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/) | GitHub 官方博客 | 2026-04 公告，6-01 生效 | Copilot 从固定包月转向 AI Credits 按量计费，代码补全保持免费，Agent 模式按 Token 扣费 |
| 2 | [火山杯 Agent 创新大赛](https://www.volcengine.com/activity/agent/competition/2026) | 火山引擎官方活动页 | 2026 全年赛程 | 面向企业/高校的 Agent 大赛，提供扣子、Trae 等全栈工具链，Q3-Q4 全国总决赛 |
| 3 | [腾讯云代码助手 计费概述](https://cloud.tencent.com.cn/document/product/1749/126592) | 腾讯云官方文档 | 2026-07-01 生效 | 国内代表性定价：标准版 99 元/月 2000 积分起，积分消耗与模型和任务复杂度挂钩 |
| 4 | [阿里云 Qoder CN 完整介绍](https://developer.aliyun.com/article/1745707) | 阿里云开发者社区 | 2026-05 品牌升级后 | 通义灵码升级为 Qoder CN 产品矩阵：IDE/CLI/云端 Agent/数字员工，CLI 以 Apache 2.0 开源 |

## B. 学术论文（一手）

| # | 标题 | 来源 | 时间 | 一句话摘要 |
|---|---|---|---|---|
| 5 | [Harness Engineering for Agentic AI Coding Tools: An Exploratory Study](https://arxiv.org/abs/2602.14690) | arXiv | 2026-02 提交，06 更新 | 对 2853 个 GitHub 仓库的实证研究：AGENTS.md 已成跨工具配置 Agent 行为的事实标准 |

## C. 基准测试与榜单（一手半：方法公开可复现，但需注意评测口径）

| # | 标题 | 来源 | 时间 | 一句话摘要 |
|---|---|---|---|---|
| 6 | [SWE-bench February 2026 leaderboard update](https://simonwillison.net/2026/Feb/19/swe-bench/) | Simon Willison 博客（独立分析） | 2026-02-19 | 官方榜单用统一 harness 重测：头部模型挤在 70-77% 区间，第 1 名和第 8 名只差约 6 分 |
| 7 | [SWE-bench Verified (Agentic Coding) Leaderboard](https://llm-stats.com/benchmarks/swe-bench-verified-(agentic-coding)) | LLM Stats 聚合榜单 | 持续更新 | 聚合各模型在 500 道真实 GitHub issue 修复任务上的得分与单任务成本 |

## D. 开源仓库（一手）

| # | 标题 | 来源 | 时间 | 一句话摘要 |
|---|---|---|---|---|
| 8 | [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | GitHub，MIT 协议 | 2026 发布 1.0 | ~75K star 的开源自主编码 Agent，Docker 沙箱运行，支持 100+ 模型供应商，CI/CD 无头模式最强 |
| 9 | [cline/cline](https://github.com/cline/cline) | GitHub，Apache 2.0 | 持续迭代 3.x | ~62K star 的 VS Code 扩展 + CLI + SDK，MCP 原生支持，每步操作需用户批准 |
| 10 | [Best Open Source CLI Coding Agents in 2026](https://pinggy.io/blog/best_open_source_cli_coding_agents/) | Pinggy 技术博客（二手，但含仓库直链） | 2026 | 开源 CLI 编码 Agent 横评：Aider 无新 release（2025-08 至今）、OpenCode ~165K star 成 Claude Code 开源替代 |

## E. 行业分析与成本研究（二手，关键数据需交叉验证）

| # | 标题 | 来源 | 时间 | 一句话摘要 |
|---|---|---|---|---|
| 11 | [AI coding assistant pricing and ROI guide (2026)](https://getdx.com/blog/ai-coding-assistant-pricing/) | DX（工程效能研究机构） | 2026-06 | 对 400+ 企业的研究：PR 吞吐量中位增益仅 7.76%，远低于厂商宣传的 3 倍；实际人均成本 $200-600/月 |
| 12 | [GitHub Copilot 按 Token 计费 AI 成本治理时代来临](https://www.cio.com.tw/116923/) | CIO Taiwan | 2026-06 | 计费转型的企业侧影响分析：Token 成为新的 IT 成本单位，成本治理成为工程管理新课题 |
| 13 | [一夜涨价60倍，有人冲到3000美元/月](https://m.sohu.com/a/1030736207_115128/) | 搜狐科技（二手，用户晒单） | 2026-06 | Copilot 按量计费后的极端账单案例：$50/月 → 预估 $3000/月，社区出现退订潮 |
| 14 | [国产 Coding 争霸赛：MiniMax 爆冷登顶，DeepSeek 性价比称王](https://m.leiphone.com/category/industrynews/ft5tFfCB8Zh0ZFo8.html) | 雷峰网（含实测数据） | 2026-06 | 国产模型真实工程任务横评：MiniMax M3 综合 85.3 分居首；DeepSeek API 约 2 元/百万 Token 性价比最优 |

## F. 标准与生态（二手综述，底层事实可查证）

| # | 标题 | 来源 | 时间 | 一句话摘要 |
|---|---|---|---|---|
| 15 | [The State of MCP: Everything That Changed in H1 2026](https://serpapi.com/blog/the-state-of-mcp-everything-that-changed-in-h1-2026/) | SerpApi 技术博客 | 2026-07 | MCP 捐入 Linux 基金会 AAIF 后成为中立标准；SDK 月下载 ~1 亿次；MCP 1.0 于 2026-06-24 发布 |

## 备查信源（检索中确认存在、未纳入正文分析）

- [GOAI 世界人工智能开源大赛报名开启](https://www.infoq.cn/article/r3sAtSl97Gx5CuZHXOdi)（InfoQ，2026-07：总奖金池 500 万元，2026-09-22 杭州决赛）
- [第二届 NVIDIA DGX Spark 黑客松](https://www.eet-china.com/mp/a505282.html)（2026-06-24 ~ 08-02，主题「让 Agent 创作一切」）
- [一个 4 亿的市场，为什么让所有大厂挤破头？](https://w.geekpark.net/news/367378)（极客公园：IDC 数据，中国 AI 编程市场 2025 年 3.99 亿 → 2026 预计 11.73 亿元）
- [Cursor 2000 万用户后，AI 编程工具开始淘汰初级程序员了吗？](https://cloud.tencent.com.cn/developer/article/2703795)（腾讯云开发者社区：就业结构影响讨论）
