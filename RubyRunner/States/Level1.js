var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRuby;
(function (GameRuby) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            _super.call(this);
        }
        Level1.prototype.create = function () {
            var playGround = this.game.add.sprite(0, 0, "Scene1");
            playGround.scale.setTo(this.game.width / playGround.width, this.game.height / playGround.height);
            this.player = new GameRuby.Player(this.game, 0, this.game.height - 50);
            this.player.scale.setTo(0.3, 0.3);
            this.game.add.existing(this.player);
        };
        return Level1;
    }(Phaser.State));
    GameRuby.Level1 = Level1;
})(GameRuby || (GameRuby = {}));
//# sourceMappingURL=Level1.js.map