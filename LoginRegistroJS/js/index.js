//Declarar variables para eliminar los objetos de formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//Formulario eventos
formulario.addEventListener('submit', login);

//Funciones a ejecutar
function login(e){
    e.preventDefault();
   
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuario == '' || passwordVal == ''){
        return;
    }

    console.log('El valor para user es: ' + usuarioVal);
    console.log('El valor para password es: ' + passwordVal);


}