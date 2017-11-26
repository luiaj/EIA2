/*
Aufgabe: 6, Skifahrer
Name: Julia Kaiser
Matrikel: 256580
Datum: 22.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Aufgabe6 {

    export class SnowFlake extends MovingObjects {
        
        constructor (_x: number, _y: number) {
            super(_x, _y);
            }

        move(): void {
                this.y += Math.random();
            
                if (this.y >= 250) {
                    this.y = 0;
                }

        }

        draw(): void {      
                crc2.beginPath();
                crc2.arc(this.x, this.y, 1, 0, 2 * Math.PI);
                crc2.fillStyle = "#ffffff";
                crc2.fill();
                }
            

    }
}
