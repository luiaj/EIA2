/*
Aufgabe: 5, Skifahrer
Name: Julia Kaiser
Matrikel: 256580
Datum: 14.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Aufgabe5;
(function (Aufgabe5) {
    class SkifahrerInfos {
        constructor(_x, _y) {
            this.dx = Math.random() * 8 + 5;
            this.dy = Math.random() * 8 + 10;
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx * 0.2;
            this.y += this.dy * 0.2;
        }
        draw() {
            //Ski
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x, this.y);
            Aufgabe5.crc2.lineTo(this.x + 20, this.y + 10);
            Aufgabe5.crc2.strokeStyle = "#400000";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x, this.y);
            Aufgabe5.crc2.lineTo(this.x + 15, this.y + 15);
            Aufgabe5.crc2.strokeStyle = "#400000";
            Aufgabe5.crc2.stroke();
            //K�rper   
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fillRect(this.x, this.y - 10, 10, 15);
            //Kopf
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 5, this.y - 15, 7, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#ff9f9f";
            Aufgabe5.crc2.fill();
            // M�tze  
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x - 1, this.y - 20);
            Aufgabe5.crc2.lineTo(this.x + 11, this.y - 20);
            Aufgabe5.crc2.lineTo(this.x + 5, this.y - 35);
            Aufgabe5.crc2.closePath();
            Aufgabe5.crc2.strokeStyle = "#ff1313";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = "#ff1313";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 5, this.y - 35, 3, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#ffffff";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.fillStyle = this.color;
        }
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    Aufgabe5.SkifahrerInfos = SkifahrerInfos;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.1.js.map