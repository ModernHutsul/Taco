const body = document.body;
const icons = document.querySelectorAll('.icon');
const slidePanelButtons = document.querySelectorAll('.slide-panel-button');
const tacoItems = document.querySelectorAll('.menu-item');
const menuPanels = document.querySelectorAll('.menu-panel');
const tacosButton = document.getElementById('taco-icon');
const drinksButton = document.getElementById('drink-icon');
const snakesButton = document.getElementById('snake-icon');
const basketButton = document.getElementById('basket-icon');
const slidePanelTacosButton = document.getElementById('tacos-button');
const slidePanelCustomTacosButton = document.getElementById('custom-tacos-button');
const slidePanelSoftDrinksButton = document.getElementById('soft-drinks-button');
const slidePanelMexicanDrinksButton = document.getElementById('mexican-drinks-button')
const customTacosMenuPanel = document.getElementById('custom-taco-menu-panel');
const tacoMenuPanel = document.getElementById('taco-menu-panel');
const softDrinksMenuPanel = document.getElementById('soft-drinks-menu-panel');
const mexicanDrinksMenuPanel = document.getElementById('mexican-drinks-menu-panel');
const basket = document.getElementById('basket');

slidePanelTacosButton.addEventListener('click', function(){
    menuPanels.forEach(i => i.classList.remove('menu-open'));
    tacoMenuPanel.classList.add('menu-open');
    body.classList.remove('basket-is-open');
});

// slidePanelCustomTacosButton.addEventListener('click', function(){
//     menuPanels.forEach(i => i.classList.remove('menu-open'));
//     customTacosMenuPanel.classList.add('menu-open');
//     body.classList.remove('basket-is-open');
// });
slidePanelSoftDrinksButton.addEventListener('click', function(){
    menuPanels.forEach(i => i.classList.remove('menu-open'));
    softDrinksMenuPanel.classList.add('menu-open');

})
slidePanelMexicanDrinksButton.addEventListener('click', function(){
    menuPanels.forEach(i => i.classList.remove('menu-open'));
    mexicanDrinksMenuPanel.classList.add('menu-open');


})


// Відкриваємо головну панель при завантаженні сторінки
window.addEventListener('load', function() {
    console.log('Завантаження сторінки');
    body.classList.remove('basket-is-open'); // Закриваємо кошик
    console.log('Клас basket-is-open видалений:', body.classList.contains('basket-is-open'));
    body.classList.add('menu-is-open-tacos');
    tacoMenuPanel.classList.add('menu-open');
    tacosButton.classList.add('active');
    slidePanelTacosButton.classList.add('active');
    if (window.innerWidth < 400) {
            body.classList.remove('basket-is-open'); // Закриваємо кошик
            console.log('Клас basket-is-open видалений:', body.classList.contains('basket-is-open'));
            // body.classList.add('menu-is-open-tacos');
            // tacoMenuPanel.classList.add('menu-open');
            tacosButton.classList.add('active');
            slidePanelTacosButton.classList.add('active');
    }
});

tacosButton.addEventListener('click', function() {
    body.classList.add('menu-is-open-tacos');
    body.classList.remove('menu-is-open-drink');
    body.classList.remove('menu-is-open-snake');
    body.classList.remove('basket-is-open');
    slidePanelButtons.forEach(i => i.classList.remove('active'));
    slidePanelTacosButton.classList.add('active');
    menuPanels.forEach(i => i.classList.remove('menu-open'));
    tacoMenuPanel.classList.add('menu-open');
});

drinksButton.addEventListener('click', function() {
    body.classList.remove('menu-is-open-tacos');
    body.classList.add('menu-is-open-drink');
    body.classList.remove('menu-is-open-snake');
    body.classList.remove('basket-is-open');
    menuPanels.forEach(i => i.classList.remove('menu-open'));
    softDrinksMenuPanel.classList.add('menu-open');
    slidePanelSoftDrinksButton.classList.add('active');
});
snakesButton.addEventListener('click', function() {
    body.classList.add('menu-is-open-snake');
    body.classList.remove('menu-is-open-drink');
    body.classList.remove('menu-is-open-tacos');
    body.classList.remove('basket-is-open');

});

basketButton.addEventListener('click', function() {
    body.classList.remove('menu-is-open-tacos');
    body.classList.remove('menu-is-open-drink');
    body.classList.remove('menu-is-open-snake');
    menuPanels.forEach(i => i.classList.remove('menu-open'));
    body.classList.add('basket-is-open');
})

// Закриваємо панель з вибором тако, якщо клік поза її межами
document.addEventListener('click', function(event) {
    if (!tacoMenuPanel.contains(event.target) && !tacosButton.contains(event.target)) {
        body.classList.remove('taco-menu-open');
    }
});


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

slidePanelButtons.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        // Якщо іконка вже активна, нічого не робимо
        if (menuItem.classList.contains('active')) {
            return;
        }
        slidePanelButtons.forEach(i => i.classList.remove('active'));
        menuItem.classList.add('active');

    });
});

const payOnline = document.querySelector('.pay-online');

document.addEventListener('DOMContentLoaded', () => {
    const mainOptions = document.querySelectorAll('input[name="payment-method"]');
    const subOptions = document.querySelector('.sub-options');

    mainOptions.forEach(option => {
        option.addEventListener('change', () => {
            if (option.value === 'pay-now') {
                subOptions.style.display = 'block';
                payOnline.classList.add('active');
            } else {
                subOptions.style.display = 'none';
            }
        });
    });
});








