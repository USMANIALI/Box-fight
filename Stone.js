class Stone{
    constructor(x ,y){
        var options ={
            'restitution'  :0.8,
            'friction':0.9,
            'density':12
        }
            this.x=x;
            this.y=y;
            this.body=Bodies.rectangle(this.x, this.y,60,60, options)
            World.add(world, this.body);
        }
        
    
    
        
        
            
        
        display()
        {
            var stonepos=this.body.position;			
                push()
                translate(stonepos.x, stonepos.y);
                rectMode(CENTER)
                strokeWeight(4);
                stroke("white");
                fill("black");               
                rect(0,0,60,60)
                pop()
        }
    
    }