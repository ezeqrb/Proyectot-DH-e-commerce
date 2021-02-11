
var vermas = document.getElementById('vermas')

console.log(vermas)
let click = 0 
vermas.addEventListener('click', ()=> {
    click = click + 1;
    

    fetch(`http://localhost:3000/shop/vermas?page=${click}`)
    .then(response => response.json())
    .then(data => console.log(data));
  
    

})

