localStorage['jogada'] = 1;
localStorage['qtde'] = 0;

var tablado = [0, 0, 0, 0, 0, 0, 0, 0, 0];
localStorage.setItem("tablado", JSON.stringify(tablado));

var btns = document.querySelectorAll(".box");
var fim = 0;

btns.forEach(function (btn) {
    
    btn.addEventListener('click', function (e) {

        if (localStorage['qtde'] < 9 && e.target.innerHTML == "") {

            if (fim) {
                return null;
            } else if (localStorage['jogada']=="1") {
                e.target.innerHTML = "X";
                
                localStorage['jogada']="2";
                localStorage['qtde']++;

                let tablado_local = JSON.parse(localStorage.getItem("tablado"));
                tablado_local[e.target.id] = "X";

                localStorage.setItem("tablado",JSON.stringify(tablado_local));     
                console.log(JSON.parse(localStorage.getItem("tablado")));
            } else {
                e.target.innerHTML = "O";
                
                localStorage['jogada']="1";
                localStorage['qtde']++;
                
                let tablado_local = JSON.parse(localStorage.getItem("tablado"));
                tablado_local[e.target.id] = "O";
                
                localStorage.setItem("tablado",JSON.stringify(tablado_local));
                console.log(JSON.parse(localStorage.getItem("tablado")));
            }

            
            let tab_ver = JSON.parse(localStorage.getItem("tablado"));


            // O --------------------------------------------------------
            if (
                (tab_ver[0] == "O"  && tab_ver[1] == "O" && tab_ver[2] == "O") ||
                (tab_ver[3] == "O"  && tab_ver[4] == "O" && tab_ver[5] == "O") ||
                (tab_ver[6] == "O"  && tab_ver[7] == "O" && tab_ver[8] == "O") ||
                (tab_ver[0] == "O"  && tab_ver[3] == "O" && tab_ver[6] == "O") ||
                (tab_ver[1] == "O"  && tab_ver[4] == "O" && tab_ver[7] == "O") ||
                (tab_ver[2] == "O"  && tab_ver[5] == "O" && tab_ver[8] == "O") ||
                (tab_ver[0] == "O"  && tab_ver[4] == "O" && tab_ver[8] == "O") ||
                (tab_ver[2] == "O"  && tab_ver[4] == "O" && tab_ver[6] == "O")
            ) {
                
                document.querySelector('.ganhador').style.display = "block";
                document.querySelector('.ganhador').innerHTML += "Bolinha ganhou!!!";
                fim = 1;

            }

            // X --------------------------------------------------------
            if (
                (tab_ver[0] == "X"  && tab_ver[1] == "X" && tab_ver[2] == "X") ||
                (tab_ver[3] == "X"  && tab_ver[4] == "X" && tab_ver[5] == "X") ||
                (tab_ver[6] == "X"  && tab_ver[7] == "X" && tab_ver[8] == "X") ||
                (tab_ver[0] == "X"  && tab_ver[3] == "X" && tab_ver[6] == "X") ||
                (tab_ver[1] == "X"  && tab_ver[4] == "X" && tab_ver[7] == "X") ||
                (tab_ver[2] == "X"  && tab_ver[5] == "X" && tab_ver[8] == "X") ||
                (tab_ver[0] == "X"  && tab_ver[4] == "X" && tab_ver[8] == "X") ||
                (tab_ver[2] == "X"  && tab_ver[4] == "X" && tab_ver[6] == "X")
            ) {
                document.querySelector('.ganhador').style.display = "block";
                document.querySelector('.ganhador').style.transform = "transform: translate(0, -3rem)";
                document.querySelector('.ganhador').innerHTML += "Xis ganhou!!!";
                fim = 1;

            }

            if (localStorage['qtde'] == 9 && !fim) {
                document.querySelector('.ganhador').style.display = "block";
                document.querySelector('.ganhador').style.transform = "transform: translate(0, -3rem)";
                document.querySelector('.ganhador').innerHTML += "Empate";
                fim = 1;
            }
        }

    });

});

function reload() {
    window.location.reload();
}
