/*
Aufgabe: 6, Skifahrer
Name: Julia Kaiser
Matrikel: 256580
Datum: 22.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Aufgabe6;
(function (Aufgabe6) {
    class Cloud extends Aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.x += Math.random();
            if (this.x > 800) {
                this.x = 0;
            }
        }
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 10, this.y + 10, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 10, this.y - 20, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 25, this.y - 25, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 35, this.y + 5, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.Cloud = Cloud;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Wolken.js.map