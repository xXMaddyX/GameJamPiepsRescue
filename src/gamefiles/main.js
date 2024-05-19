import Phaser from "phaser";
import SceneLvL1 from "./scenes/MainMap";
import TitelScene from "./scenes/TitleScreen";

export default new Phaser.Game({
    type: Phaser.WEBGL,
    pixelArt: true,
    scale: {
        mode: Phaser.DOM.RESIZE,
        width: 1920,
        height: 1080,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: -200,
            //debug: true,
        },
    },
    scene: [
        new TitelScene(this),
        new SceneLvL1(this)
    ]
});