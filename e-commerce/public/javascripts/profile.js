const as = document.querySelectorAll('#v-pills-tab a')
console.log(document.URL)


// Event Listener para los inputs con blur para click fuera del campo + enviamos a otra función 
as.forEach((a) =>{
    input.addEventListener('click',validarSolapa)
})


const validarSolapa = (e)=>{
    switch (e.target.name){
        case "email":
            validarCampo(expresiones.email,e.target,'email')
        break;
        case "passcrypt": 
            validarCampo(expressiones.password,e.target,"passcrypt")
        break;
    }
}