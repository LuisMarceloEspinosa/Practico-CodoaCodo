document.querySelector(".button-menu-toggle")
.addEventListener("click", function() {
document.querySelectorAll(".nav-links").forEach(function(nav){
  nav.classList.toggle("navbar-responsive");
});
});

function validarFormulario(event) {
  event.preventDefault();
  var nombre = document.getElementById('nombre').value;
  var telefono = document.getElementById('telefono').value;
  var email = document.getElementById('email').value;
  var metodoContacto = document.querySelector('input[name="metodo_contacto"]:checked');
  var motivo = document.getElementById('motivo').value;
  var mensaje = document.getElementById('mensaje').value;

  if (nombre == '' || email == '' || telefono == '' || metodoContacto == null || motivo == '' || mensaje == '') {
    alert('Todos los campos son obligatorios');
    return false;
  }

  alert('Mensaje enviado exitosamente');
  document.getElementById('formulario-contacto').reset(); // Limpiar el formulario después de enviarlo
  return true;
}
// Obtener referencia al botón scroll-top-btn
const scrollTopButton = document.getElementById('btn-scroll-top');

// Función para mostrar u ocultar el botón dependiendo de la posición de desplazamiento
function toggleScrollTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

// Función para desplazarse suavemente al inicio de la página al hacer clic en el botón
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Agregar evento de clic al botón para desplazarse al inicio
scrollTopButton.addEventListener('click', scrollToTop);

// Agregar evento de desplazamiento para mostrar u ocultar el botón
window.onscroll = function () {
  toggleScrollTopButton();
};