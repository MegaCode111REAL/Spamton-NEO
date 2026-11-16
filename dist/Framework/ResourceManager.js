export class ResourceManager {
    static getSprite(resourceName) {
        if (!ResourceManager.sprites.has(resourceName))
            try {
                ResourceManager.sprites.set(resourceName, loadImage(resourceName));
            }
            catch (_a) {
                throw Error(`File not found on filesystem: ${resourceName}`);
            }
        return ResourceManager.sprites.get(resourceName);
    }
    static getFont(resourceName) {
        if (!ResourceManager.fonts.has(resourceName))
            try {
                ResourceManager.fonts.set(resourceName, loadFont(resourceName));
            }
            catch (_a) {
                throw Error(`File not found on filesystem: ${resourceName}`);
            }
        return ResourceManager.fonts.get(resourceName);
    }
    static getSound(resourceName) {
        if (!ResourceManager.sounds.has(resourceName))
            try {
                ResourceManager.sounds.set(resourceName, loadSound(resourceName));
            }
            catch (_a) {
                throw Error(`File not found on filesystem: ${resourceName}`);
            }
        return ResourceManager.sounds.get(resourceName);
    }
    static getLanguage(languageCode) {
        const resourceName = `assets/lang/${languageCode}.json`;
        if (!ResourceManager.langs.has(resourceName))
            try {
                ResourceManager.langs.set(resourceName, loadJSON(resourceName));
            }
            catch (_a) {
                throw Error(`File not found on filesystem: ${resourceName}`);
            }
        return ResourceManager.langs.get(resourceName);
    }
}
ResourceManager.sprites = new Map();
ResourceManager.fonts = new Map();
ResourceManager.sounds = new Map();
ResourceManager.langs = new Map();
