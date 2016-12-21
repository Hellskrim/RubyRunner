﻿module GameRuby {
    export class Level2 extends Phaser.Sprite {
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
            this.music = this.game.add.audio("mLevel2");
            this.music.volume = 0.1;
            this.music.loop = true;
            this.music.play();

            this.ESCAPE = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            this.ESCAPE.onDown.add(Level2.prototype.gameOver, this);
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
            var ledge = new Phaser.Sprite(this.game, 0, this.game.height * 0.99, "ground3", 0);
            this.game.add.existing(ledge);
            ledge.width = this.game.width;
            this.nextFrame = this.platfroms.create(0, this.game.height * 0.99, "ground3", 0);
            this.nextFrame.width = this.game.width;
            this.game.add.existing(this.platfroms);
            this.nextFrame.body.allowGravity = false;
            this.nextFrame.body.immovable = true;  

            //PLATFORMS
            var ledge1 = new Phaser.Sprite(this.game, this.game.width * 0.155, this.game.height * 0.3, "ground1", 0);
            this.game.add.existing(ledge1);
            ledge1.scale.setTo(0.1, 0.1);
            this.game.physics.enable(ledge1);
            ledge1.body.allowGravity = false;
            ledge1.body.immovable = true;

            var ledge2 = new Phaser.Sprite(this.game, this.game.width * 0.1, this.game.height * 0.85, "ground1", 0);
            this.game.add.existing(ledge2);
            ledge2.scale.setTo(0.6, 0.2);
            this.game.physics.enable(ledge2);
            ledge2.body.allowGravity = false;
            ledge2.body.immovable = true;

            var ledge3 = new Phaser.Sprite(this.game, this.game.width * 0.45, this.game.height * 0.85, "ground1", 0);
            this.game.add.existing(ledge3);
            ledge3.scale.setTo(0.6, 0.2);
            this.game.physics.enable(ledge3);
            ledge3.body.allowGravity = false;
            ledge3.body.immovable = true;

            var ledge4 = new Phaser.Sprite(this.game, this.game.width * 0.1, this.game.height * 0.55, "ground1", 0);
            this.game.add.existing(ledge4);
            ledge4.scale.setTo(0.5, 0.2);
            this.game.physics.enable(ledge4);
            ledge4.body.allowGravity = false;
            ledge4.body.immovable = true;

            var stone1 = new Phaser.Sprite(this.game, this.game.width * 0.8, this.game.height * 0.72, "ground5", 0);
            this.game.add.existing(stone1);
            stone1.scale.setTo(0.1, 0.1);
            this.game.physics.enable(stone1);
            stone1.body.allowGravity = false;
            stone1.body.immovable = true;

            var stone2 = new Phaser.Sprite(this.game, this.game.width * 0.6, this.game.height * 0.62, "ground5", 0);
            this.game.add.existing(stone2);
            stone2.scale.setTo(0.1, 0.1);
            this.game.physics.enable(stone2);
            stone2.body.allowGravity = false;
            stone2.body.immovable = true;

            var stone3 = new Phaser.Sprite(this.game, this.game.width * 0.09, this.game.height * 0.42, "ground5", 0);
            this.game.add.existing(stone3);
            stone3.scale.setTo(0.1, 0.1);
            this.game.physics.enable(stone3);
            stone3.body.allowGravity = false;
            stone3.body.immovable = true;

            var stone4 = new Phaser.Sprite(this.game, this.game.width * 0.25, this.game.height * 0.3, "ground5", 0);
            this.game.add.existing(stone4);
            stone4.scale.setTo(0.25, 0.05);
            this.game.physics.enable(stone4);
            stone4.body.allowGravity = false;
            stone4.body.immovable = true;
            stone4.body.velocity.x = 205;
            stone4.body.collideWorldBounds = true;    
            stone4.body.bounce.set(1);

            //GEMS
            this.gemsFrame = new Phaser.Sprite(this.game, 0, 0, "gem", 0);
            this.game.add.existing(this.gemsFrame);
            this.gemsFrame.scale.setTo(0.001, 0.001);

            var gem = new Phaser.Sprite(this.game, this.game.width * 0.315, this.game.height * 0.35, "gem", 0);
            this.game.add.existing(gem);
            gem.scale.setTo(0.1, 0.1);
            this.game.physics.enable(gem);
            gem.body.allowGravity = false;

            var gem1 = new Phaser.Sprite(this.game, this.game.width * 0.49, this.game.height * 0.93, "gem", 0);
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

            var gem4 = new Phaser.Sprite(this.game, this.game.width * 0.63, this.game.height * 0.25, "gem", 0);
            this.game.add.existing(gem4);
            gem4.scale.setTo(0.1, 0.1);
            this.game.physics.enable(gem4);
            gem4.body.allowGravity = false;

            //TRAPS
            var trap1 = new Phaser.Sprite(this.game, this.game.width * 0.85, this.game.height * 0.8, "spikeRight", 0);
            this.game.add.existing(trap1);
            trap1.scale.setTo(0.3, 1);
            this.game.physics.enable(trap1);
            trap1.body.allowGravity = false;
            trap1.body.immovable = true;

            var trap2 = new Phaser.Sprite(this.game, this.game.width * 0.85, this.game.height * 0.62, "spikeRight", 0);
            this.game.add.existing(trap2);
            trap2.scale.setTo(0.3, 1);
            this.game.physics.enable(trap2);
            trap2.body.allowGravity = false;
            trap2.body.immovable = true;

            var trap3 = new Phaser.Sprite(this.game, this.game.width * 0.85, this.game.height * 0.44, "spikeRight", 0);
            this.game.add.existing(trap3);
            trap3.scale.setTo(0.3, 1);
            this.game.physics.enable(trap3);
            trap3.body.allowGravity = false;
            trap3.body.immovable = true;

            var trap4 = new Phaser.Sprite(this.game, this.game.width * 0.85, this.game.height * 0.26, "spikeRight", 0);
            this.game.add.existing(trap4);
            trap4.scale.setTo(0.3, 1);
            this.game.physics.enable(trap4);
            trap4.body.allowGravity = false;
            trap4.body.immovable = true;

            var trap5 = new Phaser.Sprite(this.game, this.game.width * 0.065, this.game.height * 0.24, "spikeLeft", 0);
            this.game.add.existing(trap5);
            trap5.scale.setTo(0.3, 1);
            this.game.physics.enable(trap5);
            trap5.body.allowGravity = false;
            trap5.body.immovable = true;

            var trap6 = new Phaser.Sprite(this.game, this.game.width * 0.065, this.game.height * 0.42, "spikeLeft", 0);
            this.game.add.existing(trap6);
            trap6.scale.setTo(0.3, 1);
            this.game.physics.enable(trap6);
            trap6.body.allowGravity = false;
            trap6.body.immovable = true;

            this.traps.addMultiple([trap1, trap2, trap3, trap4, trap5, trap6]);
            this.platfroms.addMultiple([ledge1, ledge2, ledge3, ledge4, stone1, stone2, stone3, stone4]);
            this.gemsGroup.addMultiple([gem, gem1, gem2, gem3, gem4]);

        }
        gameOver() {
            this.music.stop();
        }
        static portal;
        portalAnimations() {
            Level2.portal = this.game.add.sprite(this.game.width * 0.89, this.game.height * 0.9, 'PORTAL');
            Level2.portal.scale.setTo(2, 2);
            var anim = Level2.portal.animations.add('change');
            Level2.portal.animations.play('change', 6, true);
            this.game.physics.enable(Level2.portal);
            Level2.portal.body.allowGravity = false;
            Level2.portal.body.immovable = true;
        }
    }
}