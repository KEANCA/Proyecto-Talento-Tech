document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.querySelector(".form-container");
    const goToRegister = document.getElementById("goToRegister");
    const goToLogin = document.getElementById("goToLogin");
    const loginForm = document.getElementById("loginForm");

    // Cambiar a vista de registro
    goToRegister.addEventListener("click", () => {
        formContainer.classList.add("rotated");
    });

    // Cambiar a vista de login
    goToLogin.addEventListener("click", () => {
        formContainer.classList.remove("rotated");
    });

    // Manejar el envío del formulario de inicio de sesión
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        window.location.href = "/index.html";
    });
});
