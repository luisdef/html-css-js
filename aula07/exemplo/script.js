
// var a = 1; // var -> tem um âmbito global;
// let b = 2; // let -> variável de escopo (dentro do escopo de um bloco);
// const c = 3; // const -> variável de leitura (constante);

// var a = 1;
// var b = 3;

// if (a > b) {
//     window.alert(`A > B.`);
//     console.log(`A > B.`);
// } else {
//     window.alert(`B > A.`);
//     console.log(`B > A.`);
// }

const btn = document.getElementById('button');

btn.addEventListener('click', function(evt) {
    evt.preventDefault();

    console.log('button triggered');

    const vA = parseInt(document.querySelector('#a').value);
    const vB = parseInt(document.querySelector('#b').value);
    const vC = parseInt(document.querySelector('#c').value);

    let resultado = vA + vB + vC;

    document.querySelector(".res").innerHTML = resultado;

    if (resultado % 2 == 0) {
        document.querySelector(".res").style.color = 'blue';
    } else {
        document.querySelector(".res").style.color = 'red';
    }

});








