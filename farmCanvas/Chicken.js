class Chicken extends Animal
{
    constructor (name, currentX, currentY)
    {
        super(name, currentX, currentY);
        this.sprite = new Sprite("./images/sheep_walk.png", 110, 110);
    }

    Draw (canvasContext)
    {
        this.updated = false;
        this.sprite.Render(canvasContext, this.currentX, this.currentY);
    }
}