import { Game } from "../Game/Game.js";
export class Sprite {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    screenPosition() {
        return Game.CurrentScene().GetRelativeCanvasPosition(this.x, this.y);
    }
}
