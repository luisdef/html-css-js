const words = [
    "carro",
    "cachorro",
    "careca"
];

const random = Math.floor(Math.random() * words.length);
const word = words[random];

var letters = [];

for (let i = 0; i < word.length; i++) {
    letters[i] = word[i];
}

const space = document.querySelector('.word');

for (let i = 0; i < letters.length; i++) {
    let item = document.createElement('span');
    space.appendChild(item);
}

var alphabet = document.querySelectorAll('.letter');
var wordSpaces = document.querySelectorAll('.word span');

alphabet.forEach(function (ltr) {
    ltr.addEventListener('click', function (e) {
        var clickedLetter = ltr.innerHTML;

        for (let i = 0; i < letters.length; i++) {
            if (clickedLetter == letters[i]) {
                wordSpaces[i].innerHTML = clickedLetter;
            }
        }
    });
});