console.log ("cone")

function cartNumbers(item){
    if (localStorage.getItem("cart")){
        let productsInCart = JSON.parse (localStorage.getItem ("cart"))
        productsInCart = {... productsInCart , item}
        localStorage.setItem ("cart" , JSON.stringify (productsInCart))
    }else{
        localStorage.setItem ("cart" , JSON.stringify (item))
    }
}

let carts = document.querySelector('.add-cart')

let id= document.URL.slice(document.URL.lastIndexOf('/')+1)
carts.addEventListener('click',()=>{cartNumbers(id)})

console.log (id)



