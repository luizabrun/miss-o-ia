const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado"voce entende sobre o voleibool"
            {
        alternativas:
            {
                texto: "sim",
                afirmacao: "isso e maravilhoso "
            },
            {
                texto: "nao"
                afirmacao: "que pena"
            }
        ]
    },
    {
        enunciado: "oque e voleibool"
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
        enunciado: "aonde surgiu o voleibool",
        alternativas: [
            {
                texto: "ns estado unidos",
                afirmacao: "isso correto"
            },
            {
                texto: "espanha",
                afirmacao: "nao, que pena"
            }
        ]
    },
    {
        enunciado: "quantos jogadores precisa para jogar o voleibool",
        alternativas: [
            {
                texto: "4",
                afirmacao: "nao e isso que pena"
            },
            {
                texto: "6",
                afirmacao: "correto, precisamos de 6 jogadores"
            }
        ]
    },
    {
        enunciado: "quantos toque pode dar na bola antes de passar para o time adverario ",
        alternativas: [
            {
                texto: "4 e ai passar para o adversario ",
                afirmacao: "maximo 3 toque para ai passar"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
