var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRuby;
(function (GameRuby) {
    (function (MonsterState) {
        MonsterState[MonsterState["WALKING"] = 0] = "WALKING";
        MonsterState[MonsterState["JUMP"] = 1] = "JUMP";
    })(GameRuby.MonsterState || (GameRuby.MonsterState = {}));
    var MonsterState = GameRuby.MonsterState;
    var Monster = (function (_super) {
        __extends(Monster, _super);
        function Monster(game, x, y) {
            _super.call(this, game, x, y, 'MON_RIGHT', 1);
            this.game = game;
            this.monSpeed = 0;
            this.isEdge = true;
        }
        Monster.prototype.update = function () {
            if (this.isEdge) {
                this.body.velocity.x = -150;
                this.startWalkingLeft();
            }
            if (this.x == 0)
                this.isEdge = false;
            if (!this.isEdge) {
                this.body.velocity.x = 150;
                this.startWalking();
            }
            if (Math.floor(Math.random() * 100) == 3 && this.body.touching.down) {
                this.jump();
                if (Math.floor(Math.random() * 2) == 1)
                    this.isEdge = true;
                if (Math.floor(Math.random() * 5) == 1)
                    this.isEdge = false;
            }
        };
        Monster.prototype.jump = function () {
            this.startJump();
            this.body.velocity.y -= 300;
        };
        Monster.prototype.startWalking = function () {
            this.monsterState = MonsterState.WALKING;
            this.monSpeed = 4;
            this.loadTexture('MON_RIGHT', 0);
            this.animations.add('mon_walk');
            this.animations.play('mon_walk', this.monSpeed, true);
        };
        Monster.prototype.startWalkingLeft = function () {
            this.monsterState = MonsterState.WALKING;
            this.monSpeed = -4;
            this.loadTexture('MON_LEFT', 0);
            this.animations.add('mon_lefty');
            this.animations.play('mon_lefty', this.monSpeed, true);
        };
        Monster.prototype.startJump = function () {
            this.monsterState = MonsterState.JUMP;
        };
        return Monster;
    }(Phaser.Sprite));
    GameRuby.Monster = Monster;
})(GameRuby || (GameRuby = {}));
//# sourceMappingURL=Monster.js.map