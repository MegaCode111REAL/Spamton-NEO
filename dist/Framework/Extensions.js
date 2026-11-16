import { Game } from "../Game/Game.js";
// p5.js functions modified for use in the game, and other globally useful custom functions.
export function imageScaled(im, x, y, factor = 1) {
    const adjustedFactor = Game.resolution * factor;
    image(im, x, y, im.width * adjustedFactor, im.height * adjustedFactor);
}
export function rotatedImage(im, x, y, angle) {
    push();
    angleMode(DEGREES);
    let tx = x;
    let ty = y;
    translate(tx, ty);
    rotate(angle);
    translate(-tx, -ty);
    imageScaled(im, x, y);
    pop();
}
export function ToWorld(value) {
    return value / Game.resolution;
}
export function WorldMousePos() {
    return [ToWorld(mouseX), ToWorld(mouseY)];
}
