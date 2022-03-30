function sleep(s) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + (s * 1000)) { /* non faccio niente */ }
}

var min = 0;
var max = 100;

function range(){

    return r;
}

function random() {
    //sleep(0.5);
    if(document.getElementById("inputDa").value=="" || document.getElementById("inputDa").value<0){
        alert("Inserire un valore valido nel campo 'Da'.");
        return false;
    }
    if(document.getElementById("inputA").value=="" || document.getElementById("inputA").value<0){
        alert("Inserire un valore valido nel campo 'A'!");
        return false;
    }
    min = document.getElementById("inputDa").value;
    max = document.getElementById("inputA").value;
    r = max-min+1;

    num = Math.round(Math.random() * r + min);
    //document.getElementById("numero").innerHTML = num;
    document.getElementById("numero").value = num;
    console.log(num);
}



