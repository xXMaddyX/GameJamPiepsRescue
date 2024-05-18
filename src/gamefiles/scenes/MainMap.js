import Phaser from "phaser";
import World1 from "../worlds/World1";
import Player from "../player/Player";
import Collectables from "../collectables/collectables";
import BaseShipClass from "../BaseShip/BaseShip";

import { 
    TrueConfig,
    TruePositions,
} from "../collectables/collectablesConfig";
import FuscheBuntClass from "../envAnimals/fischeBunt";
import FischSchwarmClass from "../envAnimals/fischSchwarm";

export default class SceneLvL1 extends Phaser.Scene {
    constructor() {
        super("SceneLvL1");
        this.sceneWidth = 3840;
        this.sceneHeight = 3240;
        this.itemPool = [];
        this.colliderPool = [];
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
        BaseShipClass.loadSprites(this);
        FuscheBuntClass.loadSprites(this);
        FischSchwarmClass.loadSprites(this);
    };

    deepHandler() {
        let ubootY = this.player.uboot.y;
        let targetColor;

        if (ubootY > 1100 && ubootY < 1500) {
            targetColor = { r: 170, g: 170, b: 170 }; // 0xaaaaaa
        } else if (ubootY > 1500 && ubootY < 2000) {
            targetColor = { r: 102, g: 102, b: 102 }; // 0x666666
        } else if (ubootY > 2000) {
            targetColor = { r: 40, g: 40, b: 40 };
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
            item.create(chest, TrueConfig);
            this.physics.add.overlap(item.item, this.player.ubootGreifer.kran, () => {
                if (this.player.ubootGreifer.isOpen) {
                    item.takeItem();
                };
            });
            this.itemPool.push(item);
        });
    };

    addcollidersGround() {
        this.world.groundPool.forEach(ground => {
            let groundCollider = this.physics.add.collider(ground, this.player.uboot);
            this.colliderPool.push(groundCollider);
            this.itemPool.forEach(item => {
                this.physics.add.collider(item.item, ground);
            });
        });
    };

    addRiffColliders() {
        this.world.riffColliderPool.forEach(riff => {
            let riffCollider = this.physics.add.collider(riff, this.player.uboot);
            this.itemPool.forEach(item => {
                let itemCollider = this.physics.add.collider(riff, item.item)
            })
        });
    };

    create() {
        this.physics.world.setBounds(0, 0, this.sceneWidth, this.sceneHeight);
        this.lights.enable();
        this.lights.setAmbientColor(0xcccccc);

        this.world = new World1(this);
        this.world.create();

        this.baseShip = new BaseShipClass(this);
        this.baseShip.create(1000, 410)

        Player.initAnimations(this);
        this.player = new Player(this, this.baseShip);
        this.player.create(150, 3000); //530 Default
        this.player.setFollowCamera(this.sceneWidth, this.sceneHeight);

        this.fischeBunt = new FuscheBuntClass(this);
        this.fischeBunt.create();

        this.fischSchwarm = new FischSchwarmClass(this);
        this.fischSchwarm.create();

        this.createChests();
        this.initScene();
        this.addcollidersGround();
        this.addRiffColliders();
    };

    update(time, delta) {
        this.player.update(time, delta);
        this.world.update(time, delta);
        this.deepHandler();
        this.itemPool.forEach(item => {
            item.update();
        })
        this.fischeBunt.update();
        this.fischSchwarm.update();
    };
};
