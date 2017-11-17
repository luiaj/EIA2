/*
Aufgabe: 5, Skifahrer
Name: Julia Kaiser
Matrikel: 256580
Datum: 17.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Aufgabe5;
(function (Aufgabe5) {
    class Cloud {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += Math.random();
        }
        draw() {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#ffffff";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 10, this.y + 10, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#ffffff";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 10, this.y - 20, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#ffffff";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 25, this.y - 25, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#ffffff";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 35, this.y + 5, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#ffffff";
            Aufgabe5.crc2.fill();
        }
    }
    Aufgabe5.Cloud = Cloud;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.3.js.map