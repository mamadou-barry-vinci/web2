window.addEventListener('click', windowPush);

const compteur = document.querySelector("#counter"); // #counter correspond à l'élément dans html qui a comme id counter
const message = document.querySelector("#message");

let count = 0;
function windowPush(){
    console.log("bouton appuyé");
    count++;
    compteur.innerHTML = count;

    if (count>=5 && count<=10) message.innerHTML = "Bravo, bel échauffement !";
    else if (count>10) message.innerHTML = "Vous êtes passé maître en l'art du clic !";
}