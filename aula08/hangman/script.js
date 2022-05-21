localStorage['right'] = 0;
localStorage['wrong'] = 0;

const word = "carro";
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
                ltr.style.color = "#222";
                ltr.style.backgroundColor = "#62f5a4";
                wordSpaces[i].innerHTML = clickedLetter;
                console.log(localStorage['right'])
                localStorage['right'] = Number(localStorage['right']) + 1;
            }
        }

        let right = localStorage['right'];
        document.querySelector('#right').innerHTML = "";
        document.querySelector('#right').innerHTML = right;
    });
});