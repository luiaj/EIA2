window.addEventListener("load", init);


function init(): void {
    let  canvas: HTMLCanvasElement = document.getElementsByTagName("canvas") [0];

    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    
    console.log(crc2);
    
//Hintergrund Himmel
    
    crc2.fillStyle = "#a2a2ff";
    crc2.fillRect (0, 0, 800, 600);
    
//Groﬂer Berg
    
    crc2.beginPath();
    crc2.moveTo(0, 600);
    crc2.lineTo(600, 600);
    crc2.lineTo(300, 50);
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