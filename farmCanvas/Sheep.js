class Sheep extends Animal
{
    constructor (name, currentX, currentY)
    {
        super(name, currentX, currentY);
        this.image = new Image();
        this.image.src = "images/frame-sprite-animation.png";
        this.isImageLoaded = false;
        this.image.onload = function (){this.isImageLoaded = true;}
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

        if (this.isImageLoaded)
        {
            console.log("Image loaded!");
            canvasContext.drawImage(this.image, 0, 0, 40, 40, this.currentX, this.currentY, 40, 40);
        }
        else
        {
            console.log("Image didn't load!");
        }


    }
}