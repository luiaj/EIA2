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
    window.addEventListener("keydown", keypress);

    function keypress(_event: KeyboardEvent): void {
        console.log(_event.keyCode);
    }

    function init(): void {

        
        //Fenster zum eingeben der Daten
        let anzahl: string = prompt("Wie viele Quadrate moechtest du sehen?");
        let anzahlNumber: number = parseInt(anzahl);

        let breite: string = prompt("Wie breit sollen sie sein?");
        let breiteNumber: number = parseInt(breite);

        let hoehe: string = prompt("Wie hoch sollen sie sein?");
        let hoeheNumber: number = parseInt(hoehe);

        
        //Eingegebene Zahl für Anzahl muss zwischen 10 und 100 liegen
        if (anzahlNumber >= 10 && anzahlNumber <= 100) {
            for (let i: number = 0; i < anzahlNumber; i++) {
                drawSquare(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", breiteNumber, hoeheNumber);
            }
            }
            else {
                window.alert("Bitte gib eine Anzahl zwischen 10 und 100 ein :)");
                init();
                }
            

        }
    

   

    function drawSquare(_x: number, _y: number, _farbe: string, _breite: number, _hoehe: number): void {
        
        let square: HTMLDivElement = document.createElement("div");
       

        square.style.width = _hoehe.toString();
        square.style.height = _breite.toString();
        square.style.backgroundColor = _farbe;
        square.style.marginLeft = _x.toString();
        square.style.marginTop = _y.toString();
        
        document.body.appendChild(square);
        
    }
}
