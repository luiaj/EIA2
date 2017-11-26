/*
Aufgabe: 6, Skifahrer
Name: Julia Kaiser
Matrikel: 256580
Datum: 22.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Aufgabe6 {

        export class MovingObjects {
            
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

            }

            draw(): void {

            }

            setRandomStyle(): void {

            }
    }
}