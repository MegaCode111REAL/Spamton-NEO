import { Sketch } from "./Sketch/Sketch.js";
window.preload = function () {
    Sketch.preload();
};
window.setup = function () {
    Sketch.setup();
};
window.draw = function () {
    Sketch.draw();
};
window.keyPressed = function () {
    // const fs = fullscreen();
    // if (keyCode === Keys.F4)
    // {
    //     fullscreen(!fs);
    // }
    // Game.resolution = 2 + (2 * +true);
    // resizeCanvas(320 * Game.resolution, 240 * Game.resolution);
};
