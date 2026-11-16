export class GameEvent {
    constructor(condition, payload) {
        this.condition = condition;
        this.payload = payload;
        this.complete = false;
    }
    run() {
        if (this.condition() && !this.complete) {
            this.payload();
            this.complete = true;
        }
    }
    IsComplete() {
        return this.complete;
    }
}
