namespace L05_Class {
    export let crc2: CanvasRenderingContext2D;


    let squares: Square[] = [];
    let img: any;
    window.addEventListener("load", init);

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        
        for (let i: number = 0; i < 30; i++) {
                 squares[i] = new Square(200, 100);
                 squares[i].setRandomStyle();
                }
        img = crc2.getImageData(0, 0, 800, 600);
        animate();
    }

    function animate(): void {
        crc2.clearRect(0, 0, 400, 300);
        crc2.putImageData(img, 0, 0);
        
        
        for (let i: number = 0; i < squares.length; i++) {
                    squares[i].update();
                }
        window.setTimeout(animate, 20);
    }
}