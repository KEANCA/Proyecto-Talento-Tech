document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".add-to-cart");
  
    cartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Producto añadido al carrito!");
      });
    });
  });
  