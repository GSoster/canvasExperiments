var Animal = class 
{

    constructor(currentX, currentY, width = 30, height = 30)
    {
        this.currentX = currentX;
        this.currentY = currentY;
        this.width = width;
        this.height = height;
    }

    /**
     * Distance can be a positive int (move right)
     * or a negative int (move left)
     * @param {int} distance 
     */
    MoveHorizontally(distance)
    {
        this.currentX += distance;
    }

    /**
     * Distance can be a positive int (move down)
     * or a negative int (move up)
     * @param {int} distance 
     */
    MoveVertically(distance)
    {
        this.currentY += distance;
    }

    
     //* Renders the graphic representation of this objetc
     
    Draw(canvasContext)
    {
        canvasContext.save();
        canvasContext.fillStyle="#FF0000";
        canvasContext.fillRect(this.currentX, this.currentY, this.width, this.height);
        canvasContext.restore();
    }

}