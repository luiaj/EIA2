/*
Aufgabe: 6, Skifahrer
Name: Julia Kaiser
Matrikel: 256580
Datum: 22.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Aufgabe6 {
    window.addEventListener("load", ski);

    export let crc2: CanvasRenderingContext2D;
    
    let objects: MovingObjects[] = [];

    let img: ImageData;
    
    let nSkiers: number = 3;
    let nClouds: number = 2;
    let nSnows: number = 200;

    //Funktion Canvas
    function ski(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        for (let i: number = 0; i < nSkiers; i++) {
            let s: SkifahrerInfos = new SkifahrerInfos(290, 230);
            s.setRandomStyle();
            objects.push(s);
        }

        for (let i: number = 0; i < nSnows; i++) {
            let x: number = 0 + Math.random() * 800;
            let y: number = 0 + Math.random() * 600;
            let s: SnowFlake = new SnowFlake(x, y);
            objects.push(s);
        }

        for (let i: number = 0; i < nClouds; i++) {

            let x: number = 0 + Math.random() * 800;
            let y: number = 0 + Math.random() * 200;
            let s: Cloud = new Cloud(x, y);
            objects.push(s);
        }


        //Hintergrund Himmel

        crc2.fillStyle = "#96ceed";
        crc2.fillRect(0, 0, 800, 600);


        //Großer Berg

        crc2.beginPath();
        crc2.moveTo(-100, 500);
        crc2.lineTo(600, 500);
        crc2.lineTo(250, 80);
        crc2.closePath();
        crc2.strokeStyle = "#c2c2c2";
        crc2.stroke();
        crc2.fillStyle = "#c2c2c2";
        crc2.fill();

        //Bergspitze

        crc2.beginPath();
        crc2.moveTo(209, 127);
        crc2.lineTo(310, 150);
        crc2.lineTo(250, 80);
        crc2.closePath();
        crc2.strokeStyle = "#ffffff";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        //Höhle großer Berg

        crc2.beginPath();
        crc2.arc(300, 250, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#000000";
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

        //Bergspitze

        crc2.beginPath();
        crc2.moveTo(588, 147);
        crc2.lineTo(612, 151);
        crc2.lineTo(600, 120);
        crc2.closePath();
        crc2.strokeStyle = "#ffffff";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        //Schneepiste

        crc2.fillStyle = "#f9f9f9";
        crc2.fillRect(0, 250, 800, 350);

        //Hütte

        //Fundament

        crc2.fillStyle = "#ca6500";
        crc2.fillRect(15, 230, 90, 50);

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
        crc2.fillRect(25, 240, 20, 20);

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
        crc2.fillRect(65, 248, 20, 32);


        //Sonne

        crc2.beginPath();
        crc2.arc(70, 70, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffff02";
        crc2.fill();


        //Schneemann

        // Körper   
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
        crc2.fillRect(692, 270, 16, 15);


        //"Feste Bäume"

        drawTree1(150, 400, "#006200");
        drawTree1(100, 550, "#006200");
        drawTree1(50, 450, "#006200");

        drawTree2(10, 330, "#00bd00");
        drawTree2(170, 450, "#00bd00");


        //For-Schleife Baum 1

        for (let i: number = 0; i < 6; i++) {

            let x: number = 10 + Math.random() * 170;
            let y: number = 380 + Math.random() * 170;

            drawTree1(x, y, "#006200");
        }

        //For Schleife Baum 2

        for (let i: number = 0; i < 8; i++) {

            let x: number = 5 + Math.random() * 200;
            let y: number = 370 + Math.random() * 170;

            drawTree2(x, y, "#00bd00");
        }

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

        //Hintergrund speichern
        img = crc2.getImageData(0, 0, 800, 600);
        
        animate();

    }

    //Funktion für "Baum 2" 
    function drawTree1(_x: number, _y: number, _color: string): void {

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 40, _y);
        crc2.lineTo(_x + 20, _y - 60);
        crc2.closePath();
        crc2.strokeStyle = _color;
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();

    }


    //Funktion für "Baum 2"    
    function drawTree2(_x: number, _y: number, _color: string): void {

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 30, _y);
        crc2.lineTo(_x + 15, _y - 30);
        crc2.closePath();
        crc2.strokeStyle = _color;
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();

    }

    //Funktion für Animation   
    function animate(): void {
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(img, 0, 0);
        
        for (let i: number = 0; i < objects.length; i++) {
            
            let s: MovingObjects = objects[i];
            s.update();
            }

        //Schneeflocken animieren

//        for (let i: number = 0; i < snowFlakes.length; i++) {
//            snowFlakes[i].update();
//            
       // }

        //Wolken animieren

//        for (let i: number = 0; i < clouds.length; i++) {
//
//            clouds[i].update();
//            
        //}

        //Skifahrer animieren  
//        for (let i: number = 0; i < fahrer.length; i++) {
//
//            fahrer[i].update();
           
       // }

        window.setTimeout(animate, 20);
    }
}