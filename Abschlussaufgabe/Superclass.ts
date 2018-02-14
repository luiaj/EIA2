/*
Aufgabe: Abschussarbeit
Name: Julia Kaiser
Matrikel: 256580
Datum: 14.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Abschluss {
    
    export class DrinkArray {
        
        x: number;
        y: number;
        color: string;
        
        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            }
        
        update(): void {
            this.draw();
            this.move();
            }
        
        draw(): void {
            //hh
            }
        
        move(): void {
            //hh
        }
    }   
}