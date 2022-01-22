// 

const userAction = async () => {
  // appel du service GET
  fetch('http://rvmartin1.com:8881/api/v1/student')
  // récupération de la réponse et transformation en format JSON
  .then(response => response.json())
  // récupération de la réponse en format JSON et affichage sur la page sous forme de texte
  .then(response =>  {
    console.log("test");
    document.getElementById("listeEtudiant").innerHTML = JSON.stringify(response)
    })
  // gestion des erreurs
  .catch(error => console.log("Erreur : "+ error));
;
}

let button= document.getElementById("bouton");
button.addEventListener('click', userAction);