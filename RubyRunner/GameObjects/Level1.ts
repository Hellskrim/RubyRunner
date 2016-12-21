module GameRuby {
    export class Level1 extends Phaser.Sprite {
        game: Phaser.Game;
        nextFrame: Phaser.Sprite;
        music: Phaser.Sound;
        player: GameRuby.Player;
        ESCAPE: Phaser.Key;
        gemsFrame: Phaser.Sprite;

        platfroms = this.game.add.group();
        gemsGroup = this.game.add.group();

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "ground3", 0);
            this.music = this.game.add.audio("mLevel1");
            this.music.volume = 0.1;
            this.music.loop = true;
            this.music.play(); 

            this.ESCAPE = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            this.ESCAPE.onDown.add(Level1.prototype.gameOver, this);
            this.CreateStage();
            this.portalAnimations();
        }
        static gems;
        preload() {
            this.game.load.spritesheet('PORTAL', 'Graphics/portalAnim', 32, 32, 320);
        }
        CreateStage() {
            this.platfroms.enableBody = true;
            this.gemsGroup.enableBody = true;
            
            //GROUND
            var ledge = new Phaser.Sprite(this.game, 0, this.game.height * 0.99, "ground3", 0);
            this.game.add.existing(ledge);
            ledge.width = this.game.width;
            this.nextFrame = this.platfroms.create(0, this.game.height * 0.99, "ground3", 0);
            this.nextFrame.width = this.game.width;
            this.game.add.existing(this.platfroms);
            this.nextFrame.body.allowGravity = false;
            this.nextFrame.body.immovable = true;           

            //PLATFORM 1
            ledge = new Phaser.Sprite(this.game, 0, this.game.height * 0.835, "ground2", 0);
            this.game.add.existing(ledge);
            ledge.scale.setTo(0.4, 0.3);
            this.nextFrame = this.platfroms.create(0, this.game.height * 0.835, "ground2", 0);
            this.nextFrame.scale.setTo(0.4, 0.3);
            this.game.add.existing(this.platfroms);
            this.nextFrame.body.immovable = true;
            this.nextFrame.body.allowGravity = false;

            //PLATFORM 2
            ledge = new Phaser.Sprite(this.game, this.game.width * 0.5, this.game.height * 0.76, "ground2", 0);
            this.game.add.existing(ledge);
            ledge.scale.setTo(0.5, 0.5);
            this.nextFrame = this.platfroms.create(this.game.width * 0.5, this.game.height * 0.76, "ground2", 0);
            this.game.add.existing(this.platfroms);
            this.nextFrame.scale.setTo(0.5, 0.5);
            this.nextFrame.body.immovable = true;
            this.nextFrame.body.allowGravity = false;

            //PLATFORM 3
            ledge = new Phaser.Sprite(this.game, this.game.width * 0.25, this.game.height * 0.635, "ground2", 0);
            this.game.add.existing(ledge);
            ledge.scale.setTo(0.4, 0.4);
            this.nextFrame = this.platfroms.create(this.game.width * 0.25, this.game.height * 0.635, "ground2", 0);
            this.nextFrame.scale.setTo(0.4, 0.4);
            this.game.add.existing(this.platfroms);
            this.nextFrame.body.immovable = true;
            this.nextFrame.body.allowGravity = false;

            //PLATFORM 4
            ledge = new Phaser.Sprite(this.game, this.game.width * 0.75, this.game.height * 0.535, "ground2", 0);
            this.game.add.existing(ledge);
            ledge.scale.setTo(0.3, 0.3);
            this.nextFrame = this.platfroms.create(this.game.width * 0.75, this.game.height * 0.535, "ground2", 0);
            this.nextFrame.scale.setTo(0.3, 0.3);
            this.game.add.existing(this.platfroms);
            this.nextFrame.body.immovable = true;
            this.nextFrame.body.allowGravity = false;

            //PLATFORM 5
            ledge = new Phaser.Sprite(this.game, this.game.width * 0.45, this.game.height * 0.335, "ground2", 0);
            this.game.add.existing(ledge);
            ledge.scale.setTo(0.2, 0.2);
            this.nextFrame = this.platfroms.create(this.game.width * 0.45, this.game.height * 0.335, "ground2", 0);
            this.nextFrame.scale.setTo(0.2, 0.2);
            this.game.add.existing(this.platfroms);
            this.nextFrame.body.immovable = true;
            this.nextFrame.body.allowGravity = false;

            //PLATFORM 6
            ledge = new Phaser.Sprite(this.game, this.game.width * 0.1, this.game.height * 0.5, "ground4", 0);
            this.game.add.existing(ledge);
            ledge.scale.setTo(0.15, 0.15);
            this.nextFrame = this.platfroms.create(this.game.width * 0.1, this.game.height * 0.5, "ground4", 0);
            this.nextFrame.scale.setTo(0.15, 0.15);
            this.game.add.existing(this.platfroms);
            this.nextFrame.body.immovable = true;
            this.nextFrame.body.allowGravity = false;

            //PLATFORM 7
            ledge = new Phaser.Sprite(this.game, this.game.width * 0.3, this.game.height * 0.4, "ground4", 0);
            this.game.add.existing(ledge);
            ledge.scale.setTo(0.15, 0.15);
            this.nextFrame = this.platfroms.create(this.game.width * 0.3, this.game.height * 0.4, "ground4", 0);
            this.nextFrame.scale.setTo(0.15, 0.15);
            this.game.add.existing(this.platfroms);
            this.nextFrame.body.immovable = true;
            this.nextFrame.body.allowGravity = false;

            //PLATFORM 8
            ledge = new Phaser.Sprite(this.game, this.game.width * 0.75, this.game.height * 0.135, "ground2", 0);
            this.game.add.existing(ledge);
            ledge.scale.setTo(0.2, 0.2);
            this.nextFrame = this.platfroms.create(this.game.width * 0.75, this.game.height * 0.135, "ground2", 0);
            this.nextFrame.scale.setTo(0.2, 0.2);
            this.game.add.existing(this.platfroms);
            this.nextFrame.body.immovable = true;
            this.nextFrame.body.allowGravity = false;

            //PLATFORM 9
            ledge = new Phaser.Sprite(this.game, this.game.width * 0.65, this.game.height * 0.23, "ground4", 0);
            this.game.add.existing(ledge);
            ledge.scale.setTo(0.1, 0.1);
            this.nextFrame = this.platfroms.create(this.game.width * 0.65, this.game.height * 0.23, "ground4", 0);
            this.nextFrame.scale.setTo(0.1, 0.1);
            this.game.add.existing(this.platfroms);
            this.nextFrame.body.immovable = true;
            this.nextFrame.body.allowGravity = false;

            //GEMS
            this.gemsFrame = new Phaser.Sprite(this.game, 0, 0, "gem", 0);
            this.game.add.existing(this.gemsFrame);
            this.gemsFrame.scale.setTo(0.001, 0.001);

            var gem = new Phaser.Sprite(this.game, this.game.width * 0.315, this.game.height * 0.35, "gem", 0);
            this.game.add.existing(gem);
            gem.scale.setTo(0.1, 0.1);
            this.game.physics.enable(gem);
            gem.body.allowGravity = false;

            var gem1 = new Phaser.Sprite(this.game, this.game.width * 0.09, this.game.height * 0.93, "gem", 0);
            this.game.add.existing(gem1);
            gem1.scale.setTo(0.1, 0.1);
            this.game.physics.enable(gem1);
            gem1.body.allowGravity = false;

            var gem2 = new Phaser.Sprite(this.game, this.game.width * 0.62, this.game.height * 0.7, "gem", 0);
            this.game.add.existing(gem2);
            gem2.scale.setTo(0.1, 0.1);
            this.game.physics.enable(gem2);
            gem2.body.allowGravity = false;

            var gem3 = new Phaser.Sprite(this.game, this.game.width * 0.83, this.game.height * 0.5, "gem", 0);
            this.game.add.existing(gem3);
            gem3.scale.setTo(0.1, 0.1);
            this.game.physics.enable(gem3);
            gem3.body.allowGravity = false;


            this.gemsGroup.addMultiple([gem, gem1, gem2, gem3]);
            
        }
        gameOver() {
            this.music.stop();
        }
        static portal;
        portalAnimations() {
            Level1.portal = this.game.add.sprite(this.game.width * 0.79, this.game.height * 0.04, 'PORTAL');
            Level1.portal.scale.setTo(2, 2);
            var anim = Level1.portal.animations.add('change');
            Level1.portal.animations.play('change', 6, true);
            this.game.physics.enable(Level1.portal);
            Level1.portal.body.allowGravity = false;
        }
    }
}