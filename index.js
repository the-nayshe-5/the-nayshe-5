imgs = ['image1.jpg', 'pfp1.jpg'];
locs = ['Kolkata, India', 'Srinagar, India'];
years = ['2021','Hometown'];
desc = ['I visisted Kolkata, also known as the "City of Joy", in 2021, right when we had gotten a respite from the COVID-19 lockdowns. After staying cooped in the house for nearly a year, it was a much needed breath of fresh air.<br><u><i>Pic: Eco-Park</i></u>',
'<i>"Agar firdaus bar roo-e zameen ast, Hameen ast-o hameen ast-o hameen ast."</i>I was born and spent majority of my childhood in Kashmir, eagerly waiting for the body-numbing snow-fights during hot summers and craving the heat of the Sun during the cold winters. 🥰<br><u><i>Pic: Dal Lake</i></u>',
];


count = 1;

function prevSlide() {
    if (count == 0) {
        count = 1;
    } else {
        count--;
    }

    document.getElementById('img').src = './img/'+imgs[count];
    document.getElementById('location').innerText = locs[count];
    document.getElementById('subtitle').innerText = years[count];
    document.getElementById('description').innerHTML = desc[count];
}

function nextSlide() {
    if (count == 1) {
        count = 0;
    } else {
        count++;
    }

    document.getElementById('img').src = './img/'+imgs[count];
    document.getElementById('location').innerText = locs[count];
    document.getElementById('subtitle').innerText = years[count];
    document.getElementById('description').innerHTML = desc[count];
}
