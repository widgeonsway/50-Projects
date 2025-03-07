const quizData = [
    {
        question: "What is the capital of the Netherlands?",
        a: "Rotterdam",
        b: "The Hague",
        c: "Amsterdam",
        d: "Utrecht",
        correct: "c",
    },
    {
        question: "Which of the following is a famous Dutch painter?",
        a: "Pablo Picasso",
        b: "Vincent van Gogh",
        c: "Claude Monet",
        d: "Leonardo da Vinci",
        correct: "b",
    },
    {
        question: "What is the official currency of the Netherlands?",
        a: "Euro (€)",
        b: "Dutch Guilder (ƒ)",
        c: "Pound Sterling (£)",
        d: "Swiss Franc (CHF)",
        correct: "a",
    },
    {
        question: "Which of these is a traditional Dutch food?",
        a: "Paella",
        b: "Stroopwafel",
        c: "Croissant",
        d: "Sushi",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})