import { imageScaled } from "../Framework/Extensions.js";
import { ResourceManager } from "../Framework/ResourceManager.js";
import { Game } from "../Game/Game.js";
import { StaticSprite } from "./StaticSprite.js";
export class Background extends StaticSprite {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 40;
    }
    static draw() {
        const [relativeX, relativeY] = Game.CurrentScene().GetRelativeCanvasPosition(0, 40);
        imageScaled(ResourceManager.getSprite("assets/spr/basement.png"), relativeX, relativeY);
    }
}
