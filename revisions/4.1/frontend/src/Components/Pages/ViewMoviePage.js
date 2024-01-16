

const ViewMoviePage=()=>{                
    
    fetch('http://localhost:3000/films')
    .then((response) => {
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    })
    .then((films) => {
      affichage(films);
    })
    .catch((err) => {
      console.error('HomePage::error: ', err);
    });
    

}
function affichage(films){
  const main=document.querySelector('main');
  let innerHTML='';
  innerHTML+=`<h1>Page de view</h1> 
                  <table>
                  <thead>
                  <tr>
                      <th>Title</th>
                      <th>duration</th>
                      <th>budjet</th>
                      <th>link</th>
                    </tr>
                  </thead>
                  <tbody>`;

  films.forEach(element => {
    innerHTML+=`<tr>   
                    <td>${element.title}</td>
                    <td>${element.duration}</td>
                    <td>${element.budjet}</td>
                    <td>${element.link}</td>
                </tr>`;
});

innerHTML+=`</tbody>
            </table>`;
main.innerHTML=innerHTML;         
}

export default ViewMoviePage;