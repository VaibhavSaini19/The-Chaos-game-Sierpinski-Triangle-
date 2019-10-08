const VERTICES = 3;
let points = [];
let colors = []
// let colors = [[0, 0, 255], [0, 255, 0], [255, 0, 0]];
let curr;

function setup(){
    createCanvas(800, 600);
    background(0);

    stroke(255);
    strokeWeight(4);
    translate(width/2, height/2);
    for(let i=0; i<VERTICES; i++){
        let angle = i * TWO_PI / VERTICES;
        let v = p5.Vector.fromAngle(angle);
        v.mult(300);
        points.push(v);
        point(v.x, v.y);
        colors.push([floor(random(255)), floor(random(255)), floor(random(255))]);
    }
    curr = createVector(points[points.length-1].x, points[points.length-1].y);
    
}

function draw(){
    translate(width/2, height/2);
    strokeWeight(1);
    for(let i=0; i<100; i++){
        let r = floor(random(1, VERTICES+1));
        let target = points[r-1];
        stroke(colors[r-1]);
        curr.x = lerp(curr.x, target.x, 0.5);
        curr.y = lerp(curr.y, target.y, 0.5);
        point(curr.x, curr.y);
    }
}