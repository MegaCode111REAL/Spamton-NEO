export class MouseManager {
    static update() {
        // This function should be called at the beginning of each loop to ensure it tracks keys properly
        MouseManager.previousPos = MouseManager.currentPos;
        MouseManager.currentPos = [mouseX, mouseY];
        if (!MouseManager.previouslyHeld && MouseManager.currentPos)
            MouseManager.pressLocation = [mouseX, mouseY];
        else if (MouseManager.previouslyHeld && !MouseManager.currentlyHeld)
            MouseManager.releaseLocation = [mouseX, mouseY];
        MouseManager.previouslyHeld = MouseManager.currentlyHeld;
        MouseManager.currentlyHeld = mouseIsPressed;
    }
    static MouseIsDown() {
        return MouseManager.currentlyHeld;
    }
    static MousePressed() {
        return !MouseManager.previouslyHeld && MouseManager.currentlyHeld;
    }
    static MouseReleased() {
        return MouseManager.previouslyHeld && !MouseManager.currentlyHeld;
    }
    static PressLocation() {
        return MouseManager.pressLocation;
    }
    static ReleaseLocation() {
        return MouseManager.releaseLocation;
    }
}
MouseManager.previousPos = [];
MouseManager.currentPos = [];
MouseManager.previouslyHeld = false;
MouseManager.currentlyHeld = false;
MouseManager.pressLocation = [];
MouseManager.releaseLocation = [];
