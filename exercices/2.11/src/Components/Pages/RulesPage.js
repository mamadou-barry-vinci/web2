import Navigate from '../Router/Navigate';

const RulePage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `<div class="container mt-5">
                            <div class="card mt- 5 mx-auto text-center">
                                <div class="card-body"  id="myCard">
                                    <h5 class="card-title">Règles du jeu</h5>
                                    <p class="card-text">Présence du texte avec les différents types, leurs avantages et inconvénients, la 
                                    présentation du jeu en lieu même (comment se passe une partie) </p>
                                </div>
                            </div>
                      </div>`;

    const submit = document.createElement('input');
    submit.value = 'Compris !';
    submit.className = 'btn btn-secondary bg-success';
    submit.addEventListener('click', () => {
        Navigate('/');
    });
    const div = main.querySelector("#myCard");
    div.appendChild(submit);

}

export default RulePage;