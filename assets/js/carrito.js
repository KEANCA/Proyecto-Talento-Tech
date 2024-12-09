document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
        { id: 1, nombre: 'Galleta de Nutella', precio: 1000, imagen: './assets/img/Galletas/Nutella.jpg', url: './vistas_productos/galleta1.html', categoria: 'Juguetes' },
        { id: 2, nombre: 'Galleta de Mashmelo', precio: 2000, imagen: './assets/img/Galletas/Masmelo.jpg', url: './vistas_productos/galleta2.html', categoria: 'Mochilas' },
        { id: 3, nombre: 'Galleta Red Velvet', precio: 1500, imagen: './assets/img/Galletas/RedVelvet.jpg', url: './vistas_productos/RedVelvet.html', categoria: 'Juguetes' },
        { id: 4, nombre: 'Galleta de Bocadillo y Queso', precio: 1800, imagen: './assets/img/Galletas/Bocadillo y queso.jpg', url: './vistas_productos/bocadilloyqueso.html', categoria: 'Mochilas' },
        { id: 5, nombre: 'Galleta de Macadamia', precio: 2200, imagen: './assets/img/Galletas/Macadamia.jpg', url: './vistas_productos/Macadamia.html', categoria: 'Juguetes' },
        { id: 6, nombre: 'Galleta de Chocolate y Arequipe', precio: 2000, imagen: './assets/img/Galletas/Arequipe.jpg', url: './vistas_productos/Chocolateyarequipe.html', categoria: 'Mochilas' },
        { id: 7, nombre: 'HolyBox', precio: 5000, imagen: './assets/img/Galletas/HolyBox.jpg', url: './vistas_productos/Holybox.html', categoria: 'Juguetes' }
    ];

    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito-items');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const DOMcarritoValue = document.querySelector('#carrito-value');
    const filtroSelect = document.getElementById("filtro");

    let visitas = localStorage.getItem('contadorVisitas') || 0;
    visitas++;
    localStorage.setItem('contadorVisitas', visitas);
    document.getElementById('contador').textContent = visitas;

    function renderizarProductos() {
        DOMitems.innerHTML = '';
        const filtro = filtroSelect.value.toLowerCase(); 
        const productosFiltrados = baseDeDatos.filter(producto => 
            filtro === "todas" || producto.categoria.toLowerCase() === filtro 
        );
        productosFiltrados.forEach((producto) => {
            const nodo = `
                <div class="product">
                    <a href="${producto.url}">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                    </a>
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
                guardarCarritoEnLocalStorage();
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

    function guardarCarritoEnLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    DOMbotonVaciar.addEventListener('click', () => {
        carrito = [];
        guardarCarritoEnLocalStorage();
        actualizarCarrito();
    });

    filtroSelect.addEventListener('change', renderizarProductos);

    renderizarProductos();
    actualizarCarrito();
});
