import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

const main = document.querySelector('main');
const form = document.createElement('form');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');
const div7 = document.createElement('div');

const labelLines = document.createElement('label');
labelLines.innerText = 'Number of lines:';
div1.appendChild(labelLines);

const inputLines = document.createElement('input');
inputLines.type = 'number';
inputLines.id = 'lines';
div2.appendChild(inputLines);

const labelColumns = document.createElement('label');
labelColumns.innerText = 'Number of columns';
div3.appendChild(labelColumns);

const inputColumns = document.createElement('input');
inputColumns.type = 'number';
inputColumns.id = 'columns';
div4.appendChild(inputColumns);

const labelString = document.createElement('label');
labelString.innerText = 'Initial string:';
div5.appendChild(labelString);

const inputInitialString = document.createElement('input');
inputInitialString.type = 'text';
inputInitialString.id = 'initString';
div6.appendChild(inputInitialString);

const inputSubmit = document.createElement('input');
inputSubmit.type = 'submit'
inputSubmit.value = 'Create table';
div7.appendChild(inputSubmit);


form.appendChild(div1);
form.appendChild(div2);
form.appendChild(div3);
form.appendChild(div4);
form.appendChild(div5);
form.appendChild(div6);
form.appendChild(div7);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const table = document.createElement('table');
    table.className = 'table table-bordered text-nowrap';

    const nbLines = form.lines.value;
    const nbColumns = form.columns.value;
    const initString = form.initString.value;

    for (let i = 0; i < nbLines; i+=1) {
        const line = document.createElement('tr');
        for (let j = 0; j < nbColumns; j+=1) {
            const cell = document.createElement('th');
            cell.innerText = `${initString}[${i}][${j}]`;
            line.appendChild(cell);
        }
        table.appendChild(line);
    }
    main.appendChild(table);
});

main.appendChild(form);