let listaDosNumerosSorteados = [];
let qtdDeNumeros = 0;
let comeco = 0;
let numeroFinal = 0;
let numerosSorteados = 0;
let msgNumerosSorteados;
let numerosDaFuncao = [];

function sortear() {
    listaDosNumerosSorteados = [];
    numerosDaFuncao = [];
    qtdDeNumeros = parseInt(document.getElementById("quantidade").value);
    comeco = parseInt(document.getElementById("de").value);
    numeroFinal = parseInt(document.getElementById("ate").value);

    if (qtdDeNumeros > 0 && numeroFinal > comeco && numeroFinal > qtdDeNumeros) {
        listaDosNumerosSorteados = sorteador(comeco, qtdDeNumeros, numeroFinal);
        console.log(`numeros sorteados: ${listaDosNumerosSorteados}`);
    } else {
        console.log("Não é possivel fazer o sorteio");
    }

    msgNumerosSorteados = document.getElementById("resultado");
    msgNumerosSorteados.innerHTML = `Números sorteados: ${listaDosNumerosSorteados}`;
    alterarBotoesStatus();
}

function sorteador(comeco, qtdDeNumeros, numeroFinal) {
    numerosDaFuncao = [];
    let resultado = 0;
    while (qtdDeNumeros > 0) {
        min = Math.ceil(comeco);
        max = Math.floor(numeroFinal);
        resultado = Math.floor(Math.random() * (max - min + 1) + min);
        if (numerosDaFuncao.includes(resultado)) {
            console.log("Refazendo o sorteio");
            resultado = Math.floor(Math.random() * (max - min + 1) + min);
        } else {
            numerosDaFuncao.push(resultado);
            qtdDeNumeros--;
        }
    }
    return numerosDaFuncao;
}

function reiniciar() {
    listaDosNumerosSorteados = []
    qtdDeNumeros = 0;
    comeco = 0;
    numeroFinal = 0
    document.getElementById("resultado").innerHTML = `Números sorteados:  nenhum até agora`;
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    alterarBotoesStatus();
}

function alterarBotoesStatus() {
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    if (botaoReiniciar.classList.contains("container__botao-desabilitado")) {
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
    } else {
        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");
    }
}

//<button onclick="sortear()" id="btn-sortear" class="container__botao">Sortear</button>
//<button onclick="reiniciar()" id="btn-reiniciar" class="container__botao-desabilitado" >Reiniciar</button>