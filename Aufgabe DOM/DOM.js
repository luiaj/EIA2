/*
Aufgabe: 7, DOM
Name: Julia Kaiser
Matrikel: 256580
Datum: 07.12.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var L07_DOM;
(function (L07_DOM) {
    window.addEventListener("load", init);
    function init() {
        //Fenster zum eingeben der Daten
        let anzahl = prompt("Wie viele Quadrate moechtest du sehen?");
        let anzahlNumber = parseInt(anzahl);
        let breite = prompt("Wie breit sollen sie sein?");
        let hoehe = prompt("Wie hoch sollen sie sein?");
        //Eingegebene Zahl f�r Anzahl muss zwischen 10 und 100 liegen
        if (anzahlNumber >= 10 && anzahlNumber <= 100) {
            for (let i = 0; i < anzahlNumber; i++) {
                drawSquare(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", breite, hoehe);
            }
        }
        else {
            window.alert("Bitte gib eine Anzahl zwischen 10 und 100 ein :)");
            init();
        }
    }
    function drawSquare(_x, _y, _farbe, _breite, _hoehe) {
        let square = document.createElement("div");
        square.style.width = _hoehe;
        square.style.height = _breite;
        square.style.backgroundColor = _farbe;
        square.style.marginLeft = _x.toString();
        square.style.marginTop = _y.toString();
        document.body.appendChild(square);
    }
})(L07_DOM || (L07_DOM = {}));
//# sourceMappingURL=DOM.js.map