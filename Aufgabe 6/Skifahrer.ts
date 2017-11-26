/*
Aufgabe: 6, Skifahrer
Name: Julia Kaiser
Matrikel: 256580
Datum: 22.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Aufgabe6 {

        export class SkifahrerInfos extends MovingObjects {
            
            
            dx: number = Math.random() * 8 + 5;
            dy: number = Math.random() * 8 + 10;
            color: string;
            
            
            
            constructor (_x: number, _y: number) {
            super(_x, _y);
            }
      
            
            update(): void {
                this.move();
                this.draw();
                }
            
            move(): void {
                this.x += this.dx * 0.2;
                this.y += this.dy * 0.2;
                
                if (this.x > 800, this.y > 650) {              
                this.x = 290;
                this.y = 230;            }
                }
            
            draw(): void {
                
            //Ski
        
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 20, this.y + 10);
            crc2.strokeStyle = "#400000";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 15, this.y + 15);
            crc2.strokeStyle = "#400000";
            crc2.stroke();

            //Körper   
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y - 10, 10, 15);

            //Kopf
            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 15, 7, 0, 2 * Math.PI);
            crc2.fillStyle = "#ff9f9f";
            crc2.fill();            

            // Mütze  
            crc2.beginPath();
            crc2.moveTo(this.x - 1, this.y - 20);
            crc2.lineTo(this.x + 11, this.y - 20);
            crc2.lineTo(this.x + 5, this.y - 35);
            crc2.closePath();
            crc2.strokeStyle = "#ff1313";
            crc2.stroke();
            crc2.fillStyle = "#ff1313";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 35, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.fillStyle = this.color;
                }
            
            setRandomStyle(): void {
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                
                }
    }
}