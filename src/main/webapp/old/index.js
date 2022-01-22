//listGrid=document.getElementsByTagName("div");
const listGrid=document.querySelectorAll("div[class='grid']");
console.log(listGrid);
listGrid.forEach((grid) => {
    grid.addEventListener('click',(e)=>{
        switch(e.target.id){
            case "cv":
                document.location.href="./moncv/cv.html"; 
                break;
            case "cours-html":
                document.location.href="./cours-html/cours-html.html"; 
                break;
            case "cours-css":
                    document.location.href="./cours-css/cours-css.html"; 
                    break;
            case "javascript-donnees":
                    document.location.href="./javascript/donnees/donnees.html"; 
                    break;
            case "springboot-test":
                    document.location.href="./springboot/test/test.html"; 
                    break;
            default:
                 break;
        console.log("test + "+ e.target.id);
       // document.location.href="./moncv/cv.html";
    } 
    })})
    ;
/* cv.addEventListener('click',(e)=>{
    document.location.href="./moncv/cv.html"; 
})*/




function menuResponsive() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}