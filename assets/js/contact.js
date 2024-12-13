document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Por favor, complete todos los campos del formulario.');
  } else {
    alert('Formulario enviado correctamente.');
  }
});