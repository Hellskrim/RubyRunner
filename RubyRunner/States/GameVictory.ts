module GameRuby {
    export class GameVictory extends Phaser.State {
        game: Phaser.Game;
        music: Phaser.Sound;
        titleScreen: Phaser.Sprite;


        constructor() {
            super();
        }
        create() {
            this.titleScreen = this.add.sprite(0, 0, "victory");

            this.music = this.game.add.audio("victorymusic");
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