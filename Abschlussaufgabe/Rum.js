/*
Aufgabe: Abschussarbeit
Name: Julia Kaiser
Matrikel: 256580
Datum: 14.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Abschluss;
(function (Abschluss) {
    class RumInfo extends Abschluss.DrinkArray {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        update() {
            this.draw();
        }
        draw() {
            //Deckel
            Abschluss.crc2.fillStyle = "#800000";
            Abschluss.crc2.fillRect(this.x, this.y, 25, 40);
            //Hals
            Abschluss.crc2.fillStyle = this.color;
            Abschluss.crc2.fillRect(this.x, this.y + 40, 25, 70);
            //K�rper
            Abschluss.crc2.fillStyle = this.color;
            Abschluss.crc2.fillRect(this.x - 27.5, this.y + 110, 80, 142.5);
        }
    }
    Abschluss.RumInfo = RumInfo;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Rum.js.map