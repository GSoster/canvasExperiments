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

        this.continuousDirectionMovement = 3; // how many times the animal has to go to the same direction
        this.currentContinousDirectionMovementCounter = 0; // how many times the animal actually went in the same direction
        this.positionEnum = 
        {
            TOP: 0,
            LEFT: 1,
            DOWN: 2,
            RIGHT: 3
        };
        this.currentMovementPosition = this.positionEnum.TOP;
    }

    /**
     * For internal Use:
     * Only updates the movement value IF the movement + the distance is 
     * inside the boards.
     * @param {int} currentValue (this.currentX or this.currentY)
     * @param {int} minValue  (this.minX or this.minY)
     * @param {int} maxValue (this.maxX or this.maxY)
     * @param {int} distance (the distance that we want to move)
     * @param {int} size (the size of the graphic element: width for horizontal/x movement, height for vertical/y movement)
     */
    Move(currentValue, minValue, maxValue, distance, size)
    {
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        if ( (currentValue + distance * plusOrMinus) > minValue &&  (currentValue + distance * plusOrMinus) < maxValue)
            currentValue += distance * plusOrMinus;
        return currentValue;
    }

    /**
     * Distance can be a positive int (move right)
     * or a negative int (move left)
     * @param {int} distance 
     */
    MoveHorizontally(distance)
    {
        this.currentX = this.Move(this.currentX, this.minX, this.maxX, distance, this.width)
        this.updated = true;
    }

    /**
     * Distance can be a positive int (move down)
     * or a negative int (move up)
     * @param {int} distance 
     */
    MoveVertically(distance)
    {
        this.currentY = this.Move(this.currentY, this.minY, this.maxY, distance, this.height)
        this.updated = true;
    }
    

    /**
     * Makes the animal move randomly in any direction
     */
    Stray () 
    {
        let minDistance = 0;
        let xDistance = Math.floor(Math.random() * (this.maxHorizontallyMoveDistance - minDistance + 1)) + minDistance;
        let yDistance = Math.floor(Math.random() * (this.maxVerticallyMoveDistance - minDistance + 1)) + minDistance;
        // moves only in one direction
        if (this.currentMovementPosition == this.positionEnum.LEFT || this.currentMovementPosition == this.positionEnum.RIGHT)
            this.MoveHorizontally(xDistance);
        else
            this.MoveVertically(yDistance);

        if (this.currentContinousDirectionMovementCounter >= this.continuousDirectionMovement)
        {
            this.currentMovementPosition = Math.floor(Math.random() * (3)) + 1;// same number of possibilities that exists in the enum
            this.continuousDirectionMovement = this.currentMovementPosition * 3;
        }
        console.log(this.continuousDirectionMovement);
        this.currentContinousDirectionMovementCounter++;

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