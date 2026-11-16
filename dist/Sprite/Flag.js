import { imageScaled, WorldMousePos } from "../Framework/Extensions.js";
import { Game } from "../Game/Game.js";
import { StaticSprite } from "./StaticSprite.js";
export class Flag extends StaticSprite {
    constructor(x, y, image) {
        super(x, y);
        this.image = image;
    }
    draw() {
        push();
        if (this.IsBeingHoveredOver())
            tint(224);
        const [relativeX, relativeY] = Game.CurrentScene().GetRelativeCanvasPosition(this.x, this.y);
        imageScaled(this.image, relativeX, relativeY, 4);
        pop();
    }
    IsBeingHoveredOver() {
        const [wMouseX, wMouseY] = WorldMousePos();
        return (wMouseX > this.x && wMouseX < this.x + this.image.width * 4
            && wMouseY > this.y && wMouseY < this.y + this.image.height * 4);
    }
}
