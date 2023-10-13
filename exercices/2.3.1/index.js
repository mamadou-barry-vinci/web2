const formDiv = document.querySelector(".souhait");
const souhaitDiv = document.querySelector(".s_demande");
const valeurSouhait = document.querySelector("form");

formDiv.addEventListener("submit", submitForm)

function submitForm(e){
    e.preventDefault();
    formDiv.style.display = "none";
    souhaitDiv.innerHTML = valeurSouhait.elements.souhait.value;
}

