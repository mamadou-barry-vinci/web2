import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import questions from './utils/questions';

const main = document.querySelector('main');
const nbQstTotal = questions.length;
const nbQstVoulues = 3;
const nbChoix = 3;

function createQuizz(){
    main.innerHTML = '';
    for (let i = 0; i < nbQstVoulues; i+=1) {
        const form = document.createElement('form');
        const randomNumber = Math.floor(nbQstTotal * Math.random());
        const qst = questions[randomNumber];
        for (let j = 0; j < nbChoix; j+=1) {
            form.innerHTML += `<div>
                                    <input type="radio" id="${j}" name="response" value="${qst.answers[j].isCorrect}" checked />
                                    <label>${qst.answers[j].text}</label>
                                </div>`
        }
        main.innerHTML += `<h3>${qst.question}</h3>`;
        main.appendChild(form);
    }

    const sumbit = document.createElement('button');
    sumbit.innerHTML = `Calculer mon score`;
    sumbit.addEventListener('click', () => {
        const userResponses = document.querySelectorAll('input[name="response"]:checked');
        let score = 0;


        userResponses.forEach(userResponse => {
            const isCorrect = userResponse.value === 'true'; // La valeur 'true' indique une réponse correcte
            if (isCorrect) {
                score+=1;
            }
        });
        showScore(score);
    });
    main.appendChild(sumbit);
}

function showScore(score){
    main.innerHTML = `<h3>Your score is ${score}/${nbQstVoulues} !`;
    const replay = document.createElement('button');
    replay.innerHTML = 'Replay';
    replay.addEventListener('click', () => {
        createQuizz();
    })
    main.appendChild(replay);
}


createQuizz();

