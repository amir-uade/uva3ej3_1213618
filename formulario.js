document.addEventListener('DOMContentLoaded', function () {
  const nombreInput = document.getElementById('formGroupExampleInput');
  const emailInput = document.getElementById('formGroupExampleEmail');
  const asuntoInput = document.getElementById('formAsunto');
  const mensajeInput = document.getElementById('formMensaje');
  const submitBtn = document.getElementById('enviar');

  const nombreError = document.getElementById('nombreError');
  const emailError = document.getElementById('emailError');
  const asuntoError = document.getElementById('asuntoError');
  const mensajeError = document.getElementById('mensajeError');
  const successMessage = document.getElementById('successMessage');

  submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Limpiar errores previos
    [nombreInput, emailInput, asuntoInput, mensajeInput].forEach(el => el.classList.remove('is-invalid'));
    [nombreError, emailError, asuntoError, mensajeError].forEach(el => el.style.display = 'none');
    successMessage.style.display = 'none';

    let isValid = true;

    if (!nombreInput.value.trim()) {
      nombreInput.classList.add('is-invalid');
      nombreError.style.display = 'block';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      emailError.style.display = 'block';
      isValid = false;
    }

    if (!asuntoInput.value.trim()) {
      asuntoInput.classList.add('is-invalid');
      asuntoError.style.display = 'block';
      isValid = false;
    }

    if (!mensajeInput.value.trim()) {
      mensajeInput.classList.add('is-invalid');
      mensajeError.style.display = 'block';
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent = `Gracias por tu contacto, ${nombreInput.value.trim()}. En breve le estaré respondiendo.`;
      successMessage.style.display = 'block';
    }
  });
});
