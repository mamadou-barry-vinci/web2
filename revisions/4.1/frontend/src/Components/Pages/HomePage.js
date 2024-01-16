import groot from '../../img/groot.jpg'
import stormtrooper from '../../img/stormtrooper.jpg';

const HomePage =()=> {
  const main = document.querySelector('main');
  const innerHTML = `<div class="container text-center">
                      <div class="row">
                        <div class="col">
                          <h3>Welcome to myMovies !</h3>

                          <p>Here you can find a selection of our favorite movies ; )</p>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12 col-lg-6">
                          <img class="img-thumbnail" src=${groot} alt="Groot" />
                        </div>

                        <div class="col-12 col-lg-6">
                          <img class="img-thumbnail" src=${stormtrooper} alt="Stormtrooper" />
                        </div>
                      </div>
                    </div>
                    <button class="about">about</button>
                    <h1 class="d-none d-lg-block">Enjoy our large screen view ; )</h1>
                    <h1 class="d-block d-lg-none">Enjoy our small screen view ; )</h1> `;

  main.innerHTML=innerHTML;
  const btnAbout=document.querySelector(".about");
  btnAbout.addEventListener("click",about);
};



function about (){
  const main=document.querySelector('main');
  const innerHTML=`<h3>Le createur du site : Omar Koubai</h3>
                  <button class="back">back</button>`;
                  
  main.innerHTML=innerHTML;
  const btnBack=document.querySelector(".back");
  btnBack.addEventListener("click",HomePage);
                
}


export default HomePage;
