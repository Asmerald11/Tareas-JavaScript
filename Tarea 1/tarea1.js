let usuario;
let password;

function login() {
    usuario = prompt("Ingrese el usuario")
    password = prompt("Ingrese la contraseña")
    usuario = String(usuario);
    password = parseInt(password);
}

function ingresar() {
    if (usuario == "administrador" && password == 1234) {
        result.innerHTML = ("Bienvenido usuario")
    } else { 
        result.innerHTML = ("Usuario o contraseña incorrectos");
    }
}