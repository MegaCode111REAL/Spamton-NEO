import { Camera } from "../Framework/Camera.js";
import { Game } from "../Game/Game.js";
export class Scene {
    constructor() {
        this.camera = new Camera();
    }
    GetPositionRelativeToCamera(x, y) {
        return [x - this.camera.x, y - this.camera.y];
    }
    GetCanvasPosition(x, y) {
        return [x * Game.resolution, y * Game.resolution];
    }
    GetRelativeCanvasPosition(x, y) {
        return this.GetCanvasPosition(...this.GetPositionRelativeToCamera(x, y));
    }
}
