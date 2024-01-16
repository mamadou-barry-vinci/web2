const form = document.querySelector('#wish_form');
const wish = document.querySelector('#wish');
const main = document.querySelector('main');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(wish.value);
    main.innerHTML = wish.value;
});