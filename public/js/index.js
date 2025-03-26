document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const identificacion = document.getElementById('id').value.trim();
    const contraseña = document.getElementById('password').value.trim();

    if (!identificacion || !contraseña) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ identificacion, contraseña }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            window.location.href = 'biblioteca.html'; // Redirige a la página principal
        } else {
            alert(result.message || 'Error al iniciar sesión.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al conectar con el servidor.');
    }
});