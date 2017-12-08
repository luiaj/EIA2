/*
Aufgabe: 7, DOM
Name: Julia Kaiser
Matrikel: 256580
Datum: 07.12.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace L07_DOM {
    window.addEventListener("load", init);

    function init(): void {
        
        //Fenster zum eingeben der Daten
        let anzahl: string = prompt("Wie viele Quadrate moechtest du sehen?");
        let anzahlNumber: number = parseInt(anzahl);

        let breite: string = prompt("Wie breit sollen sie sein?");
       

        let hoehe: string = prompt("Wie hoch sollen sie sein?");

        
        //Eingegebene Zahl für Anzahl muss zwischen 10 und 100 liegen
        if (anzahlNumber >= 10 && anzahlNumber <= 100) {
            for (let i: number = 0; i < anzahlNumber; i++) {
                drawSquare(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", breite, hoehe);
            }
            }
            else {
                window.alert("Bitte gib eine Anzahl zwischen 10 und 100 ein :)");
                init();
                }
        }
    

    function drawSquare(_x: number, _y: number, _farbe: string, _breite: string, _hoehe: string): void {
        
        let square: HTMLDivElement = document.createElement("div");
       

        square.style.width = _hoehe;
        square.style.height = _breite;
        square.style.backgroundColor = _farbe;
        square.style.marginLeft = _x.toString();
        square.style.marginTop = _y.toString();
        
        document.body.appendChild(square);
        
    }
}
