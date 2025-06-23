document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('modoToggle');
    const body = document.body;
    const html = document.documentElement;

    // Cargar preferencia guardada
    if (localStorage.getItem('modo') === 'oscuro') {
        body.classList.add('dark-mode');
        html.classList.add('dark-mode');
        toggleBtn.textContent = '☀️ Modo claro';
    }

    toggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        html.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            toggleBtn.textContent = '☀️ Modo claro';
            localStorage.setItem('modo', 'oscuro');
        } else {
            toggleBtn.textContent = '🌙 Modo oscuro';
            localStorage.setItem('modo', 'claro');
        }
    });
});