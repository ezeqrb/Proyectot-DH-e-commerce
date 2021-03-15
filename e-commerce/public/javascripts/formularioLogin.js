const formulario = document.getElementById('form')
const inputs = document.querySelectorAll('#form input')

// Expresiones regulares para email y contraseña 
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}





// campos inicialmente en false para la validación posterior 
const campos = {
    email: false,
    password: false
}

// Funcion que valida el formulario
const validarFormulario = (e)=>{
    switch (e.target.name){
        case "email":
            validarCampo(expresiones.email,e.target,'email')
        break;
        case "passcrypt": 
            validarCampo(expresiones.password,e.target,"passcrypt")
        break;
    }
}

// Validar campos 
const validarCampo = (expresiones,input,campo) =>{
    if(expresiones.test(input.value)){
        campos.campo = true
    }else{
        campos.campo= false
    }
}

// Event Listener para los inputs con blur para click fuera del campo + enviamos a otra función 
inputs.forEach((input) =>{
    input.addEventListener('blur',validarFormulario)
})


// Logica principal del formulario 
formulario.onsubmit = function(e){
    if(campos){
        console.log ('formulario enviado con exito')
    }else{
        e.preventDefault()
        alert('formulario no se pudo enviar')
    }
}
