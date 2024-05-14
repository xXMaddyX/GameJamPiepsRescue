import Phaser from "phaser";
import {
    KEYS,
    World1Config,
    calcBackPositionX,
} from "./World1Config.js";
import {
    Himmel,
    Wolken,
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
    WaveFront,
    WaveBack,
} from '../assetLoader/AssetLoader.js';


export default class World1 {
    constructor(scene) {
        /**@type {Phaser.Scene} */
        this.scene = scene;
        this.wolkenPool = [];
        this.waveFrontPool = [];
        this.waveBackPool = [];
    };

    static loadSprites(scene) {
        if (!scene.textures.exists(KEYS.KEY_HIMEL)) scene.load.image(KEYS.KEY_HIMEL, Himmel);
        if (!scene.textures.exists(KEYS.KEY_WAVEBACK)) scene.load.image(KEYS.KEY_WAVEBACK, WaveBack);
        if (!scene.textures.exists(KEYS.KEY_WAVEFRONT)) scene.load.image(KEYS.KEY_WAVEFRONT, WaveFront);
        if (!scene.textures.exists(KEYS.KEY_WOLKEN)) scene.load.image(KEYS.KEY_WOLKEN, Wolken);
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
        });

        World1Config.wolkenPosition.forEach(({x, y, key, depth}) => {
            let wolken = this.scene.add.sprite(x, y, key).setDepth(depth);
            this.wolkenPool.push(wolken);
        });
        World1Config.waveFrontPositions.forEach(({x, y, key, depth, scale}) => {
            let waveFront = this.scene.add.sprite(x, y, key).setDepth(depth).setScale(scale);
            this.waveFrontPool.push(waveFront);
        });
        World1Config.waveBackPositions.forEach(({x, y, key, depth, scale}) => {
            let waveBack = this.scene.add.sprite(x, y, key).setDepth(depth).setScale(scale);
            this.waveBackPool.push(waveBack);
        });
        this.initAnimations();
        this.seeweed1 = this.scene.physics.add.sprite(155, 1055 *2, KEYS.KEY_SEAWEED).setPipeline("Light2D").setDepth(1)
        this.seeweed1.anims.play(KEYS.KEY_SEAWEED);

        this.seeweed2 = this.scene.physics.add.sprite(480, 1055 *2, KEYS.KEY_SEAWEED).setPipeline("Light2D").setDepth(1)
        this.seeweed2.anims.play(KEYS.KEY_SEAWEED)

        this.seeweed3 = this.scene.physics.add.sprite(490, 1055 *2, KEYS.KEY_SEAWEED).setPipeline("Light2D").setDepth(1)
        this.seeweed3.anims.play(KEYS.KEY_SEAWEED);
    };

    update(time, delta) {
        this.wolkenPool.forEach(wolken => {
            wolken.x -= .25;
            if (wolken.x < -960) {
                wolken.x = calcBackPositionX(1920 * 2)
            }
        });
        this.waveFrontPool.forEach(wave => {
            wave.x += .25;
            if (wave.x > calcBackPositionX(1920 * 2)) {
                wave.x = calcBackPositionX(-1920)
            }
        });

        this.waveBackPool.forEach(wave => {
            wave.x -= .25;
            if (wave.x < -940) {
                wave.x = calcBackPositionX(1920 * 2)
            }
        });
    };
};