/*
Aufgabe: Abschussarbeit
Name: Julia Kaiser
Matrikel: 256580
Datum: 13.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Abschluss;
(function (Abschluss) {
    class VodkaInfo extends Abschluss.DrinkArray {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        update() {
            this.draw();
        }
        draw() {
            //Deckel
            Abschluss.crc2.fillStyle = "#0000ff";
            Abschluss.crc2.fillRect(this.x, this.y, 25, 40);
            //Hals
            Abschluss.crc2.fillStyle = this.color;
            Abschluss.crc2.fillRect(this.x, this.y + 40, 25, 65);
            //K�rper
            Abschluss.crc2.fillStyle = this.color;
            Abschluss.crc2.fillRect(this.x - 22, this.y + 80, 70, 170);
        }
    }
    Abschluss.VodkaInfo = VodkaInfo;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Vodka.js.map