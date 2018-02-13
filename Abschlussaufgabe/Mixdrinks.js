/*
Aufgabe: Abschussarbeit
Name: Julia Kaiser
Matrikel: 256580
Datum: 13.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Abschluss;
(function (Abschluss) {
    class MixDrink extends Abschluss.DrinkArray {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        draw() {
            //Glas
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(this.x, this.y);
            Abschluss.crc2.lineTo(this.x + 40, this.y);
            Abschluss.crc2.lineTo(this.x + 50, this.y - 60);
            Abschluss.crc2.lineTo(this.x - 10, this.y - 60);
            Abschluss.crc2.closePath();
            Abschluss.crc2.strokeStyle = "#e3ffff";
            Abschluss.crc2.stroke();
            Abschluss.crc2.fillStyle = "#e3ffff";
            Abschluss.crc2.fill();
            //F�llung
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(this.x, this.y);
            Abschluss.crc2.lineTo(this.x + 40, this.y);
            Abschluss.crc2.lineTo(this.x + 47, this.y - 40);
            Abschluss.crc2.lineTo(this.x - 6.5, this.y - 40);
            Abschluss.crc2.closePath();
            Abschluss.crc2.strokeStyle = this.color;
            Abschluss.crc2.stroke();
            Abschluss.crc2.fillStyle = this.color;
            Abschluss.crc2.fill();
        }
    }
    Abschluss.MixDrink = MixDrink;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Mixdrinks.js.map