const products = {
  // Vegetables
  tomato:   { name: "Tomato", price: 30 },
  potato:   { name: "Potato", price: 25 },
  onion:    { name: "Onion", price: 40 },
  carrot:   { name: "Carrot", price: 35 },
  bitterGourd: { name: "Bitter Gourd", price: 45 },
  cabbage:  { name: "Cabbage", price: 30 },
  spinach:  { name: "Spinach", price: 20 },

  // Fruits
  apple:    { name: "Apple", price: 100 },
  banana:   { name: "Banana", price: 40 },
  orange:   { name: "Orange", price: 60 },
  mango:    { name: "Mango", price: 120 },
  guava:    { name: "Guava", price: 50 },
  grapes:   { name: "Grapes", price: 80 },

  // Rice & Atta
  rice:     { name: "Rice", price: 70 },
  wheat:    { name: "Wheat Atta", price: 65 },
  ragi:     { name: "Ragi Flour", price: 55 },
  jowar:    { name: "Jowar", price: 60 },
  oats:     { name: "Oats", price: 90 },

  // Dairy
  milk:     { name: "Milk", price: 60 },
  curd:     { name: "Curd", price: 50 },
  butter:   { name: "Butter", price: 90 },
  paneer:   { name: "Paneer", price: 120 },
  ghee:     { name: "Ghee", price: 180 },
  eggs:     { name: "Eggs", price: 70 },

  // Snacks & Beverages
  biscuits: { name: "Biscuits", price: 30 },
  chips:    { name: "Chips", price: 40 },
  tea:      { name: "Tea", price: 120 },
  coffee:   { name: "Coffee", price: 150 },
  softDrinks: { name: "Soft Drinks", price: 60 },
  fruitJuice: { name: "Fruit Juice", price: 80 }
};
function getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
    localStorage.setItem("cart",JSON.stringify(cart));
}
document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".add-to-cart");
    const cartList = document.getElementById("cartlist");
    const totalBtn = document.getElementById("totalbtn");
    renderCart();

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            //which product was clicked
            const key = this.dataset.product;

            // Get product object
            const product = products[key];

            // Update total
            const cart =getCart();
            cart.push(product);
            saveCart(cart)
            renderCart();

            // Create cart item
            const li = document.createElement("li");
            li.innerHTML = `
                ${product.name} - ₹${product.price}
                <div style="text-align:left">
                <button class="remove btn btn-sm btn-danger">Remove</button>
                </div>
                <br>
            `;

            // Remove logic
            li.querySelector(".remove").addEventListener("click", function () {
                total -= product.price;
                li.remove();
            });

            cartList.appendChild(li);
        });
    });


});
document.addEventListener("DOMContentLoaded", () => {
    const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
    popovers.forEach(el => new bootstrap.Popover(el));
});
function renderCart() {
  const cartList = document.getElementById("cartlist");
  cartList.innerHTML = "";

  const cart = getCart();
  let total = 0;

  cart.forEach((product, index) => {
    total += product.price;

    const li = document.createElement("li");
    li.innerHTML = `
      ${product.name} - ₹${product.price}
      <div style="text-align:left">
        <button class="remove btn btn-sm btn-danger">Remove</button>
      </div>
      <br>
    `;

    li.querySelector(".remove").addEventListener("click", function () {
      removeItem(index);
    });

    cartList.appendChild(li);
  });

  document.getElementById("totalbtn").innerText = `Total price: ₹${total}`;
}
function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}
