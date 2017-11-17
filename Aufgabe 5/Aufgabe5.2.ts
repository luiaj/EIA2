/*
Aufgabe: 5, Skifahrer
Name: Julia Kaiser
Matrikel: 256580
Datum: 17.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Aufgabe5 {

    export class SnowFlake {

        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
                this.y += Math.random();

        }

        draw(): void {      
                crc2.beginPath();
                crc2.arc(this.x, this.y, 1, 0, 2 * Math.PI);
                crc2.fillStyle = "#ffffff";
                crc2.fill();
                }
            

    }
}
