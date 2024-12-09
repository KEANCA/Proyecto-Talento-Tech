document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.querySelector(".form-container");
    const goToRegister = document.getElementById("goToRegister");
    const goToLogin = document.getElementById("goToLogin");

    // Cambiar a vista de registro
    goToRegister.addEventListener("click", () => {
        formContainer.classList.add("rotated");
    });

    // Cambiar a vista de login
    goToLogin.addEventListener("click", () => {
        formContainer.classList.remove("rotated");
    });
});