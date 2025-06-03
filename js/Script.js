
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');

}
let navBar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}



// Scrip del Login

var x = document.getElementById("login");
var y = document.getElementById("registrar");
var z = document.getElementById("elegir");

function login() {
    x.style.left = "20px";
    y.style.left = "450px";
    z.style.left = "0px";
}

function registrar() {
    x.style.left = "400px";
    y.style.left = "20px";
    z.style.left = "120px";
}

function registrarUser() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    var aceptoTerminos = document.getElementById("aceptoTerminos").checked;

    // Obtener los registros de usuarios existentes del localStorage (si existen)
    var registros = JSON.parse(localStorage.getItem("registros")) || [];
    var nuevoRegistro = {
        nombre: nombre,
        correo: correo,
        contraseña: contraseña,
        aceptoTerminos: aceptoTerminos
    };

    registros.push(nuevoRegistro);

    // Restablecer los campos del formulario
    document.getElementById("registrar").reset();
    if (aceptoTerminos == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'porfavor acepte los terminos y condiciones',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: 'rgba(0,0,0,0.5)',
            allowOutsideClick: false
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Su registro se a realizado con éxito',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: 'rgba(0,0,0,0.5)',
            allowOutsideClick: false
        });
        localStorage.setItem("registros", JSON.stringify(registros));
    }
}

// function iniciarSesion(event) {
//     event.preventDefault(); // Evitar que el formulario se envíe y se recargue la página

//     var usuario = "usuario";
//     var contraseña = "contraseña";

//     var nombreUsuario = document.getElementById("nombreUsuario").value;
//     var contraseñaUser = document.getElementById("contraseñaUser").value;

//     if (nombreUsuario === usuario && contraseñaUser === contraseña) {
//         window.location.href = 'agregarProducto.html';
//     } else {
//         alert("Usuario y contraseña incorrectos");
//     }
// }

function iniciarSesion() {
    var usuario = document.getElementById('nombreUsuario').value;
    var contraseña = document.getElementById("contraseñaUser").value;

    var registros = JSON.parse(localStorage.getItem("registros")) || [];

    var usuarioEncontrado = registros.find(function (registro) {
        return registro.nombre === usuario && registro.contraseña === contraseña;
    });
    document.getElementById("login").reset();
    if (usuarioEncontrado) {
        Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'Inicio de sesión exitoso. Bienvenido a esta nueva aventura; tu ' +
                "\n Usuario  es:" + usuario + "\n y tu Contraseña es: " + contraseña,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: 'rgba(0,0,0,0.5)',
            allowOutsideClick: false
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Inicio de sesión fallido. Usuario o contraseña incorrectos.',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: 'rgba(0,0,0,0.5)',
            allowOutsideClick: false
        });
    }
}

document.getElementById("cart-btn").addEventListener("click", function () {
    // Muestra el contenedor del carrito
    document.getElementById("shopping-cart").style.display = "block";
});


function mostrarRecuperarContraseña() {
    var recuperarContraseña = document.getElementById("recuperarContraseña");
    recuperarContraseña.style.display = "block";
}

function recuperarContraseña() {
    var correoRecuperacion = document.getElementById("correoRecuperacion").value;

    var registros = JSON.parse(localStorage.getItem("registros")) || [];
    var registroEncontrado = registros.find(function (registro) {
        return registro.correo === correoRecuperacion;
    });

    if (registroEncontrado) {
        var usuario = registroEncontrado.nombre;
        var contraseña = registroEncontrado.contraseña;
        Swal.fire({
            html: "<p>Tu usuario y contraseña son:</p>" +
                "<p>Usuario: " + usuario + "</p>" +
                "<p>Contraseña: " + contraseña + "</p>",
            icon: "info",
            confirmButtonText: "Cerrar",
        });

    } else {
        Swal.fire({
            text: "El correo electrónico ingresado no está registrado.",
            icon: "error",
            confirmButtonText: "Cerrar",
        });

    }

    // Cierra la ventana emergente
    var recuperarContraseña = document.getElementById("recuperarContraseña");
    recuperarContraseña.style.display = "none";
}

function cancelar() {
    var recuperarContraseñaPopup = document.getElementById('recuperarContraseña');
    recuperarContraseñaPopup.style.display = 'none';
}

// Función para cerrar el contenedor del carrito
function closeBtn() {
    document.getElementById("shopping-cart").style.display = "none";
}

var swiper = new Swiper(".servicios-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        deplay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },

    },

});


var swiper = new Swiper(".equipo-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        deplay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});


function validarCorreo() {
    var emailInput = document.getElementById("email-input");
    var email = emailInput.value;

    if (email.trim() === "") {
        alert("Ingrese una dirección de correo electrónico.");
        return;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Ingrese una dirección de correo electrónico válida.");
        return;
    }
    enviarCorreo(email);
}

function enviarCorreo(email) {
    console.log("Correo electrónico enviado: " + email);
}




// Busqueda del producto

const searchFor = document.querySelector('.search-form');
const searchBox = document.querySelector('#search');
const items = document.querySelectorAll('.item');

// Agregar evento de escucha al formulario de búsqueda
searchFor.addEventListener('submit', function (event) {
    event.preventDefault();

    const searchTerm = searchBox.value.trim().toLowerCase();

    // Variable para verificar si se encontró una coincidencia
    let matchFound = false;

    // Realizar la búsqueda en los productos de la tienda
    for (let item of items) {
        const itemName = item.querySelector('.titulo-item').textContent.toLowerCase();

        if (itemName.includes(searchTerm)) {
            item.style.display = 'block';
            matchFound = true;
        } else {
            // Oculta el producto no coincidente
            item.style.display = 'none';
        }
    }

    // Mostrar una alerta personalizada si no se encontró ninguna coincidencia
    if (!matchFound) {
        Swal.fire({
            icon: 'warning',
            title: 'No se encontraron resultados',
            text: 'No se encontraron resultados para la búsqueda.',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            backdrop: 'rgba(0,0,0,0.5)',
            allowOutsideClick: false
        }).then(() => {
            window.location.href = 'tienda.html';
        });
    }

});




