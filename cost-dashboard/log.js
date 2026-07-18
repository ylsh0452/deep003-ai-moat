// 命令行 Token 消耗日志记录脚本
// 用法: node log.js "任务描述" input_tokens output_tokens [模型名]

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length < 3) {
  console.log('用法: node log.js "任务描述" <input_tokens> <output_tokens> [model]');
  console.log('示例: node log.js "修复了搜索排序 bug" 320 1450 deepseek-v4-pro');
  console.log('默认模型: deepseek-v4-pro');
  process.exit(1);
}

const desc = args[0].replace(/"/g, '');
const input = parseInt(args[1]);
const output = parseInt(args[2]);
const model = args[3] || 'deepseek-v4-pro';

if (isNaN(input) || isNaN(output)) {
  console.log('错误: input_tokens 和 output_tokens 必须是数字');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const entry = { date: today, model, input, output, desc, loggedAt: new Date().toISOString() };

const dataFile = path.join(__dirname, 'log.json');
let data = [];
try { data = JSON.parse(fs.readFileSync(dataFile, 'utf8')); } catch(e) { /* 首次运行 */ }
data.push(entry);
fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

const PRICING = {
  'deepseek-v4-pro': { input: 2, output: 2 },
  'claude-sonnet-4-6': { input: 21, output: 105 },
  'claude-opus-4-8': { input: 35, output: 175 },
  'gpt-5-mini': { input: 1.75, output: 3.5 },
  'gpt-5.5': { input: 35, output: 210 },
  'qwen3-coder': { input: 2, output: 6 },
  'kimi-k2.5': { input: 1.5, output: 6 },
};
const p = PRICING[model] || { input: 10, output: 40 };
const costYuan = (input * p.input + output * p.output) / 1_000_000;
const totalTokens = input + output;

console.log(`\n已记录: "${desc}"`);
console.log(`模型: ${model} | ${totalTokens.toLocaleString()} tokens | 估算成本: ¥${costYuan.toFixed(4)}`);
console.log(`日志文件: ${dataFile} (累计 ${data.length} 条记录)\n`);
