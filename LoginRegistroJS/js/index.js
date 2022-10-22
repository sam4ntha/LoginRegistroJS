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
        crearMensaje('Verifica tus campos', 'danger');
        return;
    }

    if(localStorage.getItem('usuario')){
        let objeto = JSON.parse(localStorage.getItem('usuario'));

        if(usuarioVal == objeto.user && passwordVal == objeto.pass){
             crearMensaje('Login correcto', 'success');
             localStorage.setItem('sesion', 'activa');
            setTimeout(function(){
                window.open('./inicio.html', '_self');
            },2000);
            } else {
             crearMensaje('Usuario incorrecto', 'danger');
        }
    } else {
         crearMensaje('No hay registros', 'danger');
    }

}