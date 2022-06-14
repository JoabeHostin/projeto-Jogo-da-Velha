
const casas = document.getElementsByTagName('input'); //pega a lista de casas do tabuleiro do jogo
const reiniciar = document.getElementById('reiniciar'); //pega o botão de reiniciar
const jogadores = document.getElementById('jogador');
var jogador = "X";
var vencedor = "_";
var j=0

console.log(casas);

vitoria = function () {

    if (casas[0].value == casas[1].value & casas[0].value == casas[2].value) {
        alert("você ganhou")
    }
    else if (casas[0].value == casas[4].value & casas[0].value == casas[8].value) {
        alert("você ganhou")
    }
    else if (casas[0].value == casas[3].value & casas[0].value == casas[6].value) {
        alert("você ganhou")
    }
    else if (casas[1].value == casas[4].value & casas[1].value == casas[7].value) {
        alert("você ganhou")
    }
    else if (casas[3].value == casas[4].value & casas[3].value == casas[5].value) {
        alert("você ganhou")
    }
    else if (casas[2].value == casas[5].value & casas[2].value == casas[8].value) {
        alert("você ganhou")
    }
    else if (casas[2].value == casas[4].value & casas[2].value == casas[6].value) {
        alert("você ganhou")
    }
    else if (casas[6].value == casas[7].value & casas[6].value == casas[8].value) {
        alert("você ganhou")
    }

}

jogadores.innerHTML=jogador


jogadorDaVez = function () {
        if ( j % 2) {
            jogador = "X"           
            jogadores.innerHTML=jogador
        } else {
            jogador = "O";
            jogadores.innerHTML=jogador
        }
        j++
}
for (var i=0;i<9;i++){
    casas[i].addEventListener('click', event => {
        event.target.value = jogador;
        vitoria();
        jogadorDaVez();
    })
}

jogada()


