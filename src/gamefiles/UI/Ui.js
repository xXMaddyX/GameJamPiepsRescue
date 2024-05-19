import Phaser from "phaser";
import { 
    ExitButton, 
    GameMenu, 
    OkButton, 
    RetryButton 
} from "../assetLoader/AssetLoader";

const KEY_MENU_BACKGROUND = "MenuBackground";
const KEY_RETRY_BUTTON = "RetryButton";
const KEY_EXIT_BUTTON = "ExitButtonGame";
const KEY_OK_BUTTON = "okButton";

const KEY_RETRY_BUTTON_ANIM = "RetryButtonAnim";
const KEY_EXIT_BUTTON_ANIM = "ExitButtonGameAnim";
const KEY_OK_BUTTON_ANIM = "okButtonAnim";

export default class Ui {
    constructor(scene) {
        /**@type {Phaser.Scene} */
        this.scene = scene;
    };

    initUI() {
        this.menuOpen = false;
        this.actualScene = "";
    };

    static loadSprites(scene) {
        if (!scene.textures.exists(KEY_MENU_BACKGROUND)) scene.load.image(KEY_MENU_BACKGROUND, GameMenu);
        if (!scene.textures.exists(KEY_RETRY_BUTTON)) scene.load.spritesheet(KEY_RETRY_BUTTON, RetryButton, {
            frameWidth: 71, frameHeight: 71
        });
        if (!scene.textures.exists(KEY_EXIT_BUTTON)) scene.load.spritesheet(KEY_EXIT_BUTTON, ExitButton, {
            frameWidth: 71, frameHeight: 71
        });
        if (!scene.textures.exists(KEY_OK_BUTTON)) scene.load.spritesheet(KEY_OK_BUTTON, OkButton, {
            frameWidth: 71, frameHeight: 71
        });
    };

    initAnimations() {
        if (!this.scene.anims.exists(KEY_RETRY_BUTTON_ANIM)) {
            this.scene.anims.create({
                key: KEY_RETRY_BUTTON_ANIM,
                frames: this.scene.anims.generateFrameNumbers(KEY_RETRY_BUTTON, {
                    start: 0,
                    end: 3
                }),
                frameRate: 5,
                repeat: -1
            });
        };
        if (!this.scene.anims.exists(KEY_EXIT_BUTTON_ANIM)) {
            this.scene.anims.create({
                key: KEY_EXIT_BUTTON_ANIM,
                frames: this.scene.anims.generateFrameNumbers(KEY_EXIT_BUTTON, {
                    start: 0,
                    end: 3
                }),
                frameRate: 5,
                repeat: -1
            });
        };
        if (!this.scene.anims.exists(KEY_OK_BUTTON_ANIM)) {
            this.scene.anims.create({
                key: KEY_OK_BUTTON_ANIM,
                frames: this.scene.anims.generateFrameNumbers(KEY_OK_BUTTON, {
                    start: 0,
                    end: 3
                }),
                frameRate: 5,
                repeat: -1
            });
        };
    }

    create() {
        this.initUI();
        this.initAnimations();
        this.escButton = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        this.menuWindow = this.scene.add.sprite(960, 540, KEY_MENU_BACKGROUND);
        this.menuWindow.setVisible(false);
        this.menuWindow.setScrollFactor(0);
        this.menuWindow.setDepth(10);
        this.escButton.on('down', () => {
            this.menuOpen = !this.menuOpen;
            this.menuWindow.setVisible(this.menuOpen);
            this.retryButton.setVisible(this.menuOpen);
            this.exitButton.setVisible(this.menuOpen);
        });


        this.retryButton = this.scene.add.sprite(880, 540, KEY_RETRY_BUTTON).setInteractive();
        this.retryButton.setDepth(11);
        this.retryButton.setVisible(false);
        this.retryButton.setScrollFactor(0);
        this.retryButton.on('pointerdown', () => {
            this.scene.resetScene();
            this.scene.scene.restart(this.actualScene);
        });
        this.retryButton.on('pointerover', () => {
            this.retryButton.anims.play(KEY_RETRY_BUTTON_ANIM);
        });
        this.retryButton.on('pointerout', () => {
            this.retryButton.anims.stop(KEY_RETRY_BUTTON_ANIM);
        });

        this.exitButton = this.scene.add.sprite(1040, 540, KEY_EXIT_BUTTON).setInteractive();
        this.exitButton.setDepth(11);
        this.exitButton.setVisible(false);
        this.exitButton.setScrollFactor(0);
        this.exitButton.on('pointerdown', () => {
            window.electron.quitApp();
        });
        this.exitButton.on("pointerover", () => {
            this.exitButton.anims.play(KEY_EXIT_BUTTON_ANIM)
        });
        this.exitButton.on("pointerout", () => {
            this.exitButton.anims.stop(KEY_EXIT_BUTTON_ANIM)
        })
    };

    update(time, delta) {

    };
};