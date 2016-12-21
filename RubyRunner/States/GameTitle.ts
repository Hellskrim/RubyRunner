module GameRuby {
    export class GameTitle extends Phaser.State {
        game: Phaser.Game;
        music: Phaser.Sound;
        titleScreen: Phaser.Sprite;
        

        constructor() {
            super();
        }
        create() {
            this.titleScreen = this.add.sprite(0, 0, "title");
            this.titleScreen.scale.setTo(0, 0);
            this.game.add.tween(this.titleScreen.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);

            var startButton = this.game.add.sprite(this.game.width * 0.8, this.game.height * 0.7, "startButton");
            startButton.scale.setTo(0.3, 0.3);
            startButton.inputEnabled = true;

            this.music = this.game.add.audio("intro");
            this.music.volume=0.1;
            this.music.loop = true;
            this.music.play();

            startButton.events.onInputDown.add(this.startClicked, this);
            
        }
        startClicked() {
            this.music.stop();
            this.game.state.start("GamePlay", true, false);
        }
    }
}