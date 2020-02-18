class Example1 extends Phaser.Scene {
    constructor() {
        super({key:"Example1"});
    }

    preload() {
        this.load.image('Geno', 'assets/Geno.png');
        this.load.audio('BGM',["assets/Let's Play Geno.mp3"]);
        this.load.audio('YEET',["assets/YEET.mp3"]);
        this.load.audio('Teleport',["assets/DBZTeleport.mp3"]);
        
    }

    create() {

        this.sound.stopAll();
        
        
        this.text = this.add.text(20,20,"Forget Tetris. Let's Play \"Geno!\"\n\nCONTROLS:\nPress WASD to Move\nPress M to play Music\nClick anywhere to perform instantaneous movement\nPress P to Throw Yourself", {font:"20px Arial"});

        var tween = this.tweens.add({
            targets: this.text,
            x:20,
            y:420,
            duration:1000,
            ease:"Bounce",
            easeParams:[1.5,0.1],
            delay:1000,
            onComplete:function(src,tgt) {
                tgt[0].x = 20;
                tgt[0].y = 420;
                tgt[0].setColor("Yellow");
                
            }
          });


        this.input.keyboard.on('keydown_M', (event) => {
        this.soundFX = this.sound.add("BGM", {loop : "true"});
        this.sound.stopAll();
        this.soundFX.play();
        })


        this.image = this.add.image(400,300,'Geno');
        
        
        this.input.keyboard.on('keydown_P', (event) => {
            var physicsImage = this.physics.add.image(this.image.x, this.image.y, "Geno");
            physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-1000,1000),Phaser.Math.RND.integerInRange(-1000,1000));
            this.soundFX = this.sound.add("YEET");
            this.soundFX.play();
        })

        

        this.input.on('pointerdown', (event) => {
            this.image.x = event.x;
            this.image.y = event.y;
            this.soundFX = this.sound.add("Teleport");
            this.soundFX.play();
        });

        

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(delta) {
        if(this.key_W.isDown) {
            this.image.y -= 10;
        }
        if(this.key_A.isDown) {
            this.image.x -= 10;
        }
        if(this.key_S.isDown) {
            this.image.y += 10;
        }
        if(this.key_D.isDown) {
            this.image.x += 10;
        }
    }



}