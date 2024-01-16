import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const CreatePage = async () => {
  try {
    clearPage();

    const main = document.querySelector('main');
    main.innerHTML += `<h3>Create a query Page</h3>`;

    // const response = await fetch('http://localhost:3000/queries');
    // if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    // const demandes = await response.json();
    
    const form = document.createElement('form');
    form.innerHTML = `
        <div>
            <label for="subject">Subject of your query</label>
        </div>
        <div>
            <input type="text" name="subject" id="subject">
        </div>`;

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Submit';
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const sub = document.getElementById('subject').value;
      main.innerHTML += sub;
      const options = {
        method: 'POST',
        body: JSON.stringify({ subject: sub, status: 'requested' }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const responseAdd = await fetch(`http://localhost:3000/queries`, options);
      if (!responseAdd) throw new Error(`fetch error : ${responseAdd.status} : ${responseAdd.statusText}`);
      Navigate('/queries');
    });
    form.appendChild(submit);
    main.appendChild(form);
  } catch (err) {
    console.error('Page::error: ', err);
  }
};

export default CreatePage;
