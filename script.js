const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado"voce entende sobre o voleibool, como ele funviona, oque é"
            {
        alternativas:
            {
                texto: "sim",
                afirmacao: "isso e maravilhoso"
            },
            {
                texto: "nao"
                afirmacao: "que pena,vamo procurar saber mais sobre"
            }
        ]
    },
    {
        enunciado: "oque e voleibool, ele é um esporte, ou apenas um jogo,"
        alternativas: [
            {
                texto: "e um esporte",
                afirmacao: "boa"
            },
            {
                texto: "e um esporte e dentro do esporte tem o jogo",
                afirmacao: "extamente, incrivel"
            }
        ]
    },
    {
        enunciado: "aonde surgiu o voleibool, ele é um esporte brasileiro ou não",
        alternativas: [
            {
                texto: "ns estado unidos",
                afirmacao: "isso correto"
            },
            {
                texto: "espanha",
                afirmacao: "nao, ele é um esporte criado no estados unidos"
            }
        ]
    },
    {
        enunciado: "quantos jogadores precisa em cada time para jogar um jogo da forma completa para jogar o voleibool",
        alternativas: [
            {
                texto: "para jogar o voleibool precisa de 4 jogadores em cada time",
                afirmacao: "nao e isso que pena"
            },
            {
                texto: "para jogar o voleibool precisa de 6 jogadores em cada time",
                afirmacao: "correto, precisamos de 6 jogadores"
            }
        ]
    },
    {
        enunciado: "quantos toque pode dar na bola antes de passar para o time adverario ",
        alternativas: [
            {
                texto: "4 e ai passar para o adversario ",
                afirmacao: "nao, mas é quase isso"
            },
            {
                texto: "pode ser dado 3 toque e ai passa a bola para o time adversario ",
                afirmacao: "correto, pode dar até 3 toque na bola "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();


