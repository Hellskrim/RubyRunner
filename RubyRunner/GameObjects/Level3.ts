module GameRuby {
    export class Level3 extends Phaser.Sprite {
        game: Phaser.Game;
        nextFrame: Phaser.Sprite;
        music: Phaser.Sound;
        player: GameRuby.Player;
        ESCAPE: Phaser.Key;
        gemsFrame: Phaser.Sprite;

        platfroms = this.game.add.group();
        gemsGroup = this.game.add.group();
        traps = this.game.add.group();


        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "ground3", 0);
            this.music = this.game.add.audio("mLevel3");
            this.music.volume = 0.1;
            this.music.loop = true;
            this.music.play();

            this.ESCAPE = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            this.ESCAPE.onDown.add(Level3.prototype.gameOver, this);
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
            this.traps.enableBody = true;

            //GROUND
            var ledge = new Phaser.Sprite(this.game, 0, this.game.height * 0.97, "ground3", 0);
            this.game.add.existing(ledge);
            ledge.width = this.game.width*0.35;
            this.nextFrame = this.platfroms.create(0, this.game.height * 0.97, "ground3", 0);
            this.nextFrame.width = this.game.width*0.35;
            this.game.add.existing(this.platfroms);
            this.nextFrame.body.allowGravity = false;
            this.nextFrame.body.immovable = true;

            var ledgeG = new Phaser.Sprite(this.game, this.game.width * 0.65, this.game.height * 0.97, "ground3", 0)
            ledgeG.width = this.game.width*0.45;
            this.game.add.existing(ledgeG);
            this.game.physics.enable(ledgeG);
            ledgeG.body.allowGravity = false;
            ledgeG.body.immovable = true;

            var ledgeM = new Phaser.Sprite(this.game,0, this.game.height * 0.99, "ground3", 0)
            ledgeM.width = this.game.width;
            this.game.add.existing(ledgeM);
            this.game.physics.enable(ledgeM);
            ledgeM.body.allowGravity = false;
            ledgeM.body.immovable = true;

            //PLATFORMS
            var ledge1 = new Phaser.Sprite(this.game, this.game.width * 0.35, this.game.height * 0.3, "ground1", 0);
            this.game.add.existing(ledge1);
            ledge1.scale.setTo(0.8, 0.1);
            this.game.physics.enable(ledge1);
            ledge1.body.allowGravity = false;
            ledge1.body.immovable = true;

            var stone1 = new Phaser.Sprite(this.game, this.game.width * 0.75, this.game.height * 0.83, "ground5", 0);
            this.game.add.existing(stone1);
            stone1.scale.setTo(0.25, 0.05);
            this.game.physics.enable(stone1);
            stone1.body.allowGravity = false;
            stone1.body.immovable = true;

            var stone2 = new Phaser.Sprite(this.game, this.game.width * 0.55, this.game.height * 0.73, "ground5", 0);
            this.game.add.existing(stone2);
            stone2.scale.setTo(0.25, 0.05);
            this.game.physics.enable(stone2);
            stone2.body.allowGravity = false;
            stone2.body.immovable = true;

            var stone3 = new Phaser.Sprite(this.game, this.game.width * 0.15, this.game.height * 0.3, "ground4", 0);
            this.game.add.existing(stone3);
            stone3.scale.setTo(0.25, 0.05);
            this.game.physics.enable(stone3);
            stone3.body.allowGravity = false;
            stone3.body.immovable = true;
            stone3.body.velocity.y = 150;
            stone3.body.collideWorldBounds = true;
            stone3.body.bounce.set(1);

            var stone4 = new Phaser.Sprite(this.game, 0, this.game.height * 0.53, "ground5", 0);
            this.game.add.existing(stone4);
            stone4.scale.setTo(0.25, 0.05);
            this.game.physics.enable(stone4);
            stone4.body.allowGravity = false;
            stone4.body.immovable = true;

            var stone5 = new Phaser.Sprite(this.game, this.game.width * 0.55, this.game.height * 0.73, "ground5", 0);
            this.game.add.existing(stone5);
            stone5.scale.setTo(0.25, 0.05);
            this.game.physics.enable(stone5);
            stone5.body.allowGravity = false;
            stone5.body.immovable = true;

            var stone6 = new Phaser.Sprite(this.game, this.game.width*0.35, this.game.height * 0.26, "ground5", 0);
            this.game.add.existing(stone6);
            stone6.scale.setTo(0.1, 0.1);
            this.game.physics.enable(stone6);
            stone6.body.allowGravity = false;
            stone6.body.immovable = true;

            var stone7 = new Phaser.Sprite(this.game, this.game.width * 0.6, this.game.height * 0.26, "ground5", 0);
            this.game.add.existing(stone7);
            stone7.scale.setTo(0.1, 0.1);
            this.game.physics.enable(stone7);
            stone7.body.allowGravity = false;
            stone7.body.immovable = true;

            var stone8 = new Phaser.Sprite(this.game, this.game.width * 0.8, this.game.height * 0.26, "ground5", 0);
            this.game.add.existing(stone8);
            stone8.scale.setTo(0.1, 0.1);
            this.game.physics.enable(stone8);
            stone8.body.allowGravity = false;
            stone8.body.immovable = true;

            var stone9 = new Phaser.Sprite(this.game, this.game.width * 0.89, this.game.height * 0.3, "ground4", 0);
            this.game.add.existing(stone9);
            stone9.scale.setTo(0.25, 0.05);
            this.game.physics.enable(stone9);
            stone9.body.allowGravity = false;
            stone9.body.immovable = true;
            stone9.body.velocity.y = 180;
            stone9.body.collideWorldBounds = true;
            stone9.body.bounce.set(1);

            //GEMS
            this.gemsFrame = new Phaser.Sprite(this.game, 0, 0, "gem", 0);
            this.game.add.existing(this.gemsFrame);
            this.gemsFrame.scale.setTo(0.001, 0.001);

            var gem1 = new Phaser.Sprite(this.game, this.game.width * 0.49, this.game.height * 0.8, "gem", 0);
            this.game.add.existing(gem1);
            gem1.scale.setTo(0.1, 0.1);
            this.game.physics.enable(gem1);
            gem1.body.allowGravity = false;

            var gem2 = new Phaser.Sprite(this.game, this.game.width * 0.79, this.game.height * 0.9, "gem", 0);
            this.game.add.existing(gem2);
            gem2.scale.setTo(0.1, 0.1);
            this.game.physics.enable(gem2);
            gem2.body.allowGravity = false;

            var gem3 = new Phaser.Sprite(this.game, this.game.width * 0.02, this.game.height * 0.5, "gem", 0);
            this.game.add.existing(gem3);
            gem3.scale.setTo(0.1, 0.1);
            this.game.physics.enable(gem3);
            gem3.body.allowGravity = false;

            var gem4 = new Phaser.Sprite(this.game, this.game.width * 0.49, this.game.height * 0.15, "gem", 0);
            this.game.add.existing(gem4);
            gem4.scale.setTo(0.1, 0.1);
            this.game.physics.enable(gem4);
            gem4.body.allowGravity = false;
            
            //WATER
            var water = new Phaser.Sprite(this.game, this.game.width * 0.35, this.game.height * 0.98, "water", 0)
            water.scale.setTo(0.69, 1);
            this.game.add.existing(water);
            this.game.physics.enable(water);
            water.body.allowGravity = false;
            water.body.immovable = true;

            var water2 = new Phaser.Sprite(this.game, this.game.width * 0.37, this.game.height * 0.295, "water", 0)
            water2.scale.setTo(1, 0.1);
            this.game.add.existing(water2);
            this.game.physics.enable(water2);
            water2.body.allowGravity = false;
            water2.body.immovable = true;


            //TRAPS
            var trap1 = new Phaser.Sprite(this.game, this.game.width * 0.45, this.game.height * 0.78, "spikeLeft", 0);
            this.game.add.existing(trap1);
            trap1.scale.setTo(0.3, 1);
            this.game.physics.enable(trap1);
            trap1.body.allowGravity = false;
            trap1.body.immovable = true;

            var trap2 = new Phaser.Sprite(this.game, this.game.width * 0.53, this.game.height * 0.78, "spikeRight", 0);
            this.game.add.existing(trap2);
            trap2.scale.setTo(0.3, 1);
            this.game.physics.enable(trap2);
            trap2.body.allowGravity = false;
            trap2.body.immovable = true;

            var trap3 = new Phaser.Sprite(this.game, this.game.width * 0.83, this.game.height * 0.78, "spikeLeft", 0);
            this.game.add.existing(trap3);
            trap3.scale.setTo(0.3, 1);
            this.game.physics.enable(trap3);
            trap3.body.allowGravity = false;
            trap3.body.immovable = true;

            var trap4 = new Phaser.Sprite(this.game, this.game.width * 0.83, this.game.height * 0.453, "spikeLeft", 0);
            this.game.add.existing(trap4);
            trap4.scale.setTo(0.3, 1);
            this.game.physics.enable(trap4);
            trap4.body.allowGravity = false;
            trap4.body.immovable = true;

            var trap5 = new Phaser.Sprite(this.game, this.game.width * 0.83, this.game.height * 0.32, "spikeLeft", 0);
            this.game.add.existing(trap5);
            trap5.scale.setTo(0.3, 1);
            this.game.physics.enable(trap5);
            trap5.body.allowGravity = false;
            trap5.body.immovable = true;   

            var trap6 = new Phaser.Sprite(this.game, this.game.width * 0.84, this.game.height * 0.93, "spikeDown", 0);
            this.game.add.existing(trap6);
            trap6.scale.setTo(1.5, 0.6);
            this.game.physics.enable(trap6);
            trap6.body.allowGravity = false;
            trap6.body.immovable = true;         
            
            this.platfroms.addMultiple([ledge1, ledgeG, ledgeM, stone1, stone2, stone3, stone4, stone5, stone6, stone7, stone8, stone9]);
            this.gemsGroup.addMultiple([gem1, gem2, gem3, gem4]);
            this.traps.addMultiple([trap1, trap2, trap3, trap4, trap5, trap6, water, water2]);
        }
        gameOver() {
            this.music.stop();
        }
        static portal;
        portalAnimations() {
            Level3.portal = this.game.add.sprite(this.game.width * 0.47, this.game.height * 0.85, 'PORTAL');
            Level3.portal.scale.setTo(2, 2);
            var anim = Level3.portal.animations.add('change');
            Level3.portal.animations.play('change', 6, true);
            this.game.physics.enable(Level3.portal);
            Level3.portal.body.allowGravity = false;
            Level3.portal.body.immovable = true;
        }
    }
}