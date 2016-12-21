module GameRuby {
    export class GameOver extends Phaser.State {
        game: Phaser.Game;
        music: Phaser.Sound;
        titleScreen: Phaser.Sprite;


        constructor() {
            super();
        }
        create() {
            this.titleScreen = this.add.sprite(0, 0, "gameover");

            this.music = this.game.add.audio("gameovermusic");
            this.music.volume = 0.1;
            this.music.loop = true;
            this.music.play();
            this.input.onTap.addOnce(this.startClicked, this);

        }
        startClicked() {
            this.music.stop();
            this.game.state.start("GameTitle");
        }
    }
}