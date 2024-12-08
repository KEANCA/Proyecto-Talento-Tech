document.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.getItem('sessionActive')) {
        let visitas = localStorage.getItem('contadorVisitas') || 0;
        visitas = parseInt(visitas); // Convertir a número
        visitas++;
        sessionStorage.setItem('sessionActive', true);
        localStorage.setItem('contadorVisitas', visitas);
    }
    // Mostrar el contador en la página
    const visitCountDisplay = localStorage.getItem('contadorVisitas') || 0;
    document.getElementById('contador').textContent = visitCountDisplay;
});
