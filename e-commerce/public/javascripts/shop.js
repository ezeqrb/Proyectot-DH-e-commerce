

var vermas = document.getElementById('vermas')

console.log(vermas)
let click = 0 
vermas.addEventListener('click', ()=> {
    click = click + 1;
    

    fetch(`http://localhost:3000/shop/vermas?page=${click}`)
    .then(response => response.json())
    .then(function (data){
        var cardsContainer = document.querySelector('.cardsContainer')
        for(let i = 0 ; i < data.products.length ; i++){
            cardsContainer.innerHTML+=`
            <div class="cards" id="cards">
                <div class="card" style="width: 18rem;">
                    <img src="/images/Products/${data.products[i].Picture}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${data.products[i].Name}</h5>
                      <p class="card-text">$${data.products[i].Price}</p>
                      <a href="/products/${data.products[i].Id}" class="btn btn-primary">Ver</a>
                    </div>
                </div>    
            </div>
            `
        }
         console.log(data)
        if(data.status== "stop" ){
            vermas.style.display="none"
        }
        })

})

