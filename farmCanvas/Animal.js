class Animal 
{

    constructor(name, currentX, currentY)
    {
        this.name = name;
        this.currentX = currentX;
        this.currentY = currentY;
        this.maxX = 600; //how far can an animal go
        this.maxY = 600;
        this.minX = 0;
        this.minY = 0;
        this.width = 30;
        this.height = 30;
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
        //if (distance <= this.maxHorizontallyMoveDistance)// it is necessary to work with negative numbers..
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        if (((this.currentX + distance * plusOrMinus) > this.maxX) || ((this.currentX + distance * plusOrMinus) < this.minX)) distance = (-distance);        
        this.currentX += (distance * plusOrMinus);
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
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        if (((this.currentY + distance * plusOrMinus) > this.maxY) || ((this.currentY + distance * plusOrMinus) < this.minY))  distance = (-distance);
        this.currentY += (distance * plusOrMinus);
        this.updated = true;
    }
    

    /**
     * Makes the animal move randomly in any direction
     * TODO: Can be improved by using - to make the movement be to both sides up/down
     */
    Stray () 
    {
        let minDistance = 0;
        let xDistance = Math.floor(Math.random() * (this.maxHorizontallyMoveDistance - minDistance + 1)) + minDistance;
        let yDistance = Math.floor(Math.random() * (this.maxVerticallyMoveDistance - minDistance + 1)) + minDistance;
        this.MoveHorizontally(xDistance);
        this.MoveVertically(yDistance);
    }

    /**
     * Renders the graphic representation of this object
     * @param {CanvasRenderingContext2D}
     */
    Draw(canvasContext)
    {
        this.updated = false;
        canvasContext.save();
        canvasContext.fillStyle="#FF0000";
        canvasContext.fillRect(this.currentX, this.currentY, this.width, this.height);
        canvasContext.restore();
    }

}