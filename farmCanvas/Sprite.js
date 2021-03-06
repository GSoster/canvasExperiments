class Sprite
{
    constructor(imageLocation, width, height)
    {
        var img = new Image();
        this.isImageLoaded = false;
        img.onload = function(){            
            this.isImageLoaded = true;
        }
        img.src = "./images/chicken_walk.png";
        this.image = img;
        this.width = 32;
        this.height = 32;
        this.frames = 1; // total number of frames
        this.frameIndex = 1;
        this.isLoop = false; // should restart after currentFrame = frames?
        this.pixelSpacing = 0; // difference in pixels from one sprite to another
        this.xDrawPosition = 0; // where to start drawing in the image/sprite
        this.yDrawPosition = 0; // where to start drawing in the image/sprite
        this.row = 0; // which row from the sprite to draw
    }

    /**
     * Draws the current frame of the sprite in the desired position of the canvas.
     * @param {CanvasRenderingContext2D} canvasContext 
     * @param {int} posX 
     * @param {int} posY 
     */
    Update ()
    {   
        this.frameIndex ++;
        if (this.frameIndex > this.frames)   this.frameIndex = 0;        
        this.xDrawPosition = this.frameIndex * this.width + this.pixelSpacing;
        this.yDrawPosition = this.row * this.height;
        //let sourceX = this.frameIndex * this.width; // from where in the image should start drawing
        
    }
}