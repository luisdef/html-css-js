localStorage['jogada'] = 1;
localStorage['qtd'] = 0;
var tablado = [0,0,0,0,0,0,0,0,0];
localStorage.setItem("tablado",JSON.stringify(tablado));
var botoes = document.querySelectorAll(".box");
botoes.forEach(function(botao){
    botao.addEventListener("click",function(e){
        if(localStorage['qtd']<9 && e.target.innerHTML==""){
            if (localStorage['jogada']=="1"){
                e.target.innerHTML = "X";
                let tablado_local = JSON.parse(localStorage.getItem("tablado"));
                tablado_local[e.target.id] = "X";
                localStorage.setItem("tablado",JSON.stringify(tablado_local));
                localStorage['jogada']="2";
                localStorage['qtd']++;
                console.log(JSON.parse(localStorage.getItem("tablado")))
            }else{
                e.target.innerHTML = "O";
                localStorage['jogada']="1";
                localStorage['qtd']++;
                let tablado_local = JSON.parse(localStorage.getItem("tablado"));
                tablado_local[e.target.id] = "O";
                localStorage.setItem("tablado",JSON.stringify(tablado_local));
                console.log(JSON.parse(localStorage.getItem("tablado")))
            }
        }
    });
});
