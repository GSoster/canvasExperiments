class Sheep extends Animal
{
    constructor (name, currentX, currentY)
    {
        super(name, currentX, currentY);
        var img = new Image();
        this.isImageLoaded = false;
        img.onload = function(){            
            this.isImageLoaded = true;
        }
        img.src = "./images/sheep_walk.png";
        this.image = img;
        this.spriteSize = 110;
    }

    /**
     * Renders the graphic representation of this object
     * @param {CanvasRenderingContext2D}
     */
    Draw(canvasContext)
    {
        this.updated = false;
        canvasContext.save();
        canvasContext.fillStyle="#0000FF";
        canvasContext.fillRect(this.currentX, this.currentY, this.width, this.height);
        canvasContext.restore();

        //if (this.isImageLoaded)
        //{
            //console.log("Image loaded!");            
            canvasContext.drawImage(this.image, 0, 0, this.spriteSize, this.spriteSize, this.currentX, this.currentY, this.spriteSize, this.spriteSize);
        //}
        //else
        //{
          //  console.log("Image didn't load!");
        //}


    }
}