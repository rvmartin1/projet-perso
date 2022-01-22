let titre="<h1 class=\"centrer\">Exercices tirés de la vidéo : </h1>"; 
titre+="<h2 class=\"centrer\"><a href=\"https://www.youtube.com/watch?v=5l_agaIkbKo&t=364s\">";
titre+="[Cours Javascript] Apprendre Javascript de A à Z - Les données (3/6)</a>";
titre+="</h2>";
document.body.innerHTML +=titre;
let array=[{nom: "Denis"}];
console.log(array[0]);

// Boucle sur 
document.body.innerHTML+="<h3>Exercice - recuperation d'un element d'un objet</h3>"
document.body.innerHTML+="objet {nom: \"Denis\"}]"
document.body.innerHTML+="<br>array[0].nom = " + array[0].nom;

let objet ={
    pseudo: "Denis",
    age: 33,
    technos: ["JavaScript","React","NodeJS"],
    admin: false
}
;
objet.adresse="Rue de la mer";

console.log(objet);
// boucle sur les tableaux d'objet
data = [
    {
        pseudo: "Denis",
        age: 33,
        technos: ["JavaScript","React","NodeJS"],
        admin: false
    },
    {
        pseudo: "Samia",
        age: 33,
        technos: ["CSS","React","NodeJS"],
        admin: false
    },
    {
        pseudo: "Nicolas",
        age: 42,
        technos: ["Php","React","NodeJS"],
        admin: false
    }
];

document.body.innerHTML+="<h3>Exercice - Boucle sur un tableau d'objet</h3>"
document.body.innerHTML+="for (const user of data ) {...}";
for (const user of data ){
    document.body.innerHTML += "<p>"+user.pseudo+"</p>";

}

document.body.innerHTML+="<h3>Exercice - Changement de couleur au click - le switch</h3>"

document.body.innerHTML+="Cliquer sur un langage";
document.body.innerHTML+="<h4 id=\"javascript\">Javascript</h4>";
document.body.innerHTML+="<h4 id=\"php\">Php</h4>";
document.body.innerHTML+="<h4 id=\"python\">Python</h4>";

document.body.addEventListener('click',(e)=>{
    console.log(e.target.id);
    switch (e.target.id) {
    case "javascript":
        document.body.style.background="yellow";
        break;
    case "php":
        document.body.style.background="violet";
        break;    
    case "python":
        document.body.style.background="blue";
        break;        
    }
})

document.body.innerHTML+="<h3>Exercice - Générateur de mot de passe</h3>"

document.body.innerHTML+="<p>le lien ci dessous permet d'accéder à un outil de génération de mot de passe</p>"
document.body.innerHTML+="<p><a href=./password-maker/passwordmaker.html>password-maker</a></p>";
document.body.innerHTML+="<br>Une scroll bar permet de choisir la longueur du bouton (input type=range)"
document.body.innerHTML+="<br>4 boutons permettent de choisir les caractères qui constitueront le mot de passe (input type=checbox)"
document.body.innerHTML+="<br>un bouton permet de générer le mote de passe (button id=generateButton)." 
document.body.innerHTML+="Le bouton appelle une fonction javascript qui génère le mot de passe et le copie/colle dans le presse papier"
document.body.innerHTML+="<br><br>"

document.body.innerHTML+="<h3>Exercice - Formulaire</h3>"

document.body.innerHTML+="<p>le lien ci dessous permet d'accéder à un formulaire</p>"
document.body.innerHTML+="<p><a href=./form-checker/formchecker.html>form-chercker</a></p>";
document.body.innerHTML+="<br>Une scroll bar permet de choisir la longueur du bouton (input type=range)"
document.body.innerHTML+="<br>4 boutons permettent de choisir les caractères qui constitueront le mot de passe (input type=checbox)"
document.body.innerHTML+="<br>un bouton permet de générer le mote de passe (button id=generateButton)." 
document.body.innerHTML+="Le bouton appelle une fonction javascript qui génère le mot de passe et le copie/colle dans le presse papier"
document.body.innerHTML+="<br><br>"


document.body.innerHTML+="<h3>Exercice - manipulation donnees</h3>"
document.body.innerHTML+="<h4>Je suis un</h4>"
document.body.innerHTML+="<h4 id=\"target\"></h4>"

let wordIndex=0;
let letterIndex=0;
const target = document.getElementById("target");
let array2 =["developpeur","photographe","creatif"];
const createLetter= () =>{
    const letter = document.createElement("span");
    target.appendChild(letter);
    letter.textContent=array2[wordIndex][letterIndex];
    setTimeout(() => {
        letter.remove();
    },2000);
};

const loop = () => {
    setTimeout(()=>{
        if (wordIndex>=array2.length){
            wordIndex=0;
            arrayIndex=0;
            loop();
        }
             
        else if (letterIndex < array2[wordIndex].length){
            createLetter();
            letterIndex++;
            loop();
        }
        else{
            
            wordIndex++;
            letterIndex=0;
            setTimeout(()=>{loop();},2000);
            

        }
    },60)

}


loop();




