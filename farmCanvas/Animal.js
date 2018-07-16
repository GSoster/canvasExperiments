var Animal = class 
{

    constructor(currentX, currentY)
    {
        this.currentX = currentX;
        this.currentY = currentY;        
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

}