function getRandomNumber(size) {
// let getRandomNumber= size => {}
return Math.floor(Math.random()*size);
}

let getDistance = (e, target)=>{
let diffx = e.offsetX - target.x;
let diffy = e.offsetY - target.y;
return Math.sqrt((diffx*diffx)+(diffy*diffy))
}

let getDistanceHint = distance =>{
if(distance<30){
return "boiling Hot!"
}else if(distance<40){
return "really Hot";
}else if(distance<60){
return "Hot";
}else if(distance<100){
return "warm";
}else if(distance<180){
return "cold";
}else if(distance<180){
return "Really cold";
}else{
return "Freezing!";}
}