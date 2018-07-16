var Animal = class 
{

    constructor(currentX, currentY, width = 30, height = 30)
    {
        this.currentX = currentX;
        this.currentY = currentY;
        this.width = width;
        this.height = height;
        //an monkey moves vertically more than a cow, so it is necessary to define limit for those values
        this.maxHorizontallyMoveDistance = 100; //how much an animal can move horizontally each time
        this.maxVerticallyMoveDistance = 100; //how much an animal can move vertically each time

        this.updated = false; //was updated since last iteraction?
    }

    /**
     * Distance can be a positive int (move right)
     * or a negative int (move left)
     * @param {int} distance 
     */
    MoveHorizontally(distance)
    {
        if (distance <= this.maxHorizontallyMoveDistance)// it is necessary to work with negative numbers..
        this.currentX += distance;
        this.updated = true;
    }

    /**
     * Distance can be a positive int (move down)
     * or a negative int (move up)
     * @param {int} distance 
     */
    MoveVertically(distance)
    {
        //if (distance <= this.maxVerticallyMoveDistance)// it is necessary to work with negative numbers..
        this.currentY += distance;
        this.updated = true;
    }

    
     //* Renders the graphic representation of this objetc
     
    Draw(canvasContext)
    {
        this.updated = false;
        canvasContext.save();
        canvasContext.fillStyle="#FF0000";
        canvasContext.fillRect(this.currentX, this.currentY, this.width, this.height);
        canvasContext.restore();
    }

}