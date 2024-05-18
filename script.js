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
  document.getElementById('formulario-contacto').reset(); 
  return true;
}

const scrollTopButton = document.getElementById('btn-scroll-top');

function toggleScrollTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

scrollTopButton.addEventListener('click', scrollToTop);

window.onscroll = function () {
  toggleScrollTopButton();
};