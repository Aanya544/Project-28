class Tree {
constructor (x,y) {
var options = {
isStatic : true
}
this.body=Bodies.rectangle(x,y,this.width,this.height,options);
this.width=300;
this.height=800;
this.image=loadImage("Plucking mangoes/tree.png")
World.add(world,this.body);
}

display(){
    var pos =this.body.position;
    imageMode(CENTER);
    fill("brown");
    image(this.image,pos.x, pos.y, this.width, this.height);

}



}