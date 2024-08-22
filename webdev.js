cards = document.querySelectorAll('.card');
urls = ['./img/drofin.png', './img/taskops.png', './img/marvelquiz.png', './img/oldportfolio.png']

for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundImage = `url(${urls[i]})`;
}
