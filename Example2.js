class Example2 extends Phaser.Scene {
    constructor() {
        super({key:"Example2"});
    }

    preload() {
        this.load.image('Wario', 'assets/Wario.png');
        this.load.audio('Welcome',['assets/WarioWelcome.mp3']);
        this.load.audio('lol',['assets/WARIO LAUGHING.mp3']);
    }

    create() {

        this.sound.stopAll();
        this.soundFX = this.sound.add("Welcome");
        this.soundFX.play();


      this.text = this.add.text(0,0,"Welcome to Wario World!", {font:"40px Impact"});

      
      var tween = this.tweens.add({
        targets: this.text,
        x:200,
        y:250,
        duration:2000,
        ease:"Elastic",
        easeParams:[1.5,0.1],
        delay:1000,
        onComplete:function(src,tgt) {
            tgt[0].x = 0;
            tgt[0].y = 0;
            tgt[0].setColor("Yellow");
            
        }
      });

      
        
      

      this.input.keyboard.on('keyup_W', (event) => {
        this.image = this.add.image(400,300,'Wario');
        this.soundFX = this.sound.add("lol");
        this.soundFX.play();
        })
      

      this.key_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
      this.key_3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);

    }

    update(delta) {

        
    
        
        


       if(this.key_1.isDown) {
           
           this.scene.start("Example1");
       }

       if(this.key_3.isDown) {
          
           this.scene.start("Example3");
       }
    }

    
        
    

}