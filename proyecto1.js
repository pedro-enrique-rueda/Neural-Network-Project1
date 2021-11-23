function initializing(){
    var principal = document.getElementById("wheremagichappens");
    var welcome = document.createElement("h1",{id:"nuevo"});
    var welcomeContent = document.createTextNode("Welcome and select one option from left-side.");
    
    welcome.setAttribute("style","color:blue; text-align: center; margin-top:20vh;");
    welcome.appendChild(welcomeContent);
    principal.appendChild(welcome);

    
    
    var op = document.querySelectorAll(".op");
    op.forEach(function(item){
        item.addEventListener("click",optselected,false);
    })

    
    function optselected(e){
        let id_item = e.target.getAttribute('id');
        if(id_item == 'logic_gates'){
            logic_gates(id_item);
        }
    }
    
    function logic_gates(id_item){
        // remove welcome element first
        principal.removeChild(welcome);

        // now we create new elements for this operation
        var train = document.createElement("button",{id:"train"});
        var trainContent = document.createTextNode("hola");
        train.setAttribute("style","color:blue; width:100px; height:20px;");
        train.appendChild(trainContent);
        principal.appendChild(train); 

        train.addEventListener("click",l_gates,false);

    }


}


document.addEventListener("DOMContentLoaded",initializing);