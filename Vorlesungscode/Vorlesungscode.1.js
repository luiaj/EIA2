var L05_Class;
(function (L05_Class) {
    class Square {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        sayHello() {
            console.log("Hallo");
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        draw() {
            L05_Class.crc2.fillStyle = this.color;
            L05_Class.crc2.fillRect(this.x, this.y, this.size, this.size);
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    L05_Class.Square = Square;
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=Vorlesungscode.1.js.map