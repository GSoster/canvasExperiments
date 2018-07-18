class Sprite
{
    constructor(imageLocation, width, height)
    {
        let img = new Image();
        img.onload = function () {this.imageLoaded = true;};
        img.src = imageLocation;
        this.image = img;
        this.width = width || 0;
        this.height = height || 0;
        this.frames = 1; // total number of frames
        this.frameIndex = 0;
        this.isLoop = false; //should restart after currentFrame = frames?
    }

    /**
     * Draws the current frame of the sprite in the desired position of the canvas.
     * @param {CanvasRenderingContext2D} canvasContext 
     * @param {int} posX 
     * @param {int} posY 
     */
    Render (canvasContext, posX, posY)
    {
        let sourceX = this.frameIndex * this.width; // from where in the image should start drawing
        canvasContext.drawImage(this.image, sourceX, 0, this.width, this.height, this.posX, this.posY, this.width, this.height);
    }
}