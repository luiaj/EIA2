/*
Aufgabe: Abschlussaufgabe
Name: Julia Kaiser
Matrikel: 256580
Datum: 14.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Abschluss {

    export class SternchenInfo extends DrinkArray {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }

        move(): void {
            this.y += Math.random();

            if (this.y >= 80) {
                this.y = 0;
            }

        }

        draw(): void {
            
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 5, this.y - 5);
            crc2.lineTo(this.x + 10, this.y);
            crc2.lineTo(this.x + 10, this.y - 5);
            crc2.lineTo(this.x + 15, this.y - 9.5);
            crc2.lineTo(this.x + 8, this.y - 12);
            crc2.lineTo(this.x + 5, this.y - 17.5);
            crc2.lineTo(this.x + 2, this.y - 12);
            crc2.lineTo(this.x - 5, this.y - 9.5);
            crc2.lineTo(this.x, this.y - 5);
            crc2.closePath();
            crc2.strokeStyle = "yellow";
            crc2.stroke();
            crc2.fillStyle = "yellow";
            crc2.fill();
        }

    }
}