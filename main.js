let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');
let fortaleza = document.getElementById('fortaleza');

const cadenaCaracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#%&*()_-+=[]{}|;:,.<>';

boton.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiar);

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    
    if (numeroDigitado < 4) {
        alert("La cantidad de caracteres tiene que ser mayor que 4");
        return; // Salimos de la función
    }
    
    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        //console.log(caracterAleatorio);

        password += caracterAleatorio;
    }

    contrasena.value = password;
    evaluarContrasena(password);
}

function limpiar() {
    contrasena.value = '';
    fortaleza.textContent = ''; // Se limpia el mensaje de fortaleza
}

function evaluarContrasena(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[!@#%&*()_\-+=\[\]{}|;:,.<>]/.test(password);

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        fortaleza.textContent = "¡Contraseña fuerte!";
        fortaleza.style.color = "green"; 
    } else if ((tieneMayuscula || tieneMinuscula) && tieneNumero) {
        fortaleza.textContent = "Contraseña moderada. Considera agregar caracteres especiales.";
        fortaleza.style.color = "orange";
    } else {
        fortaleza.textContent = "Contraseña débil. Agrega mayúsculas, números y caracteres especiales.";
        fortaleza.style.color = "red";
    }
}








