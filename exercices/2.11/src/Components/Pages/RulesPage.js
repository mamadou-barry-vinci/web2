import Navigate from '../Router/Navigate';

const RulePage = () => {
    const main = document.querySelector('main');
    main.innerHTML = "Presentation of all the rules";
    const submit = document.createElement('input');
    submit.value = 'Compris !';
    submit.className = 'btn btn-secondary mt-3';
    submit.addEventListener('click', () => {
        Navigate('/');
    });

    main.appendChild(submit);
}

export default RulePage;