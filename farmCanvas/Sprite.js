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
        //let sourceX = this.frameIndex * this.width; // from where in the image should start drawing
        //canvasContext.rect(posX, posY, this.width, this.height);
        //console.log(canvasContext, posX, posY, '########');
        //canvasContext.drawImage(this.image, 0, 0, this.width, this.height, this.posX, this.posY, this.width, this.height);
        try{
            canvasContext.drawImage(this.image, this.posX, this.posY);
        }catch(e){console.log(e);}
        
        //console.log(document.getElementById('chicken'));
    }
}