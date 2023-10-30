const btn = document.querySelector('#btn1');
const message = document.querySelector('#message');


let nbClick = 0;
let debut;
let timeOutID;
const delayInSeconds = 5;
const delayInMiliSeconds = delayInSeconds * 1000;


//dès que la souris se touve sur le bouton => appel de la fonction
btn.addEventListener('mouseover', clicksIn5Seconds);

// à chaque fois qu'on clique => appel de la fonction;
btn.addEventListener('click', numberOfClicks);

function numberOfClicks(){
    nbClick++;
    if (nbClick >= 10) {
        const temps = new Date().getTime() - debut.getTime();
        message.innerText = `You win ! You clicked 10 times within ${temps} ms`;
        // permet de stopper l'appel de la callback qui a été apellée via settimeout
        // si pas présent, il va quand même faire ce qui se trouve dans setTimeout 
        clearTimeout(timeOutID);
    }
}

function clicksIn5Seconds(){
    debut = new Date();
    // Au bout de 5 secondes, il va faire ce qui se trouve à la place du 1er paramètre (message.innerText ...)
    timeOutID = setTimeout(() => message.innerText = "Game over, you did not click 10 times within 5s !", delayInMiliSeconds)
}