/*
Aufgabe: 6, Skifahrer
Name: Julia Kaiser
Matrikel: 256580
Datum: 22.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Aufgabe6;
(function (Aufgabe6) {
    class SnowFlake extends Aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y += Math.random();
            if (this.y >= 250) {
                this.y = 0;
            }
        }
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 1, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.SnowFlake = SnowFlake;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Schneeflocken.js.map