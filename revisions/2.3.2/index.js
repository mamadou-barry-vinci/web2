const all_divs = document.querySelectorAll('div');

function showColor(e){
    e.preventDefault();
    e.target.style.width = "500px";
    e.target.style.height = "500px";
    console.log(e.target.style["background-color"]);
    e.target.innerText = `${e.target.style["background-color"]}`;
}

all_divs.forEach((div) => {
    div.addEventListener('click', showColor)
})