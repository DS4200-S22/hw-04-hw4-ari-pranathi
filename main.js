var counter = 0;

function circle1_clicked() {
    counter++;
    let count = document.getElementById("txtcount");
    count.textContent = counter;
}


function bordercolor(event) {   
    var circle = event.currentTarget;  
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "5px");
}
 

function nocolor(event) {
    var circle = event.currentTarget;
    circle.setAttribute("stroke", "none");
}

 
function circle3_clicked(event) {
    var circle = event.currentTarget; 
    if (circle.getAttribute("opacity") == 0) {
        circle.setAttribute("opacity", 1);
    }
    else {
        circle.setAttribute("opacity", 0);
    }    
}