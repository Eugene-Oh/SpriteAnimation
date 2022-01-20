const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./tohruwalk.png")
ASSET_MANAGER.queueDownload("./tohrujump.png")
ASSET_MANAGER.queueDownload("./tohruidle.png")
ASSET_MANAGER.queueDownload("./tohruuppercut.png")
ASSET_MANAGER.queueDownload("./tohrukick.png")
ASSET_MANAGER.queueDownload("./tohrufaint.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Tohru(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
