// const questions = [
//   {
//     title: "Prawo Gminne",
//     question: "Kogo nie dotyczy prawo Gminne?",
//     answers: [
//       { text: "a. Soltysa", correct: false },
//       { text: "b. Architekta", correct: false },
//       { text: "c. Obywatela", correct: false },
//       { text: "d. Zadne z powyzszych", correct: true },
//     ],
//   },
//   {
//     title: "Prawo Gminne",
//     question: "Kto ustala prawo Gminne?",
//     answers: [
//       { text: "a. Administracja", correct: false },
//       { text: "b. Rada Gminna", correct: true },
//       { text: "c. Obywatele", correct: false },
//       { text: "d. Soltys", correct: false },
//     ],
//   },
//   {
//     title: "Roleplay",
//     question: "Jak wybiera sie Soltysa?",
//     answers: [
//       { text: "a. Rada wybiera", correct: false },
//       { text: "b. Wybory obywatelskie", correct: true },
//       { text: "c. Administracja wybiera", correct: false },
//       { text: "d. Zadne z powyzszych", correct: false },
//     ],
//   },
//   {
//     title: "Roleplay",
//     question: "Ilu farmerow musi byc w Gminie?",
//     answers: [
//       { text: "a. 1 na 5 Graczy", correct: false },
//       { text: "b. Dowolna ilosc", correct: true },
//       { text: "c. 1 na 3 graczy", correct: false },
//       { text: "d. 1 na 2 graczy", correct: false },
//     ],
//   },
//   {
//     title: "Logika gry",
//     question: "Czy mozna prosic admina o TP?",
//     answers: [
//       { text: "a. W wyjatkowej sytuacji", correct: false },
//       { text: "b. Nie", correct: true },
//       { text: "c. Podczas Eventu", correct: false },
//       { text: "d. Mozna, z winy servera", correct: false },
//     ],
//   },
//   // new question/answer format
//   {
//     title: "Logika gry",
//     question: "Dlaczego nalezy osiedlac sie blisko Gminy??",
//     answers_1 :"a. Zeby dostarczac zasoby",
//     answers_2: "b. Zeby pomoc",
//       answers_3: "c. Zeby korzystac z Gminy",
//        answers_4: "d. Dla spoleczensta",
//   }
// ];

const questions = [
  {
    title: "Logika gry",
    question: "Dlaczego nalezy osiedlac sie blisko Gminy??",
    a: "Zeby dostarczac zasoby",
    b: "Zeby pomoc",
    c: "Zeby korzystac z Gminy",
    d: "Dla spoleczensta",
    correct: "c",
  },
  {
    title: "Logika gry",
    question: "Jakim rodzajem servera jest GminaRP?",
    a: "Survival Roleplay",
    b: "Vanilla Survival",
    c: "SpigotMC",
    d: "Modowanym",
    correct: "a",
  },
  {
    title: "Prawo Gminne",
    question: "Kto ustala prawo gminne?",
    a: "Soltys",
    b: "Admin",
    c: "Rada Gminna",
    d: "Obywatele",
    correct: "c",
  },
  {
    title: "Prawo Gminne",
    question: "Ilu farmerow musi byc na serverze?",
    a: "min 1",
    b: "min 2",
    c: "kazdy",
    d: "1 na 3 graczy",
    correct: "a",
  },
  {
    title: "Roleplay",
    question: "Dlaczego kazdy gracz musi wybrac role?",
    a: "Dla zabawy",
    b: "Dla klimatu",
    c: "Dla zasady",
    d: "Zadne",
    correct: "b",
  },
];

// gets elements by const
const quizBox = document.getElementById("quizBox");
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("quizSubmit");
const quizQuestion = document.getElementById("quizQuestion");
const quizTitle = document.getElementById("quizTitle");
const quizAnswerA = document.getElementById("a_text");
const quizAnswerB = document.getElementById("b_text");
const quizAnswerC = document.getElementById("c_text");
const quizAnswerD = document.getElementById("d_text");
const beginButton = document.getElementById("quizBegin");
const nextButton = document.getElementById("quizNext");
const answers = document.getElementsByName("answer");

// // // modifies the quiz elements

function showQuestion(question) {
  const currentQuizData = questions[currentQuestion];

  quizTitle.innerText = currentQuizData.title;
  quizQuestion.innerText = currentQuizData.question;
  quizAnswerA.innerHTML = currentQuizData.a;
  quizAnswerB.innerText = currentQuizData.b;
  quizAnswerC.innerText = currentQuizData.c;
  quizAnswerD.innerText = currentQuizData.d;

  currentQuestion++;
}

// // quiz functions

let shuffledQuestions, currentQuestionIndex;
let currentQuestion = 0;
let answer = undefined;
// // begin quiz with button

function begin() {
  quizBox.style.display = "flex";
  beginButton.style.display = "none";
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  showQuestion();
  console.log("Quiz started. No cheating!");
}

// reads selected answer and increases score

function getSelected() {
  console.log(currentQuestion);
}

// next question

function nextQuestion() {
  showQuestion();
  getSelected();

  // shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  // currentQuestionIndex = 0;
  // showQuestion();
  console.log("Next question...");
}

//select questions

// buttons

nextButton.addEventListener("click", nextQuestion);

beginButton.addEventListener("click", begin);

// on submit, show results

submitButton.addEventListener("click", showResults);

// show results of quiz

function showResults() {
  quizBox.style.display = "none";
  document.getElementById("quizHead").innerHTML = "Wynik testu";
}
