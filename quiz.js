const perguntas = [
  {
    pergunta: "Quem fundou a Sonserina?",
    opcoes: ["Godric Gryffindor", "Rowena Ravenclaw", "Salazar Slytherin", "Helga Hufflepuff"],
    correta: 2
  },
  {
    pergunta: "Qual é o símbolo da Sonserina?",
    opcoes: ["Leão", "Serpente", "Águia", "Texugo"],
    correta: 1
  },
  {
    pergunta: "Quais são as cores da Sonserina?",
    opcoes: ["Azul e Bronze", "Verde e Prata", "Vermelho e Dourado", "Amarelo e Preto"],
    correta: 1
  },
  {
    pergunta: "Qual casa valoriza coragem acima de tudo?",
    opcoes: ["Corvinal", "Lufa-Lufa", "Grifinória", "Sonserina"],
    correta: 2
  }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit");
const resultadoDiv = document.getElementById("resultado");

function carregarQuiz() {
  perguntas.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("pergunta");

    const enunciado = document.createElement("h3");
    enunciado.textContent = q.pergunta;
    div.appendChild(enunciado);

    q.opcoes.forEach((opcao, i) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "pergunta" + index;
      input.value = i;
      label.appendChild(input);
      label.appendChild(document.createTextNode(opcao));
      div.appendChild(label);
    });

    const feedback = document.createElement("p");
    feedback.classList.add("feedback");
    div.appendChild(feedback);

    quizContainer.appendChild(div);
  });
}

function verificarResultado() {
  let pontos = 0;

  perguntas.forEach((q, index) => {
    const resposta = document.querySelector(`input[name=pergunta${index}]:checked`);
    const feedback = quizContainer.querySelectorAll(".feedback")[index];

    if (resposta) {
      if (parseInt(resposta.value) === q.correta) {
        pontos++;
        feedback.textContent = `✔ Você acertou! "${q.opcoes[q.correta]}" é a resposta correta.`;
        feedback.className = "feedback correto";
      } else {
        feedback.textContent = `❌ Você errou. A resposta correta é "${q.opcoes[q.correta]}".`;
        feedback.className = "feedback errado";
      }
    } else {
      feedback.textContent = "⚠ Você não respondeu esta pergunta.";
      feedback.className = "feedback errado";
    }
  });

  // Definir casa final
  let casa = "";
  if (pontos === perguntas.length) {
    casa = "Sonserina 🐍";
  } else if (pontos >= 3) {
    casa = "Grifinória 🦁";
  } else if (pontos === 2) {
    casa = "Corvinal 🦅";
  } else {
    casa = "Lufa-Lufa 🦡";
  }

  resultadoDiv.textContent = `Você fez ${pontos} de ${perguntas.length} pontos. Sua casa é: ${casa}`;
}

carregarQuiz();
submitBtn.addEventListener("click", verificarResultado);
