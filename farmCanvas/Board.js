class Board
{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
        this.squareSize = 60; //in pixels

    }

    /**
     * Draw columns and lines to the canvas
     * @param {CanvasRenderingContext2D} canvasContext 
     */
    Draw (canvasContext)
    {
        canvasContext.save();
        canvasContext.strokeStyle = 'black';
        canvasContext.lineWidth = 4;
        // draw Column
        for (var i = 0; i < this.height; i += this.squareSize)
        {
            canvasContext.moveTo(i, 0);
            canvasContext.lineTo(i, this.height);
            canvasContext.stroke();
        }
        // draw Lines
        for (var j = 0; j < this.width; j += this.squareSize)
        {
            ctx.moveTo(0, j);
            ctx.lineTo(this.width, j);
            ctx.stroke();
        }

        canvasContext.restore();
    }

    /**
     * Clear Canvas
     * @param {CanvasRenderingContext2D} canvasContext 
     */
    Clear(canvasContext)
    {
        canvasContext.clearRect(0, 0, this.width, this.height);
    }
}