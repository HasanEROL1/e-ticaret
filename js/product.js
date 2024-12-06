// ürünleri API dan alan fonksiyon
export const fetchProducts = async () =>{
    try{
        fetch('db.json')
        const response = await fetch ('db.json')
             // hata yoksa veriyi dönüştür
            if (!response.ok) {
                throw new Error(`Yanlış Url`)
            }
            return await response.json()
            
} catch(error) {
    console.log(`HAtaaaa:  ${error.message}`)

    return []
    
}
}

//ürünleri render eden fonksiyon
export const renderProducts = (product,addToCartCallBack) => {
    // ürünlerin render edileceği kapsamı html den çekme
const productList = document.querySelector('#product-list')

// html içeriğini oluştur

productList.innerHTML = product.map((product) => 
` <div class="product">
        <img src= "${product.image}"
        alt="product-img"
        class="product-img">
        <div class="product-info">
            <h2 class="product-title">${product.title} </h2>
            <p class="product-price">$${product.price}</p>
            <a class="add-to-cart"data-id=${product.id}>Add to Cart</a>
        </div>
     </div>
 `
    
)
.join("")

// Add to cart butonlarının seçimi

const addToCartButtons = document.getElementsByClassName("add-to-cart")
// Add to cart butonlarını seç
for(let i = 0; i < addToCartButtons.length; i++) {
  const addToCartButton = addToCartButtons[i]; //Button collection ı içerisinden her butona eriş

  addToCartButton.addEventListener("click", addToCartCallBack);
}
    ///olay izleyici ekleme

    

}

