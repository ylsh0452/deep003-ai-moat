const fs = require('fs');
const path = require('path');
const dir = __dirname;
const md = fs.readFileSync(path.join(dir, 'ai_information_barrier_report.md'), 'utf8');

// 极简 Markdown → HTML 转换
let html = md
  .replace(/^### (.+)/gm, '<h3>$1</h3>')
  .replace(/^## (.+)/gm, '<h2>$1</h2>')
  .replace(/^# (.+)/gm, '<h1>$1</h1>')
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  .replace(/^> (.+)/gm, '<blockquote>$1</blockquote>')
  .replace(/^- (.+)/gm, '<li>$1</li>')
  .replace(/^---$/gm, '<hr>')
  .replace(/\n\n/g, '</p><p>')
  .replace(/```[\s\S]*?```/g, (m) => '<pre><code>' + m.replace(/```\w*\n?/g, '').replace(/```/g, '') + '</code></pre>')
  .replace(/\|(.+)\|/g, (m) => {
    if (!m.includes('---')) {
      const cells = m.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }
    return '';
  });

html = `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
  body { font-family: "Microsoft YaHei", "SimHei", sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.8; color: #333; }
  h1 { border-bottom: 3px solid #2563eb; padding-bottom: 8px; }
  h2 { border-bottom: 2px solid #93c5fd; padding-bottom: 6px; margin-top: 32px; }
  h3 { margin-top: 24px; color: #1e40af; }
  blockquote { border-left: 4px solid #2563eb; padding: 8px 16px; margin: 16px 0; background: #f0f7ff; color: #555; }
  table { border-collapse: collapse; width: 100%; margin: 12px 0; }
  td, th { border: 1px solid #ddd; padding: 8px 12px; text-align: left; }
  strong { color: #1e40af; }
  pre { background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; }
  hr { border: none; border-top: 1px solid #e5e7eb; margin: 24px 0; }
  p { margin: 8px 0; }
  a { color: #2563eb; }
</style></head><body><p>${html}</p></body></html>`;

fs.writeFileSync(path.join(dir, 'report.html'), html);
console.log('HTML generated:', html.length, 'bytes');
