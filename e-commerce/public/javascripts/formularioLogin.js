const formulario = document.getElementById('form')
const imputs = document.querySelectorAll('#form input')

// Expresiones regulares para email y contraseña 
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// campos inicialmente en false para la validación posterior 
const campos = {
email: false,
password: false
}

// Funcion que valida los campos 
const validarFormulario = (e)=>{
    switch (e.target.name){
        case "email":
            validarCampo(expresiones.email,e.target,'email')
        break;
        case "passcrypt": 
            validarCampo(expressiones.password,e.target,"passcrypt")
    }
}

// Validar campos 
const validarCampos = (expresiones,input,campo) =>{
    if(expresiones.test(input.value)){
        
    }else{

    }
}

// Event Listener para los inputs con blur para click fuera del campo + enviamos a otra función 
inputs.forEach((input) =>{
    input.addEventListener('blur',validarFormulario)
})


// Logica principal del formulario 

if(campos){

}else{

}