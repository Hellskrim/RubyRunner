var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRuby;
(function (GameRuby) {
    var GameTitle = (function (_super) {
        __extends(GameTitle, _super);
        function GameTitle() {
            _super.call(this);
        }
        GameTitle.prototype.create = function () {
            this.titleScreen = this.add.sprite(0, 0, "title");
            this.titleScreen.scale.setTo(0, 0);
            this.game.add.tween(this.titleScreen.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
            var startButton = this.game.add.sprite(this.game.width * 0.8, this.game.height * 0.7, "startButton");
            startButton.scale.setTo(0.3, 0.3);
            startButton.inputEnabled = true;
            this.music = this.game.add.audio("intro");
            this.music.volume = 0.1;
            this.music.loop = true;
            this.music.play();
            startButton.events.onInputDown.add(this.startClicked, this);
        };
        GameTitle.prototype.startClicked = function () {
            this.music.stop();
            this.game.state.start("GamePlay", true, false);
        };
        return GameTitle;
    }(Phaser.State));
    GameRuby.GameTitle = GameTitle;
})(GameRuby || (GameRuby = {}));
//# sourceMappingURL=GameTitle.js.map