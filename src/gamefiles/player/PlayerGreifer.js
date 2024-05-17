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
const KEY_GREIFER_UP_IDLE = "GreiferUpIdle";
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
        this.isIdle = true;
        this.isDown = false;
        this.isUp = false;
    }

    static loadSprites(scene) {
        if (!scene.textures.exists(KEY_GREIFER_MOVING)) scene.load.spritesheet(KEY_GREIFER_MOVING, [GreiferDownAnim, GreiferDownAnimN], {
            frameWidth: 45, frameHeight: 107,
        });
        if (!scene.textures.exists(KEY_GREIFER_OPEN_CLOSE)) scene.load.spritesheet(KEY_GREIFER_OPEN_CLOSE, [GreiferOpen, GreiferOpenN], {
            frameWidth: 45, frameHeight: 107,
        });
    };

    initAnimations() {
        if (!this.scene.anims.exists(KEY_GREIFER_UP_IDLE)) {
            this.scene.anims.create({
                key: KEY_GREIFER_UP_IDLE,
                frames: this.scene.anims.generateFrameNumbers(KEY_GREIFER_MOVING, {
                    start: 0,
                    end: 0,
                }),
                frameRate: 0,
                repeat: -1
            });
        };
        if (!this.scene.anims.exists(KEY_GREIFER_ANIM_DOWN)) {
            this.scene.anims.create({
                key: KEY_GREIFER_ANIM_DOWN,
                frames: this.scene.anims.generateFrameNumbers(KEY_GREIFER_MOVING, {
                    start: 0,
                    end: 4,
                }),
                frameRate: 5,
                repeat: 0,
            });
        };
        if (!this.scene.anims.exists(KEY_GREIFER_ANIM_UP)) {
            this.scene.anims.create({
                key: KEY_GREIFER_ANIM_UP,
                frames: this.scene.anims.generateFrameNumbers(KEY_GREIFER_MOVING, {
                    start: 4,
                    end: 0,
                }),
                frameRate: 5,
                repeat: 0,
            });
        };
    };

    matchWithPlayerPos() {
        this.kran.x = this.player.uboot.x;
        this.kran.y = this.player.uboot.y + 120;
    };

    create(x, y) {
        this.initAnimations();
        this.kran = this.scene.physics.add.sprite(x, y, null).setPipeline("Light2D").setDepth(0).setScale(2);
        this.kran.setVisible(true)
    };

    animationHandler(newAnimation) {
        if (newAnimation === this.currentAnim) return;
        switch(newAnimation) {
            case KEY_GREIFER_UP_IDLE:
                this.kran.anims.play(KEY_GREIFER_UP_IDLE);
                break;
            case KEY_GREIFER_ANIM_DOWN:
                this.kran.anims.play(KEY_GREIFER_ANIM_DOWN);
                break;
            case KEY_GREIFER_ANIM_UP:
                this.kran.anims.play(KEY_GREIFER_ANIM_UP);
                break;
        }
        this.currentAnim = newAnimation;
    };

    greiferControls() {
        if (this.player.ButtonS.isDown) {
            this.isUp = false;
            this.isDown = true;
            this.isIdle = false;
        }
        if (this.player.ButtonW.isDown) {
            this.isUp = true;
            this.isDown = false;
            this.isIdle = false;
        }
    }

    update(time, delta) {
        if (this.kran && this.kran.body) {
            this.matchWithPlayerPos();
            this.greiferControls();
            if (this.isIdle) {
                this.animationHandler(KEY_GREIFER_UP_IDLE);
            }
            if (this.isDown) {
                this.animationHandler(KEY_GREIFER_ANIM_DOWN);
            }
            if (this.isUp) {
                this.animationHandler(KEY_GREIFER_ANIM_UP);
            }
        }
    };
};