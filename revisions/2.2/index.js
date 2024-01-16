window.addEventListener('click', renderCompteur);
const message = document.querySelector('#message');

let compteur = 0;
function renderCompteur(){
    compteur++;
    message.innerHTML = `Nombre de clicks: ${compteur}`
    if (compteur >= 5 && compteur <= 9){
        message.innerHTML += `<div>Bravo, bel échauffement !</div>`;
    }
    
    if (compteur > 9){
        message.innerHTML += `<div>Vous êtes passé maître en l'art du clic !</div>`;
    }
}