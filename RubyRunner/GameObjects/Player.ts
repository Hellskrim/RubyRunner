module GameRuby {
    export enum PlayerState { IDLE, WALKING, JUMP }

    export class Player extends Phaser.Sprite {
        game: Phaser.Game;
        playerState: PlayerState;
        RIGHT_ARROW: Phaser.Key;
        LEFT_ARROW: Phaser.Key;
        ESCAPE: Phaser.Key;
        SPACE: Phaser.Key;
        
        walkingSpeed: number;
        jumpingHeigh: number;
        public static MAX_SPEED: number = 62;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'WALKING', 1);
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
        
        update() {
            if (this.moveLeft)
                this.x -= (-this.walkingSpeed / Player.MAX_SPEED) * (60 / this.game.time.elapsedMS);
            if (this.moveRight)
                this.x += (this.walkingSpeed / Player.MAX_SPEED) * (60 / this.game.time.elapsedMS);
            
                this.jump();  
        }
        moveRight() {
            if (this.RIGHT_ARROW.isDown) {
                this.startWalking();
            }
        }
        moveLeft() {
            if (this.LEFT_ARROW.isDown) {
                this.startWalkingLeft();
            }
        }
        jump() {
            if (this.SPACE.isDown && this.body.touching.down) {
                this.startJump();
                this.body.velocity.y = -(this.jumpingHeigh / Player.MAX_SPEED) * (60 / this.game.time.elapsedMS);
                
            }
                
        }
        stop() {
            this.animations.stop();
            this.startIdle();
        }
        startWalking() {
            this.playerState = PlayerState.WALKING;
            this.walkingSpeed = 40;
            this.loadTexture('WALKING', 0);
            this.animations.add('walk');
            this.animations.play('walk', this.walkingSpeed, true);
            
        }
        startWalkingLeft() {
            this.playerState = PlayerState.WALKING;
            this.walkingSpeed = -40;
            this.loadTexture('WALKING_LEFT', 0);
            this.animations.add('walk_left');
            this.animations.play('walk_left', -this.walkingSpeed, true);
        }
        startJump() {
            this.playerState = PlayerState.JUMP;
            this.jumpingHeigh = 4385;
            
        }
        startIdle() {
            this.playerState = PlayerState.IDLE;
            this.walkingSpeed = 0;
            this.loadTexture('IDLE',0);
            this.animations.add('Idle');
            this.animations.play('Idle', 3, true);
        }
        gameOver() {
            
            this.game.state.start("GameTitle");
        }

    }
}