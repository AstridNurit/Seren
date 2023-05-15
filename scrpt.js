//hacer un listado de mails que se suscriben, eso solo se guarda para mi y no lo ve el usuario
//que se inicie la sesion, aparezca su nombre en el menu y se interactue con el carrito
//que se calcule la cantidad de compras, los descuentos que se puedan ofrecer.


/* Validacion de inicio de sesion */
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
  
    // Obtener los valores de correo electrónico y contraseña ingresados
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Validar los campos de inicio de sesión
    if (email === "usuario@example.com" && password === "contraseña123") {
      alert("Inicio de sesión exitoso");
      // Aquí puedes redirigir al usuario a la página principal, mostrar contenido, etc.
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  });






  
  
  
  
  
  