class Chicken extends Animal
{
    constructor (name, currentX, currentY)
    {        
        super(name, currentX, currentY);
        this.positionEnum = 
        {
            TOP: 0,
            LEFT: 1,
            DOWN: 2,
            RIGHT: 3
        };
        this.position = this.positionEnum.TOP; //0 = top, 1 = right, 2 = down, 3 = left. it is the same as rows for the sprite
        this.sprite = new Sprite("./images/chicken_walk.png", 32, 32);
    }

    Draw (canvasContext)
    {
        this.updated = false;
        this.sprite.row = this.position;
        this.sprite.Update();        
        canvasContext.drawImage(this.sprite.image, this.sprite.xDrawPosition, this.sprite.yDrawPosition, this.sprite.width, this.sprite.height, this.currentX, this.currentY, this.sprite.width, this.sprite.height);        
    }
}