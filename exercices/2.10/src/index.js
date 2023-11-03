import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

const form = document.querySelector("form");
const nbLines = document.querySelector("#nbLines");
const nbColumns = document.querySelector("#nbColumns");
const inintString = document.getElementById("initialString");
const table = document.querySelector("#future_table");

form.addEventListener('submit', btnClicked)

function btnClicked(e){
    e.preventDefault();
    const myArr = createArray(nbLines.value, nbColumns.value, inintString.value);
    table.innerHTML = createHtmlTableAsString(myArr);
}

function createArray(nbOfLines, nbOfColumns, str){
    const arr = [];
    for (let i = 0; i < nbOfLines; i+=1) {
        arr.push([]);
        for (let j = 0; j < nbOfColumns; j+=1) {
            arr[i].push(`${str}[${i}][${j}]`);
        }
    }
    return arr;
}

function createHtmlTableAsString(str){
    let newtable = `<table class="table table-bordered text-nowrap">`;
    str.forEach(line => {
        newtable += "<tr>";
        line.forEach(cell => {
            newtable += `<th>${cell}</th>`;
        });
        newtable += "</tr>";
    });

    newtable+="</table>";
    return newtable;
}