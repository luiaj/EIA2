/*
Aufgabe: 1, Skipiste
Name: Julia Kaiser
Matrikel: 256580
Datum: 11.10.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/



window.addEventListener("load", ski);

//Funktion Canvas


function ski(): void {
    let  canvas: HTMLCanvasElement = document.getElementsByTagName("canvas") [0];

    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    
    console.log(crc2);
    
//Hintergrund Himmel
    
    crc2.fillStyle = "#a2a2ff";
    crc2.fillRect (0, 0, 800, 600);
    

//Großer Berg
    
    crc2.beginPath();
    crc2.moveTo(0, 800);
    crc2.lineTo(500, 800);
    crc2.lineTo(250, 80);
    crc2.closePath();
    crc2.strokeStyle = "#c2c2c2";
    crc2.stroke();
    crc2.fillStyle = "#c2c2c2";
    crc2.fill(); 
    

//Kleiner Berg
    
    crc2.beginPath();
    crc2.moveTo(400, 600);
    crc2.lineTo(800, 600);
    crc2.lineTo(600, 120);
    crc2.closePath();
    crc2.strokeStyle = "#c2c2c2";
    crc2.stroke();
    crc2.fillStyle = "#c2c2c2";
    crc2.fill();
    
//Schneepiste
    
    crc2.fillStyle = "#dfdfdf";
    crc2.fillRect (0, 250, 800, 350);
    
//Hütte
    
    //Fundament
    
    crc2.fillStyle = "#ca6500";
    crc2.fillRect (15, 230, 90, 50);
    
    //Dach
    
    crc2.beginPath();
    crc2.moveTo(10, 230);
    crc2.lineTo(110, 230);
    crc2.lineTo(60, 200);
    crc2.closePath();
    crc2.strokeStyle = "#804000";
    crc2.stroke();
    crc2.fillStyle = "#804000";
    crc2.fill();
    
    //Fenster
    
    crc2.fillStyle = "#a2ffff";
    crc2.fillRect (25, 240, 20, 20);
    
    crc2.beginPath();
    crc2.moveTo(35, 240);
    crc2.lineTo(35, 260);
    crc2.strokeStyle = "#400000";
    crc2.stroke();
    
    crc2.beginPath();
    crc2.moveTo(25, 250);
    crc2.lineTo(45, 250);
    crc2.strokeStyle = "#400000";
    crc2.stroke();
    
    //Türe
    
    crc2.fillStyle = "#400000";
    crc2.fillRect (65, 248, 20, 32);
    
    
    
//Lift1
    
    crc2.beginPath();
    crc2.moveTo(800, 500);
    crc2.lineTo(400, 160);
    crc2.lineTo(400, 250);
    crc2.strokeStyle = "#804000";
    crc2.stroke();
    
//Lift2
    
    crc2.beginPath();
    crc2.moveTo(0, 400);
    crc2.lineTo(200, 200);
    crc2.lineTo(200, 250);
    crc2.strokeStyle = "#804000";
    crc2.stroke();
    
//Sonne
    
    crc2.beginPath();
    crc2.arc(70, 70, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffff02";
    crc2.fill();
    
//Wolke1
    
    crc2.beginPath();
    crc2.arc(720, 70, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(710, 80, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(710, 60, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(695, 55, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(685, 75, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
//Wolke2
    
    crc2.beginPath();
    crc2.arc(500, 120, 10, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(490, 130, 10, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(490, 115, 10, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(480, 125, 10, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
//Schneemann
    
    //Körper
    
    crc2.beginPath();
    crc2.arc(700, 295, 10, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(700, 312, 15, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(700, 335, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    //Nase
    
    crc2.beginPath();
    crc2.moveTo(700, 295);
    crc2.lineTo(695, 300);
    crc2.lineTo(700, 297);
    crc2.closePath();
    crc2.strokeStyle = "#ff8000";
    crc2.stroke();
    crc2.fillStyle = "#ff8000";
    crc2.fill();
    
    //Augen
    
    crc2.beginPath();
    crc2.arc(696, 291, 2, 0, 2 * Math.PI);
    crc2.fillStyle = "#000000";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(704, 291, 2, 0, 2 * Math.PI);
    crc2.fillStyle = "#000000";
    crc2.fill();
    
    //Knöpfe
    
    crc2.beginPath();
    crc2.arc(700, 305, 2, 0, 2 * Math.PI);
    crc2.fillStyle = "#804000";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(700, 310, 2, 0, 2 * Math.PI);
    crc2.fillStyle = "#804000";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(700, 315, 2, 0, 2 * Math.PI);
    crc2.fillStyle = "#804000";
    crc2.fill();
    
    //Arme
    
    crc2.beginPath();
    crc2.moveTo(685, 312);
    crc2.lineTo(670, 310);
    crc2.strokeStyle = "#804000";
    crc2.stroke();
    
    crc2.beginPath();
    crc2.moveTo(715, 312);
    crc2.lineTo(730, 310);
    crc2.strokeStyle = "#804000";
    crc2.stroke();
    
    //Hut
    crc2.beginPath();
    crc2.moveTo(685, 285);
    crc2.lineTo(715, 285);
    crc2.strokeStyle = "#3a3a3a";
    crc2.stroke();
    
    crc2.fillStyle = "#3a3a3a";
    crc2.fillRect (692, 270, 16, 15);
    

    
//Baum1
    
    crc2.beginPath();
    crc2.moveTo(50, 550);
    crc2.lineTo(100, 550);
    crc2.lineTo(75, 450);
    crc2.closePath();
    crc2.strokeStyle = "#006200";
    crc2.stroke();
    crc2.fillStyle = "#006200";
    crc2.fill();
    
 //Baum2
    
    crc2.beginPath();
    crc2.moveTo(130, 400);
    crc2.lineTo(180, 400);
    crc2.lineTo(155, 300);
    crc2.closePath();
    crc2.strokeStyle = "#006200";
    crc2.stroke();
    crc2.fillStyle = "#006200";
    crc2.fill();
    
    
 //Baum3
    
    //Baum2
    
    crc2.beginPath();
    crc2.moveTo(150, 500);
    crc2.lineTo(200, 500);
    crc2.lineTo(175, 420);
    crc2.closePath();
    crc2.strokeStyle = "#006200";
    crc2.stroke();
    crc2.fillStyle = "#006200";
    crc2.fill();

}