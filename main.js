
function pa1() {
    sen=[];
    for (i = 1; i <=5;i++) {
      sen.push(document.getElementById("p1input"+i).value);
        
    }
    document.getElementById("pa1").innerHTML= sen.join(" ");
}

function pa2() {
    sen=[];
    for (i = 1; i <=5;i++) {
      sen.push(document.getElementById("p2input"+i).value);
        
    }
    document.getElementById("pa2").innerHTML= sen.join(" ");
}