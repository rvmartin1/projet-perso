const header=document.querySelector("header");
let toggle=document.querySelector('.toggle');
let body=document.querySelector('body');

if (!body.classList.contains("close")){
    body.classList.remove("open")
    body.classList.add("close");
}

toggle.addEventListener('click',function(){
    if (body.classList.contains("open")){
        body.classList.remove("open")
        body.classList.add("close");
    }
    else{
        body.classList.add('open');
        body.classList.remove("close")
    }
    
})

window.addEventListener("scroll",()=>{
    header.style.transition= "0.2s ease";

    if (window.scrollY>120){
        header.style.top="-150px";
    }
    else{
        header.style.top=0;
    }
});