/*
Aufgabe: Abschlussaufgabe
Name: Julia Kaiser
Matrikel: 256580
Datum: 14.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Abschluss;
(function (Abschluss) {
    class Sternchen extends Abschluss.DrinkArray {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.y += Math.random();
            if (this.y >= 80) {
                this.y = 0;
            }
        }
        draw() {
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(this.x, this.y);
            Abschluss.crc2.lineTo(this.x + 5, this.y - 5);
            Abschluss.crc2.lineTo(this.x + 10, this.y);
            Abschluss.crc2.lineTo(this.x + 10, this.y - 5);
            Abschluss.crc2.lineTo(this.x + 15, this.y - 9.5);
            Abschluss.crc2.lineTo(this.x + 8, this.y - 12);
            Abschluss.crc2.lineTo(this.x + 5, this.y - 17.5);
            Abschluss.crc2.lineTo(this.x + 2, this.y - 12);
            Abschluss.crc2.lineTo(this.x - 5, this.y - 9.5);
            Abschluss.crc2.lineTo(this.x, this.y - 5);
            Abschluss.crc2.closePath();
            Abschluss.crc2.strokeStyle = "yellow";
            Abschluss.crc2.stroke();
            Abschluss.crc2.fillStyle = "yellow";
            Abschluss.crc2.fill();
        }
    }
    Abschluss.Sternchen = Sternchen;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=sternchen.js.map