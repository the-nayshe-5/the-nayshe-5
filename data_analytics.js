cards = document.querySelectorAll('.card');
urls = ['./img/quantium-dashboard.png', './img/capstone-dashboard.png', './img/recession-dashboard.png',
    './img/sales-dashboard.png', './img/layoffs-dashboard.png', ]

for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundImage = `url(${urls[i]})`;
}