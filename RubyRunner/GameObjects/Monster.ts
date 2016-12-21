
module GameRuby {
    export enum MonsterState {WALKING, JUMP}
    
    export class Monster extends Phaser.Sprite {
        game: Phaser.Game;
        monsterState: MonsterState;
        
        isEdge: boolean;
        monSpeed: number;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'MON_RIGHT', 1);
            this.game = game;
            this.monSpeed = 0;
            this.isEdge = true;
        }
        
        update() {
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
        }

        jump() {
                this.startJump();
                this.body.velocity.y -= 300; 
        }
        startWalking() {
            this.monsterState = MonsterState.WALKING;
            this.monSpeed = 4;
                this.loadTexture('MON_RIGHT', 0);
                this.animations.add('mon_walk');
                this.animations.play('mon_walk', this.monSpeed, true);

        }
        startWalkingLeft() {
            this.monsterState = MonsterState.WALKING;
            this.monSpeed = -4;
                this.loadTexture('MON_LEFT', 0);
                this.animations.add('mon_lefty');
                this.animations.play('mon_lefty', this.monSpeed, true);
        }
        startJump() {
            this.monsterState = MonsterState.JUMP;
        }
        

    }
}