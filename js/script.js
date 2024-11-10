const body = document.body;

const tacosButton = document.getElementById('taco-icon');
const drinksButton = document.getElementById('drink-icon');
const snakesButton = document.getElementById('snake-icon');
const slidePanelTacosButton = document.getElementById('tacos-button');
const slidePanelCustomTacosButton = document.getElementById('custom-tacos-button');
const customTacosMenuPanel = document.getElementById('custom-taco-menu-panel');
const tacoMenuPanel = document.getElementById('taco-menu-panel');

slidePanelTacosButton.addEventListener('click', function(){
    customTacosMenuPanel.classList.remove('taco-menu-open');
    tacoMenuPanel.classList.add('taco-menu-open');
});

slidePanelCustomTacosButton.addEventListener('click', function(){
    tacoMenuPanel.classList.remove('taco-menu-open');
    customTacosMenuPanel.classList.add('taco-menu-open');
});


// Відкриваємо головну панель при завантаженні сторінки
window.addEventListener('load', function() {
    body.classList.add('menu-is-open-tacos');
    tacoMenuPanel.classList.add('taco-menu-open');
    tacosButton.classList.add('active');
});

tacosButton.addEventListener('click', function() {
    body.classList.add('menu-is-open-tacos');
    body.classList.remove('menu-is-open-drink');
    body.classList.remove('menu-is-open-snake');

});

drinksButton.addEventListener('click', function() {
    body.classList.remove('menu-is-open-tacos');
    body.classList.add('menu-is-open-drink');
    body.classList.remove('menu-is-open-snake');

});
snakesButton.addEventListener('click', function() {
    body.classList.add('menu-is-open-snake');
    body.classList.remove('menu-is-open-drink');
    body.classList.remove('menu-is-open-tacos');

});

// Закриваємо панель з вибором тако, якщо клік поза її межами
document.addEventListener('click', function(event) {
    if (!tacoMenuPanel.contains(event.target) && !tacosButton.contains(event.target)) {
        body.classList.remove('taco-menu-open');
    }
});

const icons = document.querySelectorAll('.icon');
const tacoItems = document.querySelectorAll('.taco-item');

tacoItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        item.classList.add('active');
    })
    item.addEventListener('mouseover', function() {
        item.classList.add('active');
    })
})

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Якщо іконка вже активна, нічого не робимо
        if (icon.classList.contains('active')) {
            return;
        }

        // Видаляємо клас active з усіх іконок
        icons.forEach(i => i.classList.remove('active'));


        // Додаємо клас active до натиснутої іконки
        icon.classList.add('active');

    });
});



