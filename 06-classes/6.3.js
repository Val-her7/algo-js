import { Rectangle } from "./6.2.js";

let rectangles = [];

for (let i = 0; i < 1000; i++) {
    let topX = Math.ceil(Math.random() * 1000);
    let topY = Math.ceil(Math.random() * 1000);
    let width = Math.ceil(Math.random() * 10);
    let length = Math.ceil(Math.random() * 10);
    let rect = new Rectangle(topX, topY, width, length);
    rectangles.push(rect);
}
for (let i = 0; i < rectangles.length; i++) {
    for (let j = 0; j < rectangles.length; j++) {
        if (i !== j) {
            if (rectangles[i].collides(rectangles[j])) {
                console.log(`rect${i + 1}(${rectangles[i].topLeftXPos}, ${rectangles[i].topLeftYPos},${rectangles[i].width}, ${rectangles[i].length}) collides rect${j + 1}(${rectangles[j].topLeftXPos}, ${rectangles[j].topLeftYPos},${rectangles[j].width}, ${rectangles[j].length})`);
            }
        }
    }
}

