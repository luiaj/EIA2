/*
Aufgabe: 5, Skifahrer
Name: Julia Kaiser
Matrikel: 256580
Datum: 17.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Aufgabe5;
(function (Aufgabe5) {
    class SnowFlake {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += Math.random();
        }
        draw() {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 1, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#ffffff";
            Aufgabe5.crc2.fill();
        }
    }
    Aufgabe5.SnowFlake = SnowFlake;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.2.js.map