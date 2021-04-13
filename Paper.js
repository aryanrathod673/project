class Paper
{
	constructor(x,y)
	{
	
		this.image=loadImage("paper.png")

	
	}
}
	display()

        push()
            imageMode(CENTER)
            fill(255)
            image(this.image, 0,0,this.width,this.height)
            pop()
