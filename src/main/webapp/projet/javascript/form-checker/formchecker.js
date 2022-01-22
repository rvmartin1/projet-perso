
// selection des input
const inputs= document.querySelectorAll('input[type="text"],input[type="password"]');

// progress bar
const progressBar=document.getElementById("progress-bar");

// bouton de validation
const form=document.querySelector("form");

// variables
let pseudo,email,password,confirmpass;



// fonction commune d'affichage
const errorDisplay = (name, textError,valid)=>{
    // recuperation du container general
    const container  = document.querySelector("."+name+"-container");
    // recuperation du container span
    const errorDisplay = document.querySelector("."+name+"-container > span");
    if (!valid){
        container.classList.add("error");
        errorDisplay.textContent=textError;
    }
    else{
        container.classList.remove("error");
        errorDisplay.textContent="";
    }
}


// fonction de vérification du pseudo
const pseudoChecker =(value) =>{
    pseudo=null;
    // vérificaiton de la taille du pseudo
    if (value.length >0 && (value.length <3 || value.length >20)){
        errorDisplay("pseudo","Le pseudo doit faire entre 3 et 20 caractères");
    // vérification des caractères saisis
    }else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){
        errorDisplay("pseudo","Le pseudo contient des caractères incorrects");
    }
    // cas OK
    else{
        pseudo=value;
        errorDisplay("pseudo","",true);
    }

};

// fonction de vérification de l'email
const emailChecker =(value) =>{
    email="";
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)){
        errorDisplay("email","L'email n'a pas un format correct");    
    }    
    // cas OK
    else{
        email=value;
        errorDisplay("email","",true);
    }
};

// fonction de vérification du mot de passe
const passwordChecker =(value) =>{
    progressBar.classList = "";
    password=null;
    

    if (!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)){
        errorDisplay("password","Minimum de 8 caractères, 1 majuscule, 1 chiffre et 1 caractère spécial");
        progressBar.classList.add("progressRed");
    }
    else if (value.length<12){
        password=value;
        progressBar.classList.add("progressBlue");
        errorDisplay("password","",true);
    }   
    else{
        password=value;
        progressBar.classList.add("progressGreen");
        errorDisplay("password","",true);
    }  
        // on vérifie la correspondance des mots de passe
     if(confirmpass) {
         confirmChecker(document.getElementById("confirm").value);
     }
};


// fonction de vérification de la confirmation du mot de passe
const confirmChecker =(value) =>{
    confirmpass=false
    if (value !== password){
        errorDisplay("confirm","Les 2 mots de passes de sont pas identiques");

    }
    else{
        confirmpass=true;
        errorDisplay("confirm","",true);  
    }
};

// parcours des inputs
inputs.forEach((input)=>{
    //pour chaque input on ajoute un listener avec une fonction
    input.addEventListener("input",(e)=>{
        switch(e.target.id){
            case "pseudo":
                pseudoChecker(e.target.value);
                break;
            case "email":
                emailChecker(e.target.value);
                break;
            case "password":
                passwordChecker(e.target.value);
                break;
            case "confirm":
                confirmChecker(e.target.value);
                break;
        }
    });
});

// action sur le bouton
form.addEventListener('submit', (e) =>{
    // ne pas appeler la méthode par défaut de soumission du formulaire
    e.preventDefault();
    // vérification
    if (pseudo && email && password && confirmpass){
        // création d'un objet data avec les données
        const data = {
            pseudo,
            email,
            password,
        }

       console.log(data);
       alert('Inscrition validée. Vous pouvez voir l objet dans la console');
       
       // remise à zero
       pseudo=null;
       email=null;
       password=null;
       confirmpass=false;

       (inputs).forEach(input => {
          input.value=""; 
       });

       progressBar.classList="";

    }

    // les champs n'ont pas été renseigné
    else {
        alert('veuillez renseigner correctement les champs');
    }
})