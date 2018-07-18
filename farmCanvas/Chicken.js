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
        //this.sprite.Render(canvasContext, this.currentX, this.currentY);
        canvasContext.drawImage(this.sprite.image, this.currentX, this.currentY);
    }
}