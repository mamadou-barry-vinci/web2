const message = document.getElementById('message');
const btn = document.querySelector('#btn');

let compteur = 0;
let start;

function stateAfterTimeout(){
    start = new Date();
    timeoutId = setTimeout(() => {
        if (compteur < 10){
            message.innerHTML = `Game over, you did not click 10 times within 5s !`;
        }
    }, 5*1000);
}

btn.addEventListener('click', () => {
    compteur++;
    if (compteur >= 10){
        const time = new Date().getTime() - start.getTime();
        message.innerHTML = `You win ! You clicked 10 times within ${time} ms`;
        clearTimeout(timeoutId);
    }
});

btn.addEventListener('mouseover', stateAfterTimeout());

// Quand la souris passe sur le bouton, c'est là qu'on commence le timeout.
// La callback sera effectuée après le temps donc on ne met que ce dont a besoin à la fin des 5 sec
// Ne pas oubier le clearTimeout ou sinon la callback s'effectura quand même