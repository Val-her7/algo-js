 export class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if (
            this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            this.topLeftYPos + this.length > otherRectangle.topLeftYPos
          ) {
            return true;
          } else {
            return false;
          }
    }
}

let rect1 = new Rectangle(1,1,1,1);
let rect2 = new Rectangle(1,1,2,2);
let rect3 = new Rectangle(2,1,2,3);
let rect4 = new Rectangle(4,0,3,2);
// console.log(rect1.collides(rect2));
// console.log(rect3.collides(rect4));

