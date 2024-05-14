import Phaser from "phaser";
import World1 from "../worlds/World1";
import { Boot, BootN } from "../assetLoader/AssetLoader";
import Player from "../player/Player";

const KEY_UBOOT = "Uboot"

export default class SceneLvL1 extends Phaser.Scene {
    constructor() {
        super("SceneLvL1")
        this.sceneWidth = 3840;
        this.sceneHeight = 2160;
    };

    initScene() {
        this.timer = 0;
    };
    
    preload() {
        //LoadWorld Sprites
        World1.loadSprites(this);
        Player.loadSprites(this);

    };

    create() {
        this.physics.world.setBounds(0, 0, this.sceneWidth, this.sceneHeight)
        this.lights.enable();
        this.lights.setAmbientColor(0xcccccc);
        
        this.world = new World1(this);
        this.world.create();
        
        Player.initAnimations(this);
        this.player = new Player(this);
        this.player.create(200, 530);
        this.player.setFollowCamera(this.sceneWidth, this.sceneHeight)
        
        this.initScene();
    };

    update(time, delta) {
        this.player.update(time, delta);
        this.world.update(time, delta);
    };
};