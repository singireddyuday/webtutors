import questions from './questions.js';

let score = 0;
let correctCount = 0;
let wrongCount = 0;
let answeredCount = 0;
let currentQuestionIndex = 0;
let totalTime = 0;

const questionContainer = document.querySelector('.qa_body');
const totalQuestionsDisplay = document.getElementById('total-questions');
const questionNumberDisplay = document.getElementById('question-number');
const answeredQuestionsDisplay = document.getElementById('answered-questions');
const correctAnswersDisplay = document.getElementById('correct-answers');
const wrongAnswersDisplay = document.getElementById('wrong-answers');
const finalScoreDisplay = document.getElementById('final-score');
const timerDisplay = document.getElementById('timer');
const scoreTotalQuestionsDisplay = document.getElementById('score-total-questions');
const scoreboard = document.querySelector('.scoreboard');
const timeTakenDisplay = document.getElementById('time-taken');
const backButton = document.getElementById('back-button');

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

totalQuestionsDisplay.innerHTML = questions.length;
questionNumberDisplay.innerHTML = currentQuestionIndex + 1;

let timer;
let time = 0;

function startTimer() {
    timer = setInterval(() => {
        time++;
        totalTime++;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timerDisplay.innerHTML = `Time: ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (time === 60) {
            skipQuestion();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    time = 0;
    startTimer();
}

function showQuestion(question) {
    resetTimer();
    questionContainer.innerHTML = '';

    const questionElement = document.createElement('div');
    questionElement.classList.add('qa_set', 'active');
    questionElement.innerHTML = `<h4>${question.question}</h4>`;
    
    question.answers.forEach(answer => {
        const answerElement = document.createElement('div');
        answerElement.classList.add('qa_ans_row');
        answerElement.innerHTML = `<input type="radio" name="q${currentQuestionIndex}" ${answer.correct ? 'data-correct="true"' : ''}><span>${answer.text}</span>`;
        questionElement.appendChild(answerElement);
    });

    questionContainer.appendChild(questionElement);

    questionElement.addEventListener('click', event => {
        const selectedAnswer = event.target.closest('input[type="radio"]');
        if (selectedAnswer) {
            const isCorrect = selectedAnswer.getAttribute('data-correct') === 'true';
            if (isCorrect) {
                score += 2;
                correctCount++;
            } else {
                score--;
                wrongCount++;
            }

            answeredCount++;
            questionNumberDisplay.innerHTML = currentQuestionIndex + 2;

            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion(questions[currentQuestionIndex]);
            } else {
                showResults();
            }
        }
    });
}

function skipQuestion() {
    clearInterval(timer);
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        questionNumberDisplay.innerHTML = currentQuestionIndex + 1;
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        questionNumberDisplay.innerHTML = currentQuestionIndex + 1;
        showQuestion(questions[currentQuestionIndex]);
    }
}

function showResults() {
    clearInterval(timer);
    questionContainer.innerHTML = '';
    document.querySelector('.qa_box').style.display = 'none';
    scoreboard.style.display = 'flex';

    scoreTotalQuestionsDisplay.innerHTML = questions.length;
    answeredQuestionsDisplay.innerHTML = answeredCount;
    correctAnswersDisplay.innerHTML = correctCount;
    wrongAnswersDisplay.innerHTML = wrongCount;
    finalScoreDisplay.innerHTML = score;

    let totalMinutes = Math.floor(totalTime / 60);
    let totalSeconds = totalTime % 60;
    timeTakenDisplay.innerHTML = `Time Taken: ${totalMinutes < 10 ? '0' : ''}${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;

    const ctx = document.getElementById('scoreChart').getContext('2d');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Correct', 'Wrong'],
            datasets: [{
                label: 'Quiz Results',
                data: [correctCount, wrongCount],
                backgroundColor: ['#36a2eb', '#ff6384'],
            }]
        },
        options: {
            responsive: true,
        }
    });
}

// Change this URL to the desired back page URL
backButton.addEventListener('click', () => {
    window.location.href = 'backpage.html';
});

// Event listeners for Next and Previous buttons
prevButton.addEventListener('click', () => {
    prevQuestion();
});

nextButton.addEventListener('click', () => {
    skipQuestion();
});

// Initialize the quiz
startTimer();
showQuestion(questions[currentQuestionIndex]);
