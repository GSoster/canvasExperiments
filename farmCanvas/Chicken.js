class Chicken extends Animal
{
    constructor (name, currentX, currentY)
    {
        super(name, currentX, currentY);
        this.sprite = new Sprite("./images/chicken_walk.png", 32, 32);
    }

    Draw (canvasContext)
    {
        this.updated = false;                
        canvasContext.drawImage(this.sprite.image, 0, 0, this.sprite.width, this.sprite.height, this.currentX, this.currentY, this.sprite.width, this.sprite.height);        
    }
}