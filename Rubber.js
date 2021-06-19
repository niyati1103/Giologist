class Rubber{
	constructor(x,y,r)
	{
	var options = {
		restitution:0.3,
		friction:5,
		density:1
		}
		
		this.body=Bodies.circle(x,y,r, options)
		World.add(world, this.body);

	}
	display()
	{
		var rubberpos=this.body.position;		
		push()
		translate(rubberpos.x, rubberpos.y);
		rectMode(CENTER)
		strokeWeight(2);
		stroke("black");
		fill("darkblue")
		ellipse(0,0,50,50);
		pop()
	}

}