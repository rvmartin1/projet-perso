// Code javascript pour la génération du mot de passe

// constantes
const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é\"'(-è_çà)^$*ù;:!°+¨£µ%?./\\";
const rangeValue=document.getElementById("password-length");
const passwordOutput=document.getElementById("password-output");
   

// Fonction de génération des mots de passe
function generatePassword(){
    
    let data = [];
    let word="";

    // récupération des caractères choisis pour le mot de passe
    if (lowercase.checked) data.push(...dataLowerCase);
    if (uppercase.checked) data.push(...dataUpperCase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);
    if (data.length == 0){
        alert("vous devez sélectionner au moins un style de caractère");
    }


    // génération du mot de passe
    let longueur=rangeValue.value;
    for (let i=0; i<longueur;i++){
        let index=Math.floor(Math.random()*data.length);
        word+=data[index];
        
    }
    // affichage du mot de passe
    passwordOutput.value=word;

    // copie du mot de passe dans le presse papier
    passwordOutput.select();
    document.execCommand("copy");

    // Message sur le bouton pour indiquer que le mot de passe est copié dans le presse papier 
    generateButton.textContent="Copié !";


    // Au bout de 2 sec on remet le message initial sur le bouton
    setTimeout(()=>{
        generateButton.textContent="Générer mot de passe";
    },2000)

}

// appel de la fonction de génération des mots de passe lors du click sur le bouton
generateButton.addEventListener('click',generatePassword)