const questions = [
  {
    title: "Prawo Gminne",
    question: "Kogo nie dotyczy prawo Gminne?",
    answers: [
      { text: "a. Soltysa", correct: false },
      { text: "b. Architekta", correct: false },
      { text: "c. Obywatela", correct: false },
      { text: "d. Zadne z powyzszych", correct: true },
    ],
  },
  {
    title: "Prawo Gminne",
    question: "Kto ustala prawo Gminne?",
    answers: [
      { text: "a. Administracja", correct: false },
      { text: "b. Rada Gminna", correct: true },
      { text: "c. Obywatele", correct: false },
      { text: "d. Soltys", correct: false },
    ],
  },
  {
    title: "Roleplay",
    question: "Jak wybiera sie Soltysa?",
    answers: [
      { text: "a. Rada wybiera", correct: false },
      { text: "b. Wybory obywatelskie", correct: true },
      { text: "c. Administracja wybiera", correct: false },
      { text: "d. Zadne z powyzszych", correct: false },
    ],
  },
  {
    title: "Roleplay",
    question: "Ilu farmerow musi byc w Gminie?",
    answers: [
      { text: "a. 1 na 5 Graczy", correct: false },
      { text: "b. Dowolna ilosc", correct: true },
      { text: "c. 1 na 3 graczy", correct: false },
      { text: "d. 1 na 2 graczy", correct: false },
    ],
  },
  {
    title: "Logika gry",
    question: "Czy mozna prosic admina o TP?",
    answers: [
      { text: "a. W wyjatkowej sytuacji", correct: false },
      { text: "b. Nie", correct: true },
      { text: "c. Podczas Eventu", correct: false },
      { text: "d. Mozna, z winy servera", correct: false },
    ],
  },
  {
    title: "Logika gry",
    question: "Dlaczego nalezy osiedlac sie blisko Gminy??",
    answers: [
      { text: "a. Zeby dostarczac zasoby", correct: false },
      { text: "b. Zeby pomoc", correct: true },
      { text: "c. Zeby korzystac z Gminy", correct: false },
      { text: "d. Dla spoleczensta", correct: false },
    ],
  },
];

// gets elements by const
const quizBox = document.getElementById("quizBox");
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("quizSubmit");
const quizQuestion = document.getElementById("quizQuestion");
const quizTitle = document.getElementById("quizTitle");
const quizAnswer = document.getElementById("answerButton");
const quizAnswer2 = document.getElementById("answerButton2");
const quizAnswer3 = document.getElementById("answerButton3");
const quizAnswer4 = document.getElementById("answerButton4");
const beginButton = document.getElementById("quizBegin");
const nextButton = document.getElementById("quizNext");

// // modifies the quiz elements

function showQuestion(question) {
  quizTitle.innerHTML = questions[1].title;
  quizQuestion.innerHTML = questions[1].question;
  quizAnswer.innerHTML = questions[1].answers[0].text;
  quizAnswer2.innerHTML = questions[1].answers[1].text;
  quizAnswer3.innerHTML = questions[1].answers[2].text;
  quizAnswer4.innerHTML = questions[1].answers[3].text;
}

// quiz functions

let shuffledQuestions, currentQuestionIndex;

// begin quiz with button

function begin() {
  quizBox.style.display = "flex";
  beginButton.style.display = "none";
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  showQuestion();
  console.log("Quiz started. No cheating!");
}

// show results of quiz

function showResults() {
  quizBox.style.display = "none";
  document.getElementById("quizHead").innerHTML = "Wynik testu";
}

// next question

function nextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);

  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  showQuestion();
  console.log("Next question...");
}

//select questions

// buttons

nextButton.addEventListener("click", nextQuestion);

beginButton.addEventListener("click", begin);

// on submit, show results

submitButton.addEventListener("click", showResults);

// questions
