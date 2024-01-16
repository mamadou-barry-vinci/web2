import { clearPage } from "../../utils/render";
import Navigate from "../Router/Navigate";
import {ajouterFilm} from "../../utils/movies";

const AddMoviePage=()=>{
    clearPage();
    const main=document.querySelector('main');
    main.innerHTML=`<h1>Page D ajout de film </h1> 
                    <form action="/ViewMovie">
                    <div>
                          <label>title</label>
                          <input type="text" id="title">
                        </div>
                        <div>
                          <label>duration</label>
                          <input type="number" id="duration">
                        </div>
                        <div>
                          <label>budjet</label>
                          <input type="number" id="budjet">
                        </div>
                        <div>
                          <label>link</label>
                          <input type="text" id="link">
                        </div>
                        <div>
                          <input type="submit" class="submit">
                        </div>
                    </form>
                     `;    
    
    const myForm = document.querySelector('form');
    
    myForm.addEventListener('submit',showIn);
        
        

}

function showIn(){
    const title=document.querySelector("#title");
    const duration= document.querySelector("#duration");
    const budget=document.querySelector("#budjet");
    const link=document.querySelector("#link");

    ajouterFilm(title.value,duration.value,budget.value,link.value);
   

    Navigate("/ViewMovie");
}
export default AddMoviePage;