const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você tem dificuldade para aprender um assunto novo, o que costuma fazer?",
        alternativas: [
            {
                texto: "Procuro vídeos e explicações na internet.",
                afirmacao: [
                    "Você é uma pessoa curiosa e gosta de aprender de diferentes maneiras.",
                    "Tem facilidade para utilizar a internet como ferramenta de conhecimento."
                ]
            },
            {
                texto: "Peço ajuda para um professor ou colega.",
                afirmacao: [
                    "Você valoriza a colaboração e gosta de aprender com outras pessoas.",
                    "Entende que pedir ajuda também faz parte do processo de aprendizagem."
                ]
            }
        ]
    },

    {
        enunciado: "Você encontra uma notícia muito interessante nas redes sociais. O que faria?",
        alternativas: [
            {
                texto: "Verificaria se a notícia é verdadeira antes de compartilhar.",
                afirmacao: [
                    "Você demonstra responsabilidade ao consumir informações na internet.",
                    "Tem o hábito de analisar as informações antes de acreditar nelas."
                ]
            },
            {
                texto: "Compartilharia imediatamente com seus amigos.",
                afirmacao: [
                    "Você gosta de compartilhar novidades e informações com as pessoas.",
                    "Demonstra entusiasmo ao encontrar conteúdos que considera interessantes."
                ]
            }
        ]
    },

    {
        enunciado: "Se você pudesse criar uma tecnologia para ajudar as pessoas, qual escolheria?",
        alternativas: [
            {
                texto: "Um aplicativo para ajudar nos estudos.",
                afirmacao: [
                    "Você acredita que a tecnologia pode melhorar a educação.",
                    "Gosta de imaginar soluções que facilitem o aprendizado."
                ]
            },
            {
                texto: "Um robô para ajudar nas tarefas do dia a dia.",
                afirmacao: [
                    "Você se interessa por invenções que tornam a rotina mais prática.",
                    "Tem criatividade para imaginar novas formas de utilizar a tecnologia."
                ]
            }
        ]
    },

    {
        enunciado: "Durante um dia sem internet, como você aproveitaria seu tempo?",
        alternativas: [
            {
                texto: "Leria um livro ou faria alguma atividade fora das telas.",
                afirmacao: [
                    "Você sabe que existem muitas maneiras de se divertir sem utilizar a tecnologia.",
                    "Valoriza momentos de descanso e atividades longe das telas."
                ]
            },
            {
                texto: "Procuraria outras formas de utilizar a tecnologia offline.",
                afirmacao: [
                    "Você gosta de aproveitar os recursos tecnológicos mesmo sem internet.",
                    "É criativo ao encontrar diferentes maneiras de utilizar seus dispositivos."
                ]
            }
        ]
    },

    {
        enunciado: "Quando pensa no futuro da tecnologia, qual é a sua maior expectativa?",
        alternativas: [
            {
                texto: "Que novas invenções ajudem a resolver problemas.",
                afirmacao: [
                    "Você tem uma visão otimista sobre o desenvolvimento tecnológico.",
                    "Acredita que a inovação pode contribuir para melhorar a vida das pessoas."
                ]
            },
            {
                texto: "Que as pessoas aprendam a usar a tecnologia de forma consciente.",
                afirmacao: [
                    "Você acredita que conhecimento e responsabilidade devem acompanhar a evolução tecnológica.",
                    "Valoriza atitudes conscientes no uso das novas tecnologias."
                ]
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let afirmacoes = [];

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => {
            afirmacoes.push(...alternativa.afirmacao);
            atual++;
            mostraPergunta();
        });

        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = afirmacoes.join(" ");
    caixaResultado.classList.remove("oculto");
}

mostraPergunta();
