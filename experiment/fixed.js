function checkout(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const qty = Math.min(item.qty, 3);
    total += item.price * qty;
  }
  if (total >= 100) total -= 20;
  return total;
}

module.exports = checkout;
