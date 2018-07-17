class Sheep extends Animal
{
    constructor (name, currentX, currentY)
    {
        super(name, currentX, currentY);
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
    }
}