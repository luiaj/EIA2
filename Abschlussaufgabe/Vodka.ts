/*
Aufgabe: Abschussarbeit
Name: Julia Kaiser
Matrikel: 256580
Datum: 13.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Abschluss {
    
    export class VodkaInfo extends DrinkArray {
        
        constructor (_x: number, _y: number, _color: string) {
            super(_x, _y, _color);           
        }
        
        update(): void {           
            this.draw();           
        }
        
        draw(): void {
            
            //Deckel
            
            crc2.fillStyle = "#0000ff";
            crc2.fillRect(this.x, this.y, 25, 40);
            
            //Hals
            
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y + 40, 25, 65);
            
            //Körper
            
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x - 22, this.y + 80, 70, 170);
            
      
        }
 
    }


}