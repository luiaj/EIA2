/*
Aufgabe: Abschlussarbeit
Name: Julia Kaiser
Matrikel: 256580
Datum: 14.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Abschluss {
    
    export class GinInfo extends DrinkArray {
        
        constructor (_x: number, _y: number, _color: string) {
            super(_x, _y, _color);           
        }
        
        update(): void {           
            this.draw();           
        }
        
        draw(): void {
            
            //Deckel
            
            crc2.fillStyle = "#111111";
            crc2.fillRect(this.x, this.y, 30, 50);
            
            //Hals
            
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y + 30, 30, 50);
            
            //Körper
            
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x - 20, this.y + 80, 70, 170);
  
        } 
    }
}