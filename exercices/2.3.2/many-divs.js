const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("click", bClicked);
});

function bClicked(e){
    e.target.style.width = "500px";
    e.target.style.height = "500px";
    e.target.innerText = `${e.target.style.backgroundColor}`;
}