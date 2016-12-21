var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRuby;
(function (GameRuby) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        function GameOver() {
            _super.call(this);
        }
        GameOver.prototype.create = function () {
            this.titleScreen = this.add.sprite(0, 0, "gameover");
            this.music = this.game.add.audio("gameovermusic");
            this.music.volume = 0.1;
            this.music.loop = true;
            this.music.play();
            this.input.onTap.addOnce(this.startClicked, this);
        };
        GameOver.prototype.startClicked = function () {
            this.music.stop();
            this.game.state.start("GameTitle");
        };
        return GameOver;
    }(Phaser.State));
    GameRuby.GameOver = GameOver;
})(GameRuby || (GameRuby = {}));
//# sourceMappingURL=GameOver.js.map