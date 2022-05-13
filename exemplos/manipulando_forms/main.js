document.addEventListener("DOMContentLoaded", function(event) {
   
    // Iniciou-se o código armazenando o botão em uma variável.
    const botao = document.querySelector('button');
    
    // Ao clicar no botão...
    botao.addEventListener('click', function(evt) {
        
        // Como o botão dispara o envio dos dados form, queremos impedir que ele envie o formulário. 
        // Vamos evitar o comportamento default dele.
        evt.preventDefault();
        
        // Armazenamos em uma variável os valores digitados pelos usuários. Os valores sempre vem do form como string.
        // Por isso, precisamos convertê-los em int.
        const v1 = parseInt(document.querySelector('#valor1').value);
        const v2 = parseInt(document.querySelector('#valor2').value);
        
        // A variável resultado recebe a soma dos dois valores
        let resultado = v1 + v2;
        
        // Inserimos na div com class resultado o valor da variável calculada.
        document.querySelector(".resultado").innerHTML = resultado;
    });
});