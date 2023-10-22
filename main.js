function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status = Detecting objects";

}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
}

function draw(){
    image(video,0,0,500,400);
}