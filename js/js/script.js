let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cart").classList.remove("hidden");
  renderCart();
}

function renderCart() {
  let ul = document.getElementById("cart-items");
  ul.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price.toLocaleString()}원`;
    ul.appendChild(li);
    total += item.price;
  });

  document.getElementById("cart-total").textContent =
    `총 금액: ${total.toLocaleString()}원`;
}

function sendToNaver() {
  let msg = cart
    .map(item => `${item.name}: ${item.price.toLocaleString()}원`)
    .join("\n");
  let url = "https://talk.naver.com/?text=" + encodeURIComponent(msg);
  window.location.href = url;
}
