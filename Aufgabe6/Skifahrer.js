/*
Aufgabe: 6, Skifahrer
Name: Julia Kaiser
Matrikel: 256580
Datum: 22.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Aufgabe6;
(function (Aufgabe6) {
    class SkifahrerInfos extends Aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.dx = Math.random() * 8 + 5;
            this.dy = Math.random() * 8 + 10;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx * 0.2;
            this.y += this.dy * 0.2;
            if (this.x > 800, this.y > 650) {
                this.x = 290;
                this.y = 230;
            }
        }
        draw() {
            //Ski
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x, this.y);
            Aufgabe6.crc2.lineTo(this.x + 20, this.y + 10);
            Aufgabe6.crc2.strokeStyle = "#400000";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x, this.y);
            Aufgabe6.crc2.lineTo(this.x + 15, this.y + 15);
            Aufgabe6.crc2.strokeStyle = "#400000";
            Aufgabe6.crc2.stroke();
            //K�rper   
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fillRect(this.x, this.y - 10, 10, 15);
            //Kopf
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 5, this.y - 15, 7, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#ff9f9f";
            Aufgabe6.crc2.fill();
            // M�tze  
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x - 1, this.y - 20);
            Aufgabe6.crc2.lineTo(this.x + 11, this.y - 20);
            Aufgabe6.crc2.lineTo(this.x + 5, this.y - 35);
            Aufgabe6.crc2.closePath();
            Aufgabe6.crc2.strokeStyle = "#ff1313";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = "#ff1313";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 5, this.y - 35, 3, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.fillStyle = this.color;
        }
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    Aufgabe6.SkifahrerInfos = SkifahrerInfos;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Skifahrer.js.map