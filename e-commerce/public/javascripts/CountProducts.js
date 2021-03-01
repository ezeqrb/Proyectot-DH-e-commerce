
let productsQuantity
if (localStorage.getItem("cart")){
    let JSONProducts = localStorage.getItem ("cart")
let productsInCart = JSON.stringify (JSONProducts)
let spaces = productsInCart.filter (" ")
productsQuantity = spaces.length + 1
}else{
    let productsQuantity = 0
}


