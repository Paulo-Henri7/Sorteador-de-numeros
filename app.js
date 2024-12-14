let lista = [];

function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateNumero = parseInt(document.getElementById("ate").value);

    if (doNumero > ateNumero) {
        alert("ERRO, o número inicial é maior que o número final.");
        msg();
        ligarDesligarBotao();
        reiniciar();
    } else {

        console.log(quantidadeDeNumeros, doNumero, ateNumero);

        console.log(sortearNums(quantidadeDeNumeros, ateNumero, doNumero));
        msg();
        ligarDesligarBotao();
    }
}

function sortearNums(quantidadeDeNumeros, ateNumero, doNumero) {

    if (quantidadeDeNumeros > (ateNumero - doNumero + 1)) {
        alert(`O campo quantidade de números deve ser menor ou igual ao intervalo informado entre ${doNumero} até ${ateNumero}`);
    } else {
        while (quantidadeDeNumeros > 0) {
            let numerosEscolhidos = Math.floor(Math.random() * (ateNumero - doNumero + 1)) + doNumero;
            while (lista.includes(numerosEscolhidos)) {
                numerosEscolhidos = Math.floor(Math.random() * (ateNumero - doNumero + 1)) + doNumero;
            }
            lista.push(numerosEscolhidos);
            quantidadeDeNumeros--;
        }
        return lista;
    }
}

function msg() {
    let mensagem = document.getElementById("resultado");
    mensagem.innerHTML = `Os números sorteados foram: ${lista}`;
}

function ligarDesligarBotao() {
    let habilitarBotaoReiniciar = document.getElementById("btn-reiniciar");

    if (habilitarBotaoReiniciar.classList.contains("container__botao-desabilitado")) {
        console.log("O botão estava desabilitado, mas agora ativei!");
        habilitarBotaoReiniciar.classList.remove("container__botao-desabilitado");
        habilitarBotaoReiniciar.classList.add("container__botao");
    } else {
        console.log("Bota desativado, mas agora ativado!");
        habilitarBotaoReiniciar.classList.remove("container__botao");
        habilitarBotaoReiniciar.classList.add("container__botao-desabilitado");
    }
}


function limparCampo() {
    (document.getElementById("quantidade").value) = "";
    (document.getElementById("de").value) = "";
    (document.getElementById("ate").value) = "";
    document.getElementById("resultado").innerHTML = "Números sorteados:  nenhum até agora";
}

function reiniciar() {
    ligarDesligarBotao();
    lista = [];
    limparCampo();
}