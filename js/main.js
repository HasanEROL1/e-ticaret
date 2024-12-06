import { addToCart, displayCartTotal, renderCartItems } from "./cart.js";
import { fetchProducts, renderProducts } from "./product.js";
import { getFromLocalStorage,updateCartIcon } from "./utils.js";

const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});
// *dom yüklenmesi
document.addEventListener("DOMContentLoaded", async () => {

  //sepet verisine eriş
  let cart = getFromLocalStorage()
  // tarayıcı sayfa kontrolü
  if (window.location.pathname.includes("cart.html")) {
    console.log("cart Sayfası");
    renderCartItems();
    displayCartTotal();
  } else {
    console.log("Ana Sayfa");
    const product = await fetchProducts();

    renderProducts(product, (event) => {
      addToCart(event, product);
    });
  }
//  sepet icon güncelle
updateCartIcon(cart);

});
