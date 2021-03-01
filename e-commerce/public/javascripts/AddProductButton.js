function cartNumbers(item){
    if (localStorage.getItem("cart")){
        let productsInCart = JSON.parse (localStorage.getItem ("cart"))
        productsInCart.push (item)
    }else{
        localStorage.setItem ("cart" , JSON.stringify (item))
    }
}

let carts = document.querySelectorAll('.add-cart')

for (let i=0 ; i<carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(carts[i])
    })

}
