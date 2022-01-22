const buttons=document.querySelectorAll(".btn");
const result=document.getElementById("result");

// affichage
ecrire = (e)=>{

    if (result.textContent.length<15){
        result.textContent+=e;
    }
};

// calcul de ce qui est affiché dans result (utilisation de la fonction equal)
calcule = ()=>{
    console.log(result.textcontent);
    result.textContent=eval(result.textContent);
}

// ajout d'un event listener sur tous les botons de la classe btn
buttons.forEach((mybutton) => {
    mybutton.addEventListener('click',(e)=>{
        ecrire(e.target.id);
    })
})

// calcul du resultat quand on appuie sur la touche égale
equal.addEventListener('click',calcule);

// bouton effacter ( C )
clear.addEventListener('click',()=>{
    result.textContent="";
});