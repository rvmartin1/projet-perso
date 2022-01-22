let count=0;
const compteur=document.querySelector("h3");

// fonction de creation d'une bulle
const bubbleMaker = ()=> {

const bubble = document.createElement("span");
bubble.classList.add("bubble");
document.body.appendChild(bubble);

let size=Math.random()*100+100+"px";
bubble.style.width=size;
bubble.style.height=size;

bubble.style.top="100%";
let plusMinus=Math.random() >0.4 ? 1 : -1;
if (plusMinus==-1){
    bubble.style.left=(Math.random()*25*plusMinus)+"%";
}
else{
    bubble.style.left=(Math.random()*125*plusMinus)+"%";
}

plusMinus=Math.random() >0.4 ? 1 : -1;
console.log(Math.random()*100*plusMinus+"%");
if (plusMinus==-1){
    bubble.style.setProperty("--left", (Math.random()*25*plusMinus+"%"));
}
else{bubble.style.setProperty("--left", (Math.random()*125*plusMinus+"%"));}

// quand on clique on supprime la bulle et on incrémente le compteur
bubble.addEventListener('click',()=>{
    bubble.remove();
    count=count+1;
    compteur.textContent=count;
});

// au bout 8 secondes on supprime la bulle
setTimeout(() => {
    bubble.remove();
}, 8000);
}

// on crée une bulle toutes les 5 ms
setInterval(bubbleMaker
,500);