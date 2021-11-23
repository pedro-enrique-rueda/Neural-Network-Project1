function initializing(){
    let principal = document.getElementById("wheremagichappens");
    var newElement = document.createElement("h1",{id:"nuevo"});
    var newContent = document.createTextNode("Welcome and select one option from left-side.");
    
    newElement.setAttribute("style","color:blue; text-align: center; margin-top:20vh;");
    newElement.appendChild(newContent);
    principal.appendChild(newElement);

    
    var op = document.querySelectorAll("#op");
    op.forEach(function(item){
        item.addEventListener("click",hola,false);
    })

    function hola(){
        alert("hola");
    }
    


}


document.addEventListener("DOMContentLoaded",initializing);