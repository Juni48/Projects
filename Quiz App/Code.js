const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most use programming language in 2022?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },{
        question: 'Who is the President of US',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    }, {
        question: 'What does HTML stand for',
        a: 'HyperText Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Model',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was Javascript launched',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd',
    }
];


const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('btn')

let currentQuiz = 0;
let answer = undefined


loadQuiz ();

function loadQuiz(){
    const currentQuizData = quizData
    [currentQuiz]
    questionEl.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}


function getSelected() {
    const answersEl = document.querySelectorAll(".answer");

    answersEl.forEach((answersEl) =>{
        if(answersEl.checked){
            answer = answersEl.id
        }
    });
}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    getSelected();

    // if (currentQuiz < quizData.length){
    //     loadQuiz();
    // } else {
    //     alert('You Finish')
    // }
    // loadQuiz();
});