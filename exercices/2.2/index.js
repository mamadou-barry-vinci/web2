window.addEventListener('click', bt1Push);

const compteur = document.querySelector("#counter");
const message = document.querySelector("#message");

let count = 0;
function bt1Push(){
    console.log("bouton appuyé");
    count++;
    compteur.innerHTML = count;

    if (count>=5 && count<=10) message.innerHTML = "Bravo, bel échauffement !";
    else if (count>10) message.innerHTML = "Vous êtes passé maître en l'art du clic !";
}