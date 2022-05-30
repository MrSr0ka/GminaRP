// gets elements by const

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("quiz");
const submitButton = document.getElementById("quizSubmit");

// quiz functions

function buildQuiz() {}

function showResults() {}

// display quiz right away

buildQuiz();

// on submit, show results

submitButton.addEventListener("click", showResults);

// quiz questions

const myQuestions = [
  {
    question: "Kogo nie dotyczy Prawo Gminne?",
    answers: {
      a: "Admina",
      b: "Soltysa",
      c: "Obywatela",
      d: "Architekta",
      e: "Zadne z powyzszych",
    },
    correctAnswer: "a",
  },
  {
    question: "Kto zostaje Soltysem w nowym sezonie?",
    answers: {
      a: "Wybraniec",
      b: "MVP",
      c: "Wolontariusz",
    },
    correctAnswer: "a",
  },
  {
    question: "Jakim typem servera jest GminaRP?",
    answers: {
      a: "Paper",
      b: "Creavtie RP",
      c: "Modded",
      d: "Vanilla Survival",
    },
    correctAnswer: "d",
  },
  {
    question: "W jaki sposob zglaszamy propozycje do Gminy?",
    answers: {
      a: "Przez strone",
      b: "In-game chat",
      c: "Discord",
      d: "Email administratora",
    },
    correctAnswer: "c",
  },
  {
    question: "Kto byl glownym sponsorem Sezonu 7?",
    answers: {
      a: "Edmund Krzak",
      b: "Andrzej Lubon",
      c: "soltys @matebo",
      d: "Admin",
    },
    correctAnswer: "b",
  },
  {
    question: "Czy GminaRP korzysta z Command Block?",
    answers: {
      a: "Nie",
      b: "Podczas Eventow",
      c: "Kazdy moze korzystac z CB",
      d: "Na codzien",
    },
    correctAnswer: "a",
  },
];
