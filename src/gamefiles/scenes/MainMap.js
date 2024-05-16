import Phaser from "phaser";
import World1 from "../worlds/World1";
import Player from "../player/Player";
import Collectables from "../collectables/collectables";

import { 
    TrueConfig,
    TruePositions,
} from "../collectables/collectablesConfig";

const KEY_UBOOT = "Uboot";

export default class SceneLvL1 extends Phaser.Scene {
    constructor() {
        super("SceneLvL1");
        this.sceneWidth = 3840;
        this.sceneHeight = 2160;
    }

    initScene() {
        this.timer = 0;
        this.currentColor = { r: 204, g: 204, b: 204 };
    }

    preload() {
        // Load World Sprites
        World1.loadSprites(this);
        Player.loadSprites(this);
        Collectables.loadSprites(this);
    }

    deepHandler() {
        let ubootY = this.player.uboot.y;
        let targetColor;

        if (ubootY > 1100 && ubootY < 1500) {
            targetColor = { r: 170, g: 170, b: 170 }; // 0xaaaaaa
        } else if (ubootY > 1500 && ubootY < 3000) {
            targetColor = { r: 102, g: 102, b: 102 }; // 0x666666
        } else if (ubootY <= 1100) {
            targetColor = { r: 204, g: 204, b: 204 }; // 0xcccccc
        };

        if (targetColor && (targetColor.r !== this.currentColor.r || targetColor.g !== this.currentColor.g || targetColor.b !== this.currentColor.b)) {
            this.tweens.add({
                targets: this.currentColor,
                r: targetColor.r,
                g: targetColor.g,
                b: targetColor.b,
                duration: 1000,
                onUpdate: () => {
                    this.lights.setAmbientColor(Phaser.Display.Color.GetColor(this.currentColor.r, this.currentColor.g, this.currentColor.b));
                }
            });
        };
    };

    createChests() {
        TruePositions.forEach(chest => {
            let item = new Collectables(this, this.player);
            item.create(chest, TrueConfig)
        });
    };

    create() {
        this.physics.world.setBounds(0, 0, this.sceneWidth, this.sceneHeight);
        this.lights.enable();
        this.lights.setAmbientColor(0xcccccc);

        this.world = new World1(this);
        this.world.create();

        Player.initAnimations(this);
        this.player = new Player(this);
        this.player.create(200, 530);
        this.player.setFollowCamera(this.sceneWidth, this.sceneHeight);

        this.createChests();
        this.initScene();
    };

    update(time, delta) {
        this.player.update(time, delta);
        this.world.update(time, delta);
        this.deepHandler();
    };
};
