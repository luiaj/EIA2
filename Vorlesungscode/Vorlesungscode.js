var L05_Class;
(function (L05_Class) {
    let squares = [];
    let img;
    window.addEventListener("load", init);
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L05_Class.crc2 = canvas.getContext("2d");
        console.log(L05_Class.crc2);
        for (let i = 0; i < 30; i++) {
            squares[i] = new L05_Class.Square(200, 100);
            squares[i].setRandomStyle();
        }
        img = L05_Class.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function animate() {
        L05_Class.crc2.clearRect(0, 0, 400, 300);
        L05_Class.crc2.putImageData(img, 0, 0);
        for (let i = 0; i < squares.length; i++) {
            squares[i].update();
        }
        window.setTimeout(animate, 20);
    }
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=Vorlesungscode.js.map