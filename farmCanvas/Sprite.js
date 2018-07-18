class Sprite
{
    constructor(imageLocation, width, height)
    {
        let img = new Image();
        img.onload = function () {this.imageLoaded = true;};
        img.src = imageLocation;
        this.image = img;
        this.width = width || 0;
        this.height = height || 0;
        this.frames = 1; // total number of frames
        this.currentFrame = 0;
        this.isLoop = false; //should restart after currentFrame = frames?
    }
}