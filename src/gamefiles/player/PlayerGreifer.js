import Phaser from "phaser";
import Player from "./Player";
import { 
    GreiferDownAnim,
    GreiferDownAnimN,
    GreiferOpen,
    GreiferOpenN 
} from "../assetLoader/AssetLoader";

//SPRITESHEET KEYS
const KEY_GREIFER_MOVING = "GreiferMove";
const KEY_GREIFER_OPEN_CLOSE = "GreiferOpenClose";

//ANIM KEYS
const KEY_GREIFER_ANIM_DOWN = "GreiferDown";
const KEY_GREIFER_ANIM_UP = "GreiferUp";
const KEY_GREIFER_OPEN = "GreiferOpen";
const KEY_GREIFER_CLOSED = "GreiferClosed";

export default class PlayerGreifer {
    constructor(scene, player) {
        /**@type {Phaser.Scene} */
        this.scene = scene;
        /**@type {Player} */
        this.player = player;
    }

    loadSprites() {
        if (!this.scene.textures.exists(KEY_GREIFER_MOVING)) this.scene.load.spritesheet(KEY_GREIFER_MOVING, [GreiferDownAnim, GreiferDownAnimN], {
            frameWidth: 45, frameHeight: 107,
        });
        if (!this.scene.textures.exists(KEY_GREIFER_OPEN_CLOSE)) this.scene.load.spritesheet(KEY_GREIFER_OPEN_CLOSE, [GreiferOpen, GreiferOpenN], {
            frameWidth: 45, frameHeight: 107,
        });
    };

    initAnimations() {
        //TODO
    };

    create(x, y) {
        this.kran = this.scene.physics.add.sprite(x, y, null);
    };

    update(time, delta) {

    };
};