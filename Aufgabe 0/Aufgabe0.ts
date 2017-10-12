/*
Aufgabe: 0, Miniseite
Name: Julia Kaiser
Matrikel: 256580
Datum: 12.10.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

window.addEventListener("load", init);

function init(): void {
    
    let name: string = prompt("Wie heisst du?");
    if (name != null) {
        
          alert("Hallihallo " + name + ", ich wuensche dir einen schoenen Tag!");
    }
}
