const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
const green = document.querySelector('.green');
const color = document.querySelector('#color');

let interval;
let compteur = 0;

function startRedLight(){
    interval = setInterval(changeColor, 2000);
}

function changeColor(){
    // passer au rouge
    if (compteur%4===0){
        orange.style.backgroundColor = 'white';
        red.style.backgroundColor = 'red';
    }
    // passer au orange
    else if (compteur%4===1){
        red.style.backgroundColor = 'white';
        orange.style.backgroundColor = 'orange';
    }
    // passer au vert
    else if (compteur%4===2){
        orange.style.backgroundColor = 'white';
        green.style.backgroundColor = 'green';
    }

    // passer au orange
    else if (compteur%4===3){
        green.style.backgroundColor = 'white';
        orange.style.backgroundColor = 'orange';
    }

    compteur++;
}

startRedLight();