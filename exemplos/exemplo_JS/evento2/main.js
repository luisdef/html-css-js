document.addEventListener("DOMContentLoaded", function(event) {
    var divide = document.querySelector('.divide');
    divide.addEventListener('click', function(e) {
        
        /* e é o elemento que foi clicado. Como ele é um botão dentro de um form, o preventDefault() 
           impede que o form seja enviado.
        */
        
           e.preventDefault();
        valor = document.querySelector('.valor');
        qtd = document.querySelector('.qtd');
        
        // parseFloat converte o valor recebido para float. E .value refere-se ao valor dentro destes elementos
        resultado = parseFloat(valor.value) / parseFloat(qtd.value);
        
        // InnerHTML faz com que seja inserido conteúdo dentro de html  
        document.querySelector('.resultado').innerHTML = "Valor dividido: R$"+(resultado.toFixed(2));
    });
});

