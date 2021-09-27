
function validar(){
    var usuario = document.getElementById("inputUsuario").value;
    var contrasenia = document.getElementById("inputContraseña").value;
    var expresion=/^[0-9]{6}$/
    if(isNaN(usuario))
    {
        alert("El usuario solo debe ser numeros");
        return false;
    }else if(contrasenia.length<6)
    {
        alert("La contraseña es demasiado corta ,debe tener al menos 6 caracteres");
        return false;
    }
    localStorage.setItem("usuario",usuario);

}
function saludo()
{
    alert("Hola Usuario: "+localStorage.getItem("usuario"));
    var nombreDeUsuario=document.getElementById("textoHola");
    nombreDeUsuario.innerHTML()="Hola Usuario: "+localStorage.getItem("usuario");
    
}





