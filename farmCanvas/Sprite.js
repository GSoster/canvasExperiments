class Sprite
{
    constructor(imageLocation, width, height)
    {
        var img = new Image();
        img.onload = function () {this.imageLoaded = true;};
        img.src = imageLocation;
        this.image = img;        
        this.width = 32;
        this.height = 32;
        this.frames = 1; // total number of frames
        this.frameIndex = 1;
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
        canvasContext.rect(posX, posY, this.width, this.height);
        //canvasContext.drawImage(this.image, 0, 0, this.width, this.height, this.posX, this.posY, this.width, this.height);
        //canvasContext.drawImage(document.getElementById('chicken'), this.posX, this.posY);
        //console.log(document.getElementById('chicken'));
    }
}