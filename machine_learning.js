cards = document.querySelectorAll('.card');
urls = ['./img/jpmc-dashboard.png', './img/air-quality.png', './img/bcg-dashboard.png', './img/house-price.png',]

for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundImage = `url(${urls[i]})`;
}
