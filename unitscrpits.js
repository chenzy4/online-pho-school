
function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
  var btnContent = document.getElementById('btn-content');
  if (sidebar.classList.contains('open')) {
    btnContent.textContent = '✕'; // Change to X when sidebar is open
  } else {
    btnContent.textContent = '☰'; // Change back to ☰ when sidebar is closed
  }
}


const quizzes = {
  beginnerUnit1: [
    {
      question: "How to take a clear photo?",
      options: ["Use a tripod", "Increase ISO", "Use a faster shutter speed", "Use autofocus"],
      answer: "Use a faster shutter speed"
    },
    {
      question: "What is the purpose of a lens hood?",
      options: ["Protects the lens from scratches", "Reduces glare", "Improves image sharpness", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the purpose of a tripod?",
      options: ["To hold the camera steady", "To protect the camera from light", "To hold the camera in place", "All of the above"],
      answer: "To hold the camera steady"
    },
    {
      question: "What is the aperture of a lens?",
      options: ["The size of the opening that lets light into the camera", "The focal length of the lens", "The distance between the lens and the sensor", "The amount of zoom"],
      answer: "The size of the opening that lets light into the camera"
    }
  ],
  beginnerUnit2: [
    {
      question: "What is the aperture of a lens?",
      options: ["The size of the opening that lets light into the camera", "The focal length of the lens", "The distance between the lens and the sensor", "The amount of zoom"],
      answer: "The size of the opening that lets light into the camera"
    },
  
  ],
  beginnerUnit3: [
  ],
  beginnerUnit4: [
    {
      question: "What does ISO control in a camera?",
      options: ["Aperture size", "Shutter speed", "Sensor sensitivity to light", "Focal length"],
      answer: "Sensor sensitivity to light"
    },
   {
      question: "When should you use a high ISO setting?",
      options: ["In bright sunlight", "In low-light conditions", "To reduce noise", "For faster shutter speed"],
      answer: "In low-light conditions"
    },
  {
      question: "What is a drawback of using a high ISO?",
      options: ["Increased noise", "Decreased sharpness", "Increased depth of field", "Faster battery drain"],
      answer: "Increased noise"
  }
  ],
  beginnerUnit5: [
    {
      question: "What does ISO control in a camera?",
      options: ["Aperture size", "Shutter speed", "Sensor sensitivity to light", "Focal length"],
      answer: "Sensor sensitivity to light"
  },
  {
      question: "When should you use a high ISO setting?",
      options: ["In bright sunlight", "In low-light conditions", "To reduce noise", "For faster shutter speed"],
      answer: "In low-light conditions"
  },
  {
      question: "What is a drawback of using a high ISO?",
      options: ["Increased noise", "Decreased sharpness", "Increased depth of field", "Faster battery drain"],
      answer: "Increased noise"
  }
  ]
};



const dialog = document.getElementById("quiz-dialog");
const question = document.getElementById("question");
const optionButtons = document.querySelectorAll(".quiz-option");
const scoreresults = document.getElementById("score");
const correctannouncement = document.getElementById("correct");
const wrongannouncement = document.getElementById("wrong");
const announcement = document.getElementById("results-announcement");
const results = document.getElementById("results");
const finished = document.getElementById("finished");
const quizclosebtn = document.getElementById('quiz-closebtn');
const quiznext = document.getElementById('quiz-next');

let score = 0;
let currentQuestionIndex = 0;
let quizdata

function loadQuiz(unit) {
  announcement.style.display = "none";
  results.style.display = "none";
  quizdata = quizzes[unit];
  question.textContent = quizdata[currentQuestionIndex].question;
  optionButtons.forEach((button, index) => {
    button.textContent = quizdata[currentQuestionIndex].options[index];
  });
}

function openDialog(unit) {
  loadQuiz(unit);
  dialog.showModal();
}

function closeDialog() {
  dialog.close();
}

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  if (selectedAnswer === quizdata[currentQuestionIndex].answer) {
    scoreresults.textContent = score += 1;
    console.log(score)
    results.style.display = "flex";
    wrongannouncement.style.display = "none";
    correctannouncement.style.display = "block";
  } else {
    results.style.display = "flex";
    correctannouncement.style.display = "none";
    wrongannouncement.style.display = "block";
  }
}

function navigateNextQuestion() {
  results.style.display = "none";
  nextquestion()
}
function nextquestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizdata.length) {
    question.textContent = quizdata[currentQuestionIndex].question;
    optionButtons.forEach((button, index) => {
      button.textContent = quizdata[currentQuestionIndex].options[index];
    });
  } else {
    results.style.display = "flex";
    wrongannouncement.style.display = "none";
    correctannouncement.style.display = "none";
    finished.style.display = "block";
    quiznext.textContent = "close"
    quizclosebtn.style.display = "none";
    announcement.style.display = "block";
    quiznext.addEventListener('click', closeDialog);
  }
}

optionButtons.forEach(button => {
  button.addEventListener("click", checkAnswer);
});

loadQuiz();

function nextunit(level, unitnumber) {
  window.location.href = level + 'unit' + unitnumber + '.html'; //navigate to the next unit
  console.log(level + 'unit' + unitnumber + '.html')
}
