import Phaser from "phaser";
import {
    PlayerUboot,
    PlayerUbootN,
} from "../assetLoader/AssetLoader";

const KEY_UBOOT = "PlayerUboot";
const KEY_ANIM_UBOOT_MOVE = "PlayerUbootMove";
const KEY_ANIM_UBOOT_IDLE = "PlayerUbootIdle";

export default class Player {
    constructor(scene, world) {
        /**@type {Phaser.Scene} */
        this.scene = scene;
        this.world = world;
        this.direction = "RIGHT";
        this.lightsActive = false;
        this.buttonQisPressed = false;
        this.isSuface = false;
    };
    //-------------------------{{{{ PRELOAD FUNCTION }}}}----------------------------
    static loadSprites(scene) {
        if (!scene.textures.exists(KEY_UBOOT)) scene.load.spritesheet(KEY_UBOOT, [PlayerUboot, PlayerUbootN], {
            frameWidth: 125, frameHeight: 93
        })
    };
    //--------------------------{{{{ ANIMATION LOADER}}}}----------------------------
    static initAnimations(scene) {
        if (!scene.anims.exists(KEY_ANIM_UBOOT_IDLE)) {
            scene.anims.create({
                key: KEY_ANIM_UBOOT_IDLE,
                frames: scene.anims.generateFrameNumbers(KEY_UBOOT, {
                    start: 0,
                    end: 0
                }),
                frameRate: 0,
                repeat: -1
            });
        };

        if (!scene.anims.exists(KEY_ANIM_UBOOT_MOVE)) {
            scene.anims.create({
                key: KEY_ANIM_UBOOT_MOVE,
                frames: scene.anims.generateFrameNumbers(KEY_UBOOT, {
                    start: 0,
                    end: 6
                }),
                frameRate: 5,
                repeat: -1
            });
        };
    };
    //----------------------------{{{{ CREATE SECTION}}}}--------------------------------
    create(x, y) {
        this.uboot = this.scene.physics.add.sprite(x, y, KEY_UBOOT).setScale(2).setPipeline("Light2D").setDepth(0);
        this.uboot.setCollideWorldBounds(true)
        this.ubootLight = this.scene.lights.addLight(this.uboot.x + 100, this.uboot.y + 40, 500).setIntensity(1);
        this.ubootLight.setVisible(false);

        this.scene.cameras.main.startFollow(this.uboot)
        this.initKeybord();
        this.scene.cameras.main
    };

    initKeybord() {
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.ButtonE = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.ButtonQ = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    };

    setFollowCamera(width, height) {
        this.scene.cameras.main.setBounds(0, 0, width, height);
        this.scene.cameras.main.setDeadzone(50, 50);
        this.scene.cameras.main.startFollow(this.uboot, true, 0.1, 0.1);
    };

    //-------------------------{{{{ LIGHT Position HANDLER}}}}----------------------------
    updateLightPositionX(direction) {
        switch(direction) {
            case "RIGHT":
                this.uboot.flipX = false;
                this.ubootLight.x = this.uboot.x + 100
                break;
            case "LEFT":
                this.uboot.flipX = true;
                this.ubootLight.x = this.uboot.x - 100
                break;
        }
    };
    updateLightPositionY() {
        this.ubootLight.y = this.uboot.y + 40;
    }

    //-------------------------{{{{ LIGHT Position HANDLER }}}}---------------------------
    ubootLightSwitch() {
        this.lightsActive = !this.lightsActive
        this.ubootLight.setVisible(this.lightsActive)
    }

    //-------------------------{{{{ PLAYER CONTROL HANDLER }}}}---------------------------
    constrolHandler() {
         //Controls
         if (this.cursors.left.isDown && !this.cursors.right.isDown) {
            this.direction = "LEFT";
            this.uboot.setVelocityX(-100);
        } else if (this.cursors.right.isDown && !this.cursors.left.isDown) {
            this.direction = "RIGHT";
            this.uboot.setVelocityX(100);
        } else {
            this.uboot.setVelocityX(0);
            this.direction = "IDLE";
        }

        if (this.cursors.up.isDown && !this.cursors.down.isDown && !this.isSuface) {
            this.uboot.setVelocityY(-50);
            this.direction
        } else if (this.cursors.down.isDown && !this.cursors.up.isDown) {
            this.uboot.setVelocityY(50);
        } else {this.uboot.setVelocityY(0);}
        
        if (this.ButtonQ.isDown && !this.buttonQisPressed) {
            this.ubootLightSwitch();
            this.buttonQisPressed = true;
        } else if (this.ButtonQ.isUp) {
            this.buttonQisPressed = false;
        }
    };

    checkIsSurface() {
        if (this.uboot.y < 530) {
            this.isSuface = true;
        } else {
            this.isSuface = false;
        }
    }
    //----------------------{{{{ ANIMATION STATE CONTROL }}}}-----------------------------
    animationStates(newState) {
        if (this.currentState === newState) return;
        switch(newState) {
            case "IDLE":
                this.uboot.anims.play(KEY_ANIM_UBOOT_IDLE)
                break;
            case "LEFT":
                this.uboot.anims.play(KEY_ANIM_UBOOT_MOVE)
                break;
            case "RIGHT":
                this.uboot.anims.play(KEY_ANIM_UBOOT_MOVE)
                break;

        };
        this.currentState = newState;
    }

    //-------------------------{{{{ GAME UPDATE LOOP }}}}---------------------------------
    update(time, delta) {
        //Light Position Handlers
        this.updateLightPositionX(this.direction);
        this.updateLightPositionY();
        //Animation Handler
        this.animationStates(this.direction);
        //Dive Handler
        this.checkIsSurface();

        //Check for Body and Obj
        if (this.uboot && this.uboot.body) {
            //Controls Updater
           this.constrolHandler();
        }
    };
}