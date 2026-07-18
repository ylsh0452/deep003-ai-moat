const path = process.argv[2] || './buggy.js';
const checkout = require(path.startsWith('.') ? path : './' + path);

const cases = [
  { name: '普通结算', cart: [{ price: 30, qty: 2 }], expect: 60 },
  { name: '限购3件', cart: [{ price: 10, qty: 5 }], expect: 30 },
  { name: '恰好满100应减20', cart: [{ price: 50, qty: 2 }], expect: 80 },
  { name: '空购物车', cart: [], expect: 0 },
];

let failed = 0;
for (const c of cases) {
  let got;
  try {
    got = checkout(c.cart);
  } catch (e) {
    got = `抛出异常: ${e.message}`;
  }
  const ok = got === c.expect;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'} | ${c.name} | 期望 ${c.expect}, 实际 ${got}`);
}
process.exit(failed);
