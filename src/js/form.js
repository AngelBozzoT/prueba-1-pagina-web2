document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que los componentes se carguen antes de buscar el formulario
    setTimeout(() => {
        const form = document.getElementById('appointment-form');
        if (!form) return;

        const feedbackDiv = document.getElementById('form-feedback');
        const errorNombre = document.getElementById('error-nombre');
        const errorEmail = document.getElementById('error-email');
        const errorAsunto = document.getElementById('error-asunto');
        const errorMensaje = document.getElementById('error-mensaje');

        function clearErrors() {
            if(errorNombre) errorNombre.textContent = '';
            if(errorEmail) errorEmail.textContent = '';
            if(errorAsunto) errorAsunto.textContent = '';
            if(errorMensaje) errorMensaje.textContent = '';
            if(feedbackDiv) {
                feedbackDiv.classList.add('hidden');
                feedbackDiv.textContent = '';
            }
        }

        function showError(element, message) {
            if(element) element.textContent = message;
        }

        function isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        function validateForm() {
            let isValid = true;
            clearErrors();

            const nombre = document.getElementById('nombre')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const asunto = document.getElementById('asunto')?.value.trim() || '';
            const mensaje = document.getElementById('mensaje')?.value.trim() || '';

            if (nombre === '') {
                showError(errorNombre, 'El nombre completo es obligatorio.');
                isValid = false;
            } else if (nombre.length < 3) {
                showError(errorNombre, 'El nombre debe tener al menos 3 caracteres.');
                isValid = false;
            }

            if (email === '') {
                showError(errorEmail, 'El correo electrónico es obligatorio.');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError(errorEmail, 'Ingresa un correo válido (ej: nombre@dominio.com).');
                isValid = false;
            }

            if (asunto === '') {
                showError(errorAsunto, 'El asunto de la consulta es obligatorio.');
                isValid = false;
            } else if (asunto.length < 4) {
                showError(errorAsunto, 'El asunto debe tener al menos 4 caracteres.');
                isValid = false;
            }

            if (mensaje === '') {
                showError(errorMensaje, 'Por favor, describe el detalle del vehículo y la falla.');
                isValid = false;
            } else if (mensaje.length < 10) {
                showError(errorMensaje, 'El mensaje debe tener al menos 10 caracteres.');
                isValid = false;
            }

            return isValid;
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm()) {
                if(feedbackDiv) {
                    feedbackDiv.textContent = '¡Solicitud enviada con éxito! Te contactaremos a la brevedad.';
                    feedbackDiv.classList.remove('hidden', 'error');
                    feedbackDiv.classList.add('success');
                }
                form.reset();
                setTimeout(() => {
                    if(feedbackDiv) feedbackDiv.classList.add('hidden');
                }, 5000);
            } else {
                if(feedbackDiv) {
                    feedbackDiv.textContent = 'Por favor, corrige los errores señalados.';
                    feedbackDiv.classList.remove('hidden', 'success');
                    feedbackDiv.classList.add('error');
                }
            }
        });

        const inputs = ['nombre', 'email', 'asunto', 'mensaje'];
        inputs.forEach(id => {
            const input = document.getElementById(id);
            if(input) {
                input.addEventListener('input', function() {
                    const errorSpan = document.getElementById(`error-${id}`);
                    if(errorSpan) errorSpan.textContent = '';
                    if(feedbackDiv && !feedbackDiv.classList.contains('hidden')) {
                        feedbackDiv.classList.add('hidden');
                    }
                });
            }
        });
    }, 100); // Pequeño retraso para asegurar carga de componentes
});