var Game;
(function (Game) {
    var RubyRunner = (function () {
        function RubyRunner() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', { create: this.create, preload: this.preload, update: this.update, init: this.init, render: this.render });
        }
        RubyRunner.prototype.init = function () {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.arcade.gravity.y = 300;
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            //this.game.scale.maxHeight = 900;
        };
        RubyRunner.prototype.preload = function () {
            //graphics
            this.game.load.image("title", "/Graphics/Title2.png");
            this.game.load.image("startButton", "/Graphics/start.png");
            this.game.load.image("scene1", "/Graphics/Level_1.png");
            this.game.load.image("ground", "/Graphics/ground.png");
            this.game.load.image("ground1", "/Graphics/GrassGround1.png");
            this.game.load.image("ground2", "/Graphics/GrassGround2.png");
            this.game.load.image("ground3", "/Graphics/GrassGround3.png");
            this.game.load.image("ground4", "/Graphics/GroundBrown.png");
            this.game.load.image("ground5", "/Graphics/GroundStone.png");
            this.game.load.image("water", "/Graphics/Water.png");
            this.game.load.image("gem", "/Graphics/ruby.png");
            this.game.load.image("gameover", "/Graphics/GameOver.png");
            this.game.load.image("victory", "/Graphics/Victory.png");
            this.game.load.image("spikeDown", "/Graphics/SpikesDown.png");
            this.game.load.image("spikeUp", "/Graphics/SpikesUp.png");
            this.game.load.image("spikeLeft", "/Graphics/SpikesLeft.png");
            this.game.load.image("spikeRight", "/Graphics/SpikesRight.png");
            //sprites
            this.game.load.atlasJSONHash('IDLE', 'Graphics/IdleSheet.png', 'Graphics/IdleSheet.json');
            this.game.load.atlasJSONHash('WALKING', 'Graphics/WalkingSheet.png', 'Graphics/WalkingSheet.json');
            this.game.load.atlasJSONHash('WALKING_LEFT', 'Graphics/WalkingLeftSheet.png', 'Graphics/WalkingLeftSheet.json');
            this.game.load.atlasJSONHash('MON_RIGHT', 'Graphics/MonWalkRight.png', 'Graphics/MonWalkRight.json');
            this.game.load.atlasJSONHash('MON_LEFT', 'Graphics/MonWalkLeft.png', 'Graphics/MonWalkLeft.json');
            this.game.load.atlasJSONHash('PORTAL', 'Graphics/portalAnim.png', 'Graphics/portalAnim.json');
            //audios
            this.game.load.audio("intro", "/Sounds/TitleMusic.mp3");
            this.game.load.audio("mLevel1", "/Sounds/State1.mp3");
            this.game.load.audio("mLevel2", "/Sounds/State2.mp3");
            this.game.load.audio("mLevel3", "/Sounds/State3.mp3");
            this.game.load.audio("gameovermusic", "/Sounds/GameOverMusic.mp3");
            this.game.load.audio("victorymusic", "/Sounds/VictoryMusic.mp3");
            this.game.load.audio("gemcollector", "/Sounds/Gems.mp3");
        };
        RubyRunner.prototype.create = function () {
            this.game.state.add("GameTitle", GameRuby.GameTitle, true);
            this.game.state.add("GamePlay", GameRuby.GamePlay, false);
            this.game.state.add("GameOver", GameRuby.GameOver, false);
            this.game.state.add("GameVictory", GameRuby.GameVictory, false);
        };
        RubyRunner.prototype.update = function () {
        };
        RubyRunner.prototype.render = function () {
        };
        return RubyRunner;
    }());
    Game.RubyRunner = RubyRunner;
    window.onload = function () { var game = new Game.RubyRunner(); };
})(Game || (Game = {}));
//# sourceMappingURL=app.js.map