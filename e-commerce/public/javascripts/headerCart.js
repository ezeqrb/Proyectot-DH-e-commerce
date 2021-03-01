

console.log("conected")


let carts = document.querySelectorAll('.add-cart')

for (let i=0 ; i<carts.length; i++){
    carts[i].addEventListener('click',()=>{
        console.log("added to cart")
        cartNumbers(carts[i])
    })

}

function cartNumbers(item){
    let productNumberts = localStorage.getItem('item')
    console.log(item)
    
    if()
    localStorage.setItem(item,1)
 
}