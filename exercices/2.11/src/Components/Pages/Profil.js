import imgAvatar from "../../img/exemple_avatar.png";

const ProfilPage = () => {
    const main = document.querySelector("main");
    main.innerHTML = `<div class="container mt-5">
                        <div class="card text-center" style="width: 18rem;">
                            <img class="card-img-top" src="${imgAvatar}" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text" id="pseudo">Pseudo du joueur qu'il faudra remplacer</p>
                                <p class="card-text" id="score">Score du joueur qu'il faudra remplacer</p>
                                <p class="card-text" id="rank">Classement du joueur qu'il faudra remplacer</p>
                            </div>
                        </div>
                    </div>`
                    ;

    const submit = document.createElement("button");
    submit.className = "rounded";
    submit.innerText = "Modifier le profil";
    submit.addEventListener('click', () => {
        submit.innerText = "bouton appuyé";
    });
    main.querySelector(".card-body").appendChild(submit);
    const pseudo = main.querySelector("#pseudo");
    const score = main.querySelector("#score");
    const rank = main.querySelector("#rank");

    pseudo.innerText = "PSEUDO N°1";
    score.innerText = "SCORE N°1";
    rank.innerText = "CLASSEMENT N°1";
}

export default ProfilPage;