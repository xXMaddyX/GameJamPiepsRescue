import Phaser from "phaser";
import Player from "../player/Player";
import { KEYS } from "./collectablesConfig";
import {
    Chest1,
    Chest1N,
} from '../assetLoader/AssetLoader.js';

export default class Collectables {
    constructor(scene, player) {
        /**@type {Phaser.Scene} */
        this.scene = scene;
        /**@type {Player} */
        this.player = player;
        this.isCollected = false;
    };

    static loadSprites(scene) {
        if(!scene.textures.exists(KEYS.KEY_SCHATZTRUE)) scene.load.spritesheet(KEYS.KEY_SCHATZTRUE, [Chest1, Chest1N], {
            frameWidth: 48, frameHeight: 31
        });
    };

    intitAnimations({animKey, startFrame, endFrame, frameRate, repeat}) {
        this.animkey = animKey;
        console.log(animKey, startFrame, endFrame, frameRate, repeat)
        if (!this.scene.anims.exists(this.animkey)) {
            this.scene.anims.create({
                key: animKey,
                frames: this.scene.anims.generateFrameNumbers(this.animkey, {
                    start: startFrame,
                    end: endFrame,
                }),
                frameRate: frameRate,
                repeat: repeat
            });
        };
    };

    create({x, y, itemKey, depth, scale}, animConfig) {
        this.item = this.scene.physics.add.sprite(x, y, itemKey).setPipeline("Light2D")
        .setPipeline("Light2D")
        .setDepth(depth)
        .setScale(scale);

        //Anim Config
        this.intitAnimations(animConfig)
        this.item.anims.play(this.animkey)

        //Handler for ItemGrab
        this.scene.events.on("takeItem", () => {
            this.setCollectedStatus();
        });
    };

    setItemToPlayer() {
        this.item.x = this.player.ubootGreifer.kran.x;
        this.item.y = this.player.ubootGreifer.kran.y + 70;
    };

    setCollectedStatus() {
        this.isCollected = true;
    };

    update(time, delta) {
        if (this.item && this.item.body) {
            if (this.isCollected) {
                this.setItemToPlayer();
            };
        };
    };
};