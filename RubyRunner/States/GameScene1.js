var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRuby;
(function (GameRuby) {
    var GameScene1 = (function (_super) {
        __extends(GameScene1, _super);
        function GameScene1() {
            _super.call(this);
        }
        GameScene1.prototype.create = function () {
            this.titleScreen = this.add.sprite(0, 0, "title");
            //this.titleScreen.scale.setTo(this.game.width / this.titleScreen.width*0.1, this.game.height / this.titleScreen.height*0.1);
            this.titleScreen.scale.setTo(0, 0);
            var tweenScreen = this.game.add.tween(this.titleScreen.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
            var startButton = this.game.add.sprite(this.game.width * 0.8, this.game.height * 0.7, "startButton");
            startButton.scale.setTo(0.3, 0.3);
            startButton.inputEnabled = true;
            this.music = this.game.add.audio("intro");
            this.music.volume = 0.1;
            this.music.loop = true;
            this.music.play();
            startButton.events.onInputDown.add(this.startClicked, this);
        };
        GameScene1.prototype.startClicked = function () {
            this.music.stop();
            this.game.state.start("Level1", true, false);
        };
        return GameScene1;
    }(Phaser.State));
    GameRuby.GameScene1 = GameScene1;
})(GameRuby || (GameRuby = {}));
//# sourceMappingURL=GameScene1.js.map