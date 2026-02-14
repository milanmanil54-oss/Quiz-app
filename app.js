const questions = [
  {
    question : "Which is the largest animal in the world?",
    answers : [
      {text: "shark",correct: false},
      {text: "blue whale",correct: true},
      {text: "elephant",correct: false},
      {text: "giraffe",correct: false}
    ]
  },
  {
    question : "Which is the largest desert in the world?",
    answers : [
      {text: "khalahari",correct: false},
      {text: "sahara",correct: true},
      {text: "gobi",correct: false},
      {text: "arctic",correct: false}
    ]
  },
  {
    question : "Which is the largest country in the world?",
    answers : [
      {text: "china",correct: false}, 
      {text: "usa",correct: false},
      {text: "russia",correct: true},
      {text: "canada",correct: false}
    ]
  },
{
    question : "Which is the largest city in the world?",
    answers : [
      {text: "new york",correct: false},    
      {text: "tokyo",correct: true},
      {text: "delhi",correct: false},
      {text: "shanghai",correct: false}
    ]
},
{
    question : "Which is the largest river in the world?",
    answers : [
      {text: "nile",correct: true},
      {text: "amazon",correct: false},
      {text: "yangtze",correct: false},

      {text: "mississippi",correct: false}
    ]

},
{
    question : "Which is the largest mountain in the world?",
    answers : [
      {text: "everest",correct: true},
      {text: "k2",correct: false},

      {text: "kangchenjunga",correct: false},
      {text: "lhotse",correct: false}
    ]

},
{
    question : "Which is the largest ocean in the world?",
    answers : [
      {text: "atlantic",correct: false},
      {text: "indian",correct: false},
      {text: "pacific",correct: true},
      {text: "arctic",correct: false}
    ]
}

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let cuurentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
}