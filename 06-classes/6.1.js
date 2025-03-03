class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface() {
        return Math.PI * (this.radius) ** 2;
    }
}

let circle1 = new Circle(0, 0, 3);
console.log(circle1.surface);
circle1.move(10, 5);
circle1.move(-1, -4)
console.log(circle1.xPos, circle1.yPos);

