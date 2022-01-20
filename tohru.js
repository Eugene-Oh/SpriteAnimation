class Tohru {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.size = 2;
        this.movementspeed = 250;
        this.animationspeed = .15
        this.runanimator = new Animator(ASSET_MANAGER.getAsset("./tohruwalk.png"),
        0, 0, 59, 61, 8, this.animationspeed);
        this.jumpanimator2 = new Animator(ASSET_MANAGER.getAsset("./tohrujump.png"),
        0, 0, 74, 63, 8, this.animationspeed);
        this.idleanimator = new Animator(ASSET_MANAGER.getAsset("./tohruidle.png"),
        0, 0, 44, 76, 4, this.animationspeed + .1);
        this.uppercutanimator = new Animator(ASSET_MANAGER.getAsset("./tohruuppercut.png"),
        0, 0, 65, 60, 5, this.animationspeed);
        this.kickanimator = new Animator(ASSET_MANAGER.getAsset("./tohrukick.png"),
        0, 0, 61, 52, 4, this.animationspeed);
        this.faintanimator = new Animator(ASSET_MANAGER.getAsset("./tohrufaint.png"),
        0, 0, 61, 52, 6, this.animationspeed);
    };

    update() {
        this.x += this.movementspeed * this.game.clockTick;
        if (this.x >= 250) {
            this.x = 0
        }
    };

    draw(ctx) {
        this.runanimator.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.size)
        this.jumpanimator2.drawFrame(this.game.clockTick, ctx, 30, this.y + 120, this.size)
        this.idleanimator.drawFrame(this.game.clockTick, ctx, 50, this.y + 240, this.size)
        this.uppercutanimator.drawFrame(this.game.clockTick, ctx, 50, this.y + 360, this.size)
        this.kickanimator.drawFrame(this.game.clockTick, ctx, 50, this.y + 480, this.size)
        this.faintanimator.drawFrame(this.game.clockTick, ctx, 50, this.y + 600, this.size)
    };
}