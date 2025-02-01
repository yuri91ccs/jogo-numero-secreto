let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroQq();
let tentativas = 1;

//let aprestc = document.querySelector('h1');
//aprestc.innerHTML = 'Jogo do número secreto';

//let subttl = document.querySelector('p');
//subttl.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextos(ondoc, txt) {
    let textosaps = document.querySelector(ondoc);
    textosaps.innerHTML = txt;
    responsiveVoice.speak(txt, 'Brazilian Portuguese Famale', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextos('h1', 'Jogo do número secreto');
    exibirTextos('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function tentarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextos ('h1','Acertou!');
        let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextos ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextos('p', 'O número secreto é menor');
        } else {
            exibirTextos('p', 'O número secreto é maior');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparcampo();
    }
}

function numeroQq(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroQq();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparcampo() {
    chute = document.querySelector ('input');
    chute.value ='';
}

function reiniciarJogo() {
    numeroSecreto = numeroQq();
    limparcampo();
    tentativas = 1;
    exibirTextos('h1', 'Jogo do número secreto');
    exibirTextos('p', 'Escolha um número entre 1 e 10');
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute ('disabled', true);
}