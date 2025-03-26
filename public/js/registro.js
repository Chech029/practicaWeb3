document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página

    const formData = {
        identificacion: document.getElementById('id').value.trim(),
        nombre: document.getElementById('name').value.trim(),
        telefono: document.getElementById('phone').value.trim(),
        correo: document.getElementById('email').value.trim(),
        contraseña: document.getElementById('password').value.trim(),
    };

    // Verifica que las contraseñas coincidan
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    if (formData.contraseña !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            window.location.href = 'index.html'; // Redirige al login
        } else {
            alert(result.message || 'Error al registrar.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al conectar con el servidor.');
    }
});