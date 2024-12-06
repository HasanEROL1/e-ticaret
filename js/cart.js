import {
  getFromLocalStorage,
  saveToLocalStorage,
  calculateCartTotal,
  updateCartIcon,
} from "./utils.js";

let cart = getFromLocalStorage();

// Sepete Ekleme yapacak fonksiyon

export const addToCart = (event, products) => {
  const productId = parseInt(event.target.dataset.id);
  // Bu Id ye sahip başka eleman var mı?
  const product = products.find((product) => product.id === productId);
  if (product) {
    //eğer ürün varsa bunu bul
    const exitingItem = cart.find((item) => item.id === productId);

    if (exitingItem) {
      exitingItem.quantity++;
    } else {
      // sepete eklenecek objeyi oluştur

      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      };

      // oluşturulan ürünü sepete ekle
      cart.push(cartItem);
      // ekleme yapılan kartın içeriğini güncelleme

      event.target.textContent = "Added";
    }
    saveToLocalStorage(cart);
    //sepet iconunu güncelle
    updateCartIcon(cart);
    
  }
};

//Sepetten eleman silen fonksiyon
const removeFromCart = (event) => {
  const productId = parseInt(event.target.dataset.id); //elemana id verme
  //elemanı sil
  cart = cart.filter((item) => item.id !== productId);
  // local storage güncelle

  saveToLocalStorage(cart);
  // sayfa güncelle
  renderCartItems();

  //toplamı güncelle
  displayCartTotal();

  //sepet iconunu güncelle
  updateCartIcon(cart);
};

//Card elemanlarını ekrana render eden fonksiyon

export const renderCartItems = () => {
  // htmlde cart itemlerin render edildiği alan

  const cartItemsElement = document.querySelector("#cartItems");

  // html içeriğini oluştur

  cartItemsElement.innerHTML = cart
    .map(
      (item) =>
        `
    <div class="cart-item">
                        <img src="${item.image}"
                            alt="Product">

                         <div class="cart-item-info">
                        <h2 class="cart-item-title">${item.title}</h2>
                            <input type="number" min="1" 
                            value="${item.quantity}"class="cart-item-quantity" data-id='${item.id}'/> 
                        </div>
                        <h2 class="cart-item-price">$${item.price}</h2>
                        <button class="remove-from-cart" data-id="${item.id}">Remove</button>
                        </button>
                    </div>
  `
    )
    .join("");

  // remove butonlarına eriş
  const removeButtons = document.querySelectorAll(".remove-from-cart");
  for (let i = 0; i < removeButtons.length; i++) {
    const removeButton = removeButtons[i];
    removeButton.addEventListener("click", removeFromCart);
  }
  // quantity inputlarına eriş
  const quantityInputs = document.querySelectorAll(".cart-item-quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    const quantityInput = quantityInputs[i];
    quantityInput.addEventListener("change", onQuantityChange);
  }
};
//input değişiminde çalışan fonksiyon
const onQuantityChange = (event) => {
  const newQuantity = +event.target.value;

  const productId = +event.target.dataset.id;

  //yeni miktar 0 dan büyükse
  if (newQuantity > 0) {
    // id si bilinen elemanı bul
    const cartItem = cart.find((item) => item.id === productId);

    // ürün sepette yoksa
    if (!cartItem) return;

    //bulunan ürün miktarını güncelle

    cartItem.quantity = newQuantity;

    // local storage güncelle
    saveToLocalStorage(cart);
    //toplam fiyatı güncelle
    displayCartTotal();
    //sepet iconunu güncelle
    updateCartIcon(cart);
  }
};
// sepet toplamını render etme
export const displayCartTotal = () => {
  // total fiyat
  const cartTotalElement = document.querySelector("#cartTotal");
  // total fiyatı hesapla
  const total = calculateCartTotal(cart);
  // totali güncelle
  cartTotalElement.textContent = `Total:$${total.toFixed(2)}`;
};



