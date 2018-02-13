/*
Aufgabe: Abschussarbeit
Name: Julia Kaiser
Matrikel: 256580
Datum: 13.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Abschluss;
(function (Abschluss) {
    class GinInfo extends Abschluss.DrinkArray {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        update() {
            this.draw();
        }
        draw() {
            //Deckel
            Abschluss.crc2.fillStyle = "#111111";
            Abschluss.crc2.fillRect(this.x, this.y, 30, 50);
            //Hals
            Abschluss.crc2.fillStyle = this.color;
            Abschluss.crc2.fillRect(this.x, this.y + 30, 30, 50);
            //K�rper
            Abschluss.crc2.fillStyle = this.color;
            Abschluss.crc2.fillRect(this.x - 20, this.y + 80, 70, 170);
        }
    }
    Abschluss.GinInfo = GinInfo;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Gin.js.map