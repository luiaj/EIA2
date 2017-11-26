/*
Aufgabe: 6, Skifahrer
Name: Julia Kaiser
Matrikel: 256580
Datum: 22.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Aufgabe6 {

    export class Cloud extends MovingObjects {
        
        constructor (_x: number, _y: number) {
            super(_x, _y);
            }

        move(): void {
            this.x += Math.random();
            
            if (this.x > 800) {
                this.x = 0;
            }

        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 10, this.y + 10, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 10, this.y - 20, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 25, this.y - 25, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 35, this.y + 5, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

        }

    }
}