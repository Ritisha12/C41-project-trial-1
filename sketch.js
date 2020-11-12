var umbrella
 var maxDrops=100;
function preload(){
    
}

function setup(){
   
    umbrella=new Umbrella(150,500,10)
    
for (var i=0; i<maxDrops; i++){
drops.push(new createDrop(random(0,400), random(0,400)));
}
}

function draw(){
    createCanvas(300,600)
    umbrella.display()
}   

