cards = document.querySelectorAll('.card');
urls = ['./img/drofin.png', './img/taskops.png',]

for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundImage = `url(${urls[i]})`;
}
