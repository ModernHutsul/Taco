const slidePanel = document.getElementById('slide-panel');
const body = document.body;
const tacosButton = document.getElementById('tacos-button');
const tacoMenuPanel = document.getElementById('taco-menu-panel');

// Відкриваємо головну панель при завантаженні сторінки
window.addEventListener('load', function() {
    body.classList.add('menu-is-open');
});

// Відкриваємо панель з вибором тако при натисканні на "TACOS"
tacosButton.addEventListener('click', function() {
    body.classList.toggle('taco-menu-open');
});

// Закриваємо панель з вибором тако, якщо клік поза її межами
document.addEventListener('click', function(event) {
    if (!tacoMenuPanel.contains(event.target) && !tacosButton.contains(event.target)) {
        body.classList.remove('taco-menu-open');
    }
});




