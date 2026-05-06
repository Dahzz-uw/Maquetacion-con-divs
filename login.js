document.getElementById('formularioLogin').addEventListener('submit', function(event) {
    
    event.preventDefault();


    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;


    if (usuario === 'kiwi' && contrasena === '12345') {
        alert('Inicio de sesión exitoso. ¡Bienvenido!');
        window.location.href = "og/login1.html";
    } else {

        alert('Datos incorrectos.');
    }
});