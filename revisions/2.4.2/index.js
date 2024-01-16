const colorCycle = ["red", "orange", "green", "orange"];
const extreme = ['1', '3'];

const divs = document.querySelectorAll('.feu');

let myIntervalId;

function start(){
    myIntervalId = setInterval(changeColor, 2000);
}

let compteur = 0;
function changeColor(){
    divs.forEach((div) => {
        div.style["background-color"] = "white";
    });

    if (compteur === 0){
        divs.forEach((div) => {
             if (div.id === extreme[0]) div.style["background-color"] = colorCycle[0];

            let id = extreme.shift();
            extreme.push(id);
        })
    }

    else{
        divs.forEach((div) => {
            if (div.id === '2') div.style["background-color"] = colorCycle[0];
        });
    }
    
    let color = colorCycle.shift();
    colorCycle.push(color);
    compteur = (compteur+1)%2;
}

start();