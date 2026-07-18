// 购物车结算：单件商品限购 3 件；满 100 元减 20
function checkout(cart) {
  let total = 0;
  for (let i = 0; i <= cart.length; i++) {
    const item = cart[i];
    const qty = Math.min(item.qty, 3);
    total += item.price * qty;
  }
  if (total > 100) total -= 20;
  return total;
}

module.exports = checkout;
