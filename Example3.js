class Example3 extends Phaser.Scene {
    constructor() {
        super({key:"Example3"});
    }

    preload() {
        this.load.audio('test',['assets/Bruh.mp3']);
    }

    create() {

        this.sound.stopAll();
        this.soundFX = this.sound.add("test");
        
        this.soundFX.rate = 1;

        this.key_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.key_2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);


        this.input.keyboard.on('keydown_B', (event) => {
            this.soundFX = this.sound.add("test");
            this.soundFX.play();
        })

    }

    update(delta) {
        if(this.key_1.isDown) {
            this.soundFX.pause();
            this.scene.start("Example1");
        }
 
        if(this.key_2.isDown) {
            this.soundFX.pause();
            this.scene.start("Example2");
        }
    }



}