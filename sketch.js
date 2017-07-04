var x;
var y ;
var visit = [];
for(var i=0; i<400; i++){
        visit[i] = [];
        for(var j=0; j<400; j++){
            visit[i][j] = 0;
        }
    }
function setup() {
    createCanvas(400,400);
    x=200;
    y=200;
    background(51);
   
}
 
function draw() {
    stroke(255,100);
    strokeWeight(2);
    point(x,y);
  //  alert(x+"and"+y);
    if(x>400){
        x-=400;
    }
    if(y>400){
        y-=400;
    }
    var points = [[x+1,y],[x-1,y],[x,y+1],[x,y-1]];
    //alert(points);
    var r = points[Math.floor(Math.random()*(points.length-1))];
   //  alert(r);  
    while(visit[r[0]][r[1]]==1){
        if(points.length>1){
            var index = points.indexOf(r);
            if(index>-1){
                points.splice(index,1);
            }
            r = points[Math.floor(Math.random()*(points.length-1))];
        }
        else{
            r = points[0];
            break;
        }
    }
    x = r[0];
    y = r[1];
    visit[x][y] = 1;
    console.log(x+" "+y);
   
}
