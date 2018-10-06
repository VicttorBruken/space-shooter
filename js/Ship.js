loadShip = p =>
    class Ship extends Mover {
        constructor(x, y) {
            let c = {
                pos: new p.PVector(x, y)
            };
            super(c);

            this._maxHp = 100;
            this._maxEnergy = 20;
            this._HP = this.maxHp;
            this._energy = this.maxEnergy;

            this.sprite = p.loadImage(enemy1);

            this._isDead = false;
            this._timer = 0;
            this._team = 0;
        }

        drawHpBar() {
            let padding = 8;
            let mapHp = map(0, this.maxHp, 0, this.size * 2, this.hp);

            p.stroke(0, 255, 0);
            p.strokeWeight(1);
            p.fill(0, 200, 0);
            p.rectMode(p.CENTER);
            p.rect(this.xpos,
                this.ypos - this.size - padding,
                mapHp,
                4);
        }

        customAction() {
            this.update();
            this.shipAction();
            this.playerAction();
        }

        playerAction() {};

        shipAction() {
            if (this.timer > 60) {
                this.reset();
                this.shoot();
            }
        }

        shoot() {
            let bullet = new Bullet(this);

            Game.addBulletE(bullet);
        }

        display() {
            this.renderImage();
            if (this.showRadius) {
                p.noFill();
                p.stroke(100, 150, 220);
                p.strokeWeight(1);
                p.ellipse(this.xpos, this.ypos, this.size * 2, this.size * 2);
            }

            this.drawHpBar();
        }

        renderImage() {
            p.imageMode(p.CENTER);
            p.pushMatrix();
            p.translate(this.xpos, this.ypos);
            p.scale(1, -1);
            p.image(this.sprite, 0, 0, this.size * 2, this.size * 2);
            p.popMatrix();
        }

        reset() {
            this._timer = 0;
        }

        update() {
            this._timer++;
        }

        get timer() {
            return this._timer;
        }

        checkDeath() {
            if (this.hp <= 0) {
                this.die();
            }
        }

        die() {
            this._isDead = true;
        }

        get isDead() {
            return this._isDead;
        }

        get hp() {
            return this._HP;
        }

        get maxHp() {
            return this._maxHp;
        }

        get maxEnergy() {
            return this._maxEnergy;
        }
    }