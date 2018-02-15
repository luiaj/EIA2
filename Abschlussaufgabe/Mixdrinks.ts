/*
Aufgabe: Abschlussarbeit
Name: Julia Kaiser
Matrikel: 256580
Datum: 14.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Abschluss {
    
    export class MixDrink extends DrinkArray {
        
        color: string;
        
        
        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);  
        }
        
    
        draw(): void {
            
            //Glas
            
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 40, this.y);
            crc2.lineTo(this.x + 50, this.y - 60);
            crc2.lineTo(this.x - 10, this.y - 60);
            crc2.closePath();
            crc2.strokeStyle = "#e3ffff";
            crc2.stroke();
            crc2.fillStyle = "#e3ffff";
            crc2.fill();
            
            //Füllung
            
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 40, this.y);
            crc2.lineTo(this.x + 47, this.y - 40);
            crc2.lineTo(this.x - 6.5, this.y - 40);
            crc2.closePath();
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill(); 
    }
 }
}