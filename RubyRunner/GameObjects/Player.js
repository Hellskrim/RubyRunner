var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRuby;
(function (GameRuby) {
    (function (PlayerState) {
        PlayerState[PlayerState["IDLE"] = 0] = "IDLE";
        PlayerState[PlayerState["WALKING"] = 1] = "WALKING";
        PlayerState[PlayerState["JUMP"] = 2] = "JUMP";
    })(GameRuby.PlayerState || (GameRuby.PlayerState = {}));
    var PlayerState = GameRuby.PlayerState;
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, 'WALKING', 1);
            this.game = game;
            this.walkingSpeed = 0;
            this.jumpingHeigh = 0;
            this.SPACE = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            this.SPACE.onDown.add(Player.prototype.jump, this);
            this.RIGHT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.RIGHT_ARROW.onDown.add(Player.prototype.moveRight, this);
            this.RIGHT_ARROW.onUp.add(Player.prototype.stop, this);
            this.LEFT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.LEFT_ARROW.onDown.add(Player.prototype.moveLeft, this);
            this.LEFT_ARROW.onUp.add(Player.prototype.stop, this);
            this.ESCAPE = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            this.ESCAPE.onDown.add(Player.prototype.gameOver, this);
            this.startIdle();
        }
        Player.prototype.update = function () {
            if (this.moveLeft)
                this.x -= (-this.walkingSpeed / Player.MAX_SPEED) * (60 / this.game.time.elapsedMS);
            if (this.moveRight)
                this.x += (this.walkingSpeed / Player.MAX_SPEED) * (60 / this.game.time.elapsedMS);
            this.jump();
        };
        Player.prototype.moveRight = function () {
            if (this.RIGHT_ARROW.isDown) {
                this.startWalking();
            }
        };
        Player.prototype.moveLeft = function () {
            if (this.LEFT_ARROW.isDown) {
                this.startWalkingLeft();
            }
        };
        Player.prototype.jump = function () {
            if (this.SPACE.isDown && this.body.touching.down) {
                this.startJump();
                this.body.velocity.y = -(this.jumpingHeigh / Player.MAX_SPEED) * (60 / this.game.time.elapsedMS);
            }
        };
        Player.prototype.stop = function () {
            this.animations.stop();
            this.startIdle();
        };
        Player.prototype.startWalking = function () {
            this.playerState = PlayerState.WALKING;
            this.walkingSpeed = 40;
            this.loadTexture('WALKING', 0);
            this.animations.add('walk');
            this.animations.play('walk', this.walkingSpeed, true);
        };
        Player.prototype.startWalkingLeft = function () {
            this.playerState = PlayerState.WALKING;
            this.walkingSpeed = -40;
            this.loadTexture('WALKING_LEFT', 0);
            this.animations.add('walk_left');
            this.animations.play('walk_left', -this.walkingSpeed, true);
        };
        Player.prototype.startJump = function () {
            this.playerState = PlayerState.JUMP;
            this.jumpingHeigh = 4385;
        };
        Player.prototype.startIdle = function () {
            this.playerState = PlayerState.IDLE;
            this.walkingSpeed = 0;
            this.loadTexture('IDLE', 0);
            this.animations.add('Idle');
            this.animations.play('Idle', 3, true);
        };
        Player.prototype.gameOver = function () {
            this.game.state.start("GameTitle");
        };
        Player.MAX_SPEED = 62;
        return Player;
    }(Phaser.Sprite));
    GameRuby.Player = Player;
})(GameRuby || (GameRuby = {}));
//# sourceMappingURL=Player.js.map