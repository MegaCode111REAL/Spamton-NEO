import { Game } from "../Game/Game.js";
import { Languages } from "./Enumarable/Language.js";
import { ResourceManager } from "./ResourceManager.js";
export class Text {
    static Draw(str, x, y) {
        push();
        Text.SetFontProperties();
        text(str, x, y);
        pop();
    }
    static SetFontProperties() {
        textFont(ResourceManager.getFont(Text.GetCurrentFont()));
        textAlign(LEFT, TOP);
        textSize(14 * Game.resolution);
        fill(255);
    }
    static GetCurrentFont() {
        const extension = (Game.GetLanguage() === Languages.ENGLISH) ? "otf" : "woff";
        return `assets/font/${Game.GetLanguage()}_main.${extension}`;
    }
    static GetWidth(str) {
        let size;
        push();
        Text.SetFontProperties();
        size = textWidth(str);
        pop();
        return size;
    }
}
