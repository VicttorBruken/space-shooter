function main(p) {

    /**
     * TODO
     * 
     * Criar scrolling text
     * Pontuação
     * Dinheiro
     * Upgrades
     * Habilidades
     * Sistema Save / Load
     * 
     */
    
    GameObject = loadGameObject();
    Game = loadGame(p);
    UIObject = loadUIObject(p);
    Button = loadButton(p);
    Mover = loadMover(p);
    Loot = loadLoot(p);
    Bullet = loadBullet(p);
    Ship = loadShip(p);
    Player = loadPlayer(p);
    EnemyShip = loadEnemyShip(p);

    Game.loadGame();
    loadUIManager();
    loadControls(p);

    spawnEnemy = () => {
        if (Game.timer == 180) {
            Game.addEnemy(new EnemyShip(p.random(20, p.width - 20), -50));
            Game.reset();
        }
    }

    player = new Player();
    stage1();

    p.draw = () => {
        drawUI();
        manageKeys();

        if (player.isDead) {
            stage0();
        }
    }
}