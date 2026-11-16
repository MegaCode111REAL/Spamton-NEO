import { Keys } from "../Framework/Enumarable/Keys.js";
import { Languages } from "../Framework/Enumarable/Language.js";
import { KeyboardManager } from "../Framework/KeyboardManager.js";
import { MouseManager } from "../Framework/MouseManager.js";
import { ResourceManager } from "../Framework/ResourceManager.js";
import { DummyScene } from "../Scene/DummyScene.js";
export const debug = true;
export class Game {
    constructor() {
        this.eventQueue = [];
        this.language = Languages.ENGLISH;
        this.currentScene = new DummyScene();
        this.frameCount = 1;
        this.eventQueue = [];
    }
    static Update() {
        KeyboardManager.update();
        MouseManager.update();
        Game.instance.nextFrame();
    }
    static GetFrameCount() {
        return Game.instance.frameCount;
    }
    static AddEvent(event) {
        Game.instance.eventQueue.push(event);
    }
    static CurrentScene() {
        return Game.instance.currentScene;
    }
    static ChangeScene(newScene) {
        Game.instance.currentScene = newScene;
        newScene.init();
    }
    static Get() {
        return Game.instance;
    }
    static SetLanguage(language) {
        Game.instance.language = language;
        ResourceManager.getLanguage(Game.instance.language); // Load the correct language's strings from JSON file
    }
    static GetLanguage() {
        return Game.instance.language;
    }
    static Strings() {
        return ResourceManager.getLanguage(Game.instance.language);
    }
    nextFrame() {
        if (KeyboardManager.KeyIsPressed(Keys.MINUS) && Game.resolution > 1) {
            Game.resolution--;
            resizeCanvas(320 * Game.resolution, 240 * Game.resolution);
        }
        else if (KeyboardManager.KeyIsPressed(Keys.EQUALS) && Game.resolution < 5) {
            Game.resolution++;
            resizeCanvas(320 * Game.resolution, 240 * Game.resolution);
        }
        this.currentScene.update();
        this.eventQueue.forEach(event => {
            event.run();
            if (event.IsComplete())
                this.eventQueue.splice(this.eventQueue.indexOf(event), 1);
        });
        this.frameCount++;
    }
}
Game.instance = new Game();
Game.resolution = 1;
