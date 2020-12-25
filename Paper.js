class Paper {
    constructor(x,y,radius,options) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        this.image = loadImage("sprites/paper.png");
        World.add(world, this.body);
    }

    display() {
       fill("White");
       circle(this.body.position.x,this.body.position.y,this.radius);

    }
}