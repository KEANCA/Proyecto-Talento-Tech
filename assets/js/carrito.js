document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
        { id: 1, nombre: 'Galleta de Nutella', precio: 1000, imagen: './assets/img/Galletas/Nutella.jpg'},
        { id: 2, nombre: 'Galleta de Mashmelo', precio: 2000, imagen: './assets/img/Galletas/Masmelo.jpg'},
        { id: 3, nombre: 'Galleta Red Velvet', precio: 1500, imagen: './assets/img/Galletas/RedVelvet.jpg'},
        { id: 4, nombre: 'Galleta de Bocadillo y Queso', precio: 1800, imagen: './assets/img/Galletas/Bocadillo y queso.jpg'},
        { id: 5, nombre: 'Galleta de Macadamia', precio: 2200, imagen: './assets/img/Galletas/Macadamia.jpg'},
        { id: 6, nombre: 'Galleta de Cholocolate y Arequipe', precio: 2000, imagen: './assets/img/Galletas/Arequipe.jpg'},
        { id: 7, nombre: 'HolyBox', precio: 5000, imagen: './assets/img/Galletas/HolyBox.jpg'}
    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito-items');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const DOMcarritoValue = document.querySelector('#carrito-value');
    const miLocalStorage = window.localStorage;

    function renderizarProductos() {
        DOMitems.innerHTML = '';
        baseDeDatos.forEach((producto) => {
            const nodo = `
                <div class="product">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.precio} ${divisa}</p>
                    <button class="btn-agregar" data-id="${producto.id}">Agregar al Carrito</button>
                </div>`;
            DOMitems.insertAdjacentHTML('beforeend', nodo);
        });

        document.querySelectorAll('.btn-agregar').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                carrito.push(id);
                actualizarCarrito();
            });
        });
    }

    function actualizarCarrito() {
        DOMcarrito.innerHTML = '';
        const carritoUnico = [...new Set(carrito)];
        carritoUnico.forEach((id) => {
            const producto = baseDeDatos.find((p) => p.id === id);
            const cantidad = carrito.filter((p) => p === id).length;
            const nodo = `<li>${producto.nombre} x${cantidad} - ${cantidad * producto.precio} ${divisa}</li>`;
            DOMcarrito.insertAdjacentHTML('beforeend', nodo);
        });
        DOMtotal.textContent = carrito.reduce((acc, id) => acc + baseDeDatos.find((p) => p.id === id).precio, 0);
        DOMcarritoValue.textContent = carrito.length;
    }

    DOMbotonVaciar.addEventListener('click', () => {
        carrito = [];
        actualizarCarrito();
    });

    renderizarProductos();
});
