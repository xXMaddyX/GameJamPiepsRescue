import Phaser from "phaser";
import {
    KEYS,
    World1Config,
} from "./World1Config.js";
import {
    Himmel,
    Boden,
    BodenN,
    SurfaceSea,
    SurfaceSeaN,
    MiddelSea,
    MiddelSeaN,
    DeepSea,
    DeepSeaN,
    ExtreamDeepSea,
    ExtreamDeepSeaN,
    SeaWeed,
    SeaWeedN,
} from '../assetLoader/AssetLoader.js';


export default class World1 {
    constructor(scene) {
        /**@type {Phaser.Scene} */
        this.scene = scene;
    };

    static loadSprites(scene) {
        if (!scene.textures.exists(KEYS.KEY_HIMEL)) scene.load.image(KEYS.KEY_HIMEL, Himmel);
        if (!scene.textures.exists(KEYS.KEY_BODEN)) scene.load.image(KEYS.KEY_BODEN, [Boden, BodenN]);
        if (!scene.textures.exists(KEYS.KEY_SURFACESEA)) scene.load.image(KEYS.KEY_SURFACESEA, [SurfaceSea, SurfaceSeaN]);
        if (!scene.textures.exists(KEYS.KEY_MIDDLESEA)) scene.load.image(KEYS.KEY_MIDDLESEA, [MiddelSea, MiddelSeaN]);
        if (!scene.textures.exists(KEYS.KEY_DEEPSEA)) scene.load.image(KEYS.KEY_DEEPSEA, [DeepSea, DeepSeaN]);
        if (!scene.textures.exists(KEYS.KEY_EXTREAMDEEPSEA)) scene.load.image(KEYS.KEY_EXTREAMDEEPSEA, [ExtreamDeepSea, ExtreamDeepSeaN]);
        if (!scene.textures.exists(KEYS.KEY_SEAWEED)) scene.load.spritesheet(KEYS.KEY_SEAWEED, [SeaWeed, SeaWeedN], {
            frameWidth: 42, frameHeight: 99
        })
    };

    initAnimations () {
        this.scene.anims.create({
            key: KEYS.KEY_SEAWEED,
            frames: this.scene.anims.generateFrameNumbers(KEYS.KEY_SEAWEED, {
                start:0,
                end: 3
            }),
            frameRate: 5,
            repeat: -1
        })
    };

    create() {
        World1Config.backgroundPositions.forEach(({x, y, key, alpha, depth}) => {
            let image = this.scene.add.sprite(x, y, key).setPipeline("Light2D").setAlpha(alpha).setDepth(depth);
        });

        World1Config.groundPositions.forEach(({x, y, key}) => {
            let ground = this.scene.physics.add.sprite(x, y, key).setPipeline("Light2D");
        })
        this.initAnimations()
        this.seeweed1 = this.scene.physics.add.sprite(155, 1055 *2, KEYS.KEY_SEAWEED).setPipeline("Light2D").setDepth(1)
        this.seeweed1.anims.play(KEYS.KEY_SEAWEED);

        this.seeweed2 = this.scene.physics.add.sprite(480, 1055 *2, KEYS.KEY_SEAWEED).setPipeline("Light2D").setDepth(1)
        this.seeweed2.anims.play(KEYS.KEY_SEAWEED)

        this.seeweed3 = this.scene.physics.add.sprite(490, 1055 *2, KEYS.KEY_SEAWEED).setPipeline("Light2D").setDepth(1)
        this.seeweed3.anims.play(KEYS.KEY_SEAWEED);
    };

    update(time, delta) {};
};