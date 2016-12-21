module GameRuby {

    export class GamePlay extends Phaser.State {
        game: Phaser.Game;
        player: GameRuby.Player;
        level1: GameRuby.Level1;
        level2: GameRuby.Level2;
        level3: GameRuby.Level3;
        monster: GameRuby.Monster;
        music: Phaser.Sound;

        static creation;
        static level;
        static lives;
        static points;
        static temp;
        constructor() {
            super();

        }
        update() {
            //CREATING LVL 1
            if (GamePlay.level == 1) {
                this.createLevel1();
                GamePlay.level = 0;
                GamePlay.creation = 1;
            }
            //KILLING LVL 1
            if (GamePlay.level == 2) {
                this.level1.music.stop();
                this.monster.kill();
            }
            //CREATING LVL 2
            if (GamePlay.level == 2) {
                this.createLevel2();
                GamePlay.level = 0;
                GamePlay.creation = 2;
            }
            //KILLING LVL 2
            if (GamePlay.level == 3) {
                this.level2.music.stop();
                this.monster.kill();
            }
            //CREATING LVL 3
            if (GamePlay.level == 3) {
                this.createLevel3();
                GamePlay.level = 0;
                GamePlay.creation = 3;
            }
            //GAMEOVER
            if (GamePlay.lives == 0) {
                if (GamePlay.creation == 1)
                    this.level1.music.stop();
                if (GamePlay.creation == 2)
                    this.level2.music.stop();
                if (GamePlay.creation == 3)
                    this.level3.music.stop();
                this.game.state.start("GameOver");
            }
            //VICTORY
            if (GamePlay.points == 13) {
                this.level1.music.stop();
                this.level2.music.stop();
                this.level3.music.stop();
                this.game.state.start("GameVictory");
            }
            //PHYSICS LEVEL 1
            if (GamePlay.creation == 1) {
                this.game.physics.arcade.collide(this.player, this.level1.platfroms);
                this.game.physics.arcade.collide(this.monster, this.level1.platfroms);
                this.game.physics.arcade.collide(this.player, this.monster, this.onHitted);
                if (this.game.physics.arcade.collide(this.player, this.level1.gemsGroup, this.onGrab))
                    this.music.play("gemcollector");
                if (GamePlay.points == 4)
                    this.game.physics.arcade.collide(this.player, Level1.portal, this.changeLevel);
            }
            //PHYSICS LEVEL 2
            if (GamePlay.creation == 2) {
                this.game.physics.arcade.collide(this.player, this.level2.platfroms);
                this.game.physics.arcade.collide(this.monster, this.level2.platfroms);
                this.game.physics.arcade.collide(this.player, this.monster, this.onHitted);
                this.game.physics.arcade.collide(this.player, this.level2.traps, this.onHitted);
                if (this.game.physics.arcade.collide(this.player, this.level2.gemsGroup, this.onGrab))
                    this.music.play("gemcollector");
                if (GamePlay.points == 9)
                    this.game.physics.arcade.collide(this.player, Level2.portal, this.changeLevel);
            }
            //PHYSICS LEVEL 3
            if (GamePlay.creation == 3) {
                this.game.physics.arcade.collide(this.player, this.level3.platfroms);
                this.game.physics.arcade.collide(this.monster, this.level3.platfroms);
                this.game.physics.arcade.collide(this.player, this.monster, this.onHitted);
                this.game.physics.arcade.collide(this.player, this.level3.traps, this.onHitted);
                if (this.game.physics.arcade.collide(this.player, this.level3.gemsGroup, this.onGrab))
                    this.music.play("gemcollector");
                if (GamePlay.points == 13)
                    this.game.physics.arcade.collide(this.player, Level3.portal, this.changeLevel);
            }
        }
        
        create() {
            GamePlay.temp = 0;
            GamePlay.lives = 3;
            GamePlay.points = 0;
            GamePlay.level = 1;
            this.music = this.game.add.audio("gemcollector");
            this.music.override = true;
            this.music.allowMultiple = false;
            this.music.addMarker("gemcollector", 0.5, 1.5, 0.1);
        }

        createLevel1() {
            if (GamePlay.level == 1) {
                //BACKGROUND
                var backGround = new Phaser.Sprite(this.game, 0, 0, "scene1", 0);
                backGround.scale.setTo(this.game.width / backGround.width, this.game.height / backGround.height);
                this.game.add.existing(backGround);
                //CREATE LEVEL 1 ASSETS
                this.level1 = new Level1(this.game, 0, this.game.height * 0.99);
                this.level1.width = this.game.width;
                this.game.add.existing(this.level1);
                this.game.physics.arcade.enable(this.level1);
                this.game.physics.arcade.enable(this.level1.gemsFrame);
                //CREATE PLAYER
                this.player = new Player(this.game, 0, this.game.height * 0.4);
                this.player.scale.setTo(0.25, 0.25);
                this.game.add.existing(this.player);
                this.game.physics.arcade.enable(this.player);
                this.player.body.collideWorldBounds = true;
                //CREATE MONSTER
                this.monster = new Monster(this.game, Math.random() * this.game.width, Math.random() * this.game.height + 150);
                this.game.add.existing(this.monster);
                this.game.physics.arcade.enable(this.monster);
                this.monster.body.collideWorldBounds = true;

            }
        }
        createLevel2(){
            if (GamePlay.level == 2) {
                //BACKGROUND
                var backGround = new Phaser.Sprite(this.game, 0, 0, "scene1", 0);
                backGround.scale.setTo(this.game.width / backGround.width, this.game.height / backGround.height);
                this.game.add.existing(backGround);
                //CREATE LEVEL 2 ASSETS
                this.level2 = new Level2(this.game, 0, this.game.height * 0.99);
                this.level2.width = this.game.width;
                this.game.add.existing(this.level2);
                this.game.physics.arcade.enable(this.level2);
                this.game.physics.arcade.enable(this.level2.gemsFrame);
                //CREATE PLAYER
                this.player = new Player(this.game, 0, this.game.height * 0.4);
                this.player.scale.setTo(0.25, 0.25);
                this.game.add.existing(this.player);
                this.game.physics.arcade.enable(this.player);
                this.player.body.collideWorldBounds = true;
                //CREATE MONSTER
                this.monster = new Monster(this.game, Math.random() * this.game.width, Math.random() * this.game.height + 150);
                this.game.add.existing(this.monster);
                this.game.physics.arcade.enable(this.monster);
                this.monster.body.collideWorldBounds = true;
            }
        }
        createLevel3() {
            if (GamePlay.level == 3) {
                //BACKGROUND
                var backGround = new Phaser.Sprite(this.game, 0, 0, "scene1", 0);
                backGround.scale.setTo(this.game.width / backGround.width, this.game.height / backGround.height);
                this.game.add.existing(backGround);
                //CREATE LEVEL 3 ASSETS
                this.level3 = new Level3(this.game, this.game.width, this.game.height*0.99);
                this.level3.width = this.game.width;
                this.game.add.existing(this.level3);
                this.game.physics.arcade.enable(this.level3);
                this.game.physics.arcade.enable(this.level3.gemsFrame);
                //CREATE PLAYER
                this.player = new Player(this.game, 0, this.game.height * 0.8);
                this.player.scale.setTo(0.25, 0.25);
                this.game.add.existing(this.player);
                this.game.physics.arcade.enable(this.player);
                this.player.body.collideWorldBounds = true;
                //CREATE MONSTER
                this.monster = new Monster(this.game, Math.random() * this.game.width, Math.random() * this.game.height*0.97);
                this.game.add.existing(this.monster);
                this.game.physics.arcade.enable(this.monster);
                this.monster.body.collideWorldBounds = true;
            }
        }



        onHitted(sprite1, sprite2) {
            sprite1.kill();
            GamePlay.lives--;
            sprite1.reset(0, 0);
        }
        onGrab(sprite1, sprite2) {
            sprite2.kill();
            GamePlay.points++;
        }
        changeLevel(sprite1, sprite2) {

            GamePlay.level = 2 + GamePlay.temp;
            sprite1.kill();
            GamePlay.temp += 1;
        }
        render() {
            this.game.debug.text("Points: " + GamePlay.points, this.game.width * 0.9, this.game.height*0.94);
        }
    }
}