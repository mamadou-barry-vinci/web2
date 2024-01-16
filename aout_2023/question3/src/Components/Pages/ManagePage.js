import { clearPage } from '../../utils/render';

const stateList = ["requested", "accepted",	"refused", "done"];
const ManagePage = async () => {
    try {
        clearPage();
    
        const main = document.querySelector('main');
        main.innerHTML += `<h3>Manage queries</h3>`;
    
        const response = await fetch('http://localhost:3000/queries');
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    
        const demandes = await response.json();
        const form = document.createElement('form');

        main.appendChild(form);

        for (let i = 0; i < demandes.length; i += 1) {
            const selectName = `simple_${i}`;

            form.innerHTML += `
                <div>
                    <label for="${selectName}">• ${demandes[i].subject}</label>
                    <select id="${selectName}" name="${selectName}">
                    </select>
                </div>
            `;
            // problème ici avec la selected option par défaut
            const sel = document.getElementById(selectName);
            for (let j = 0; j < stateList.length; j+=1) {
                let option;
                if (demandes[i].status === stateList[j]) option = `<option selected>${stateList[j]}</option>`;
                else option = `<option>${stateList[j]}</option>`;
                sel.innerHTML+=option;
            }

        }

      } catch (err) {
        console.error('Page::error: ', err);
      }
};

export default ManagePage;