

document.getElementById('connectForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma convencional

    // Obtener los valores de los campos del formulario
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aquí podrías enviar los datos al servidor para autenticar al usuario
    // Por ejemplo, utilizando una solicitud AJAX o fetch

    // Luego de autenticar al usuario, podrías redirigirlo a otra página o realizar otras acciones
    // Por ejemplo:
    // window.location.href = 'pagina-de-inicio.html';
});



