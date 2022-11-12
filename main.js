img="";
status1="";

function preload()
{
    img=loadImage("dog_cat.jpg");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd","modelLoaded");
    document.getElementById("status").innerHTML="status : detecting objects";
}
function modelLoaded()
{
  console.log("model loaded");
  status1=true;
  objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
  if(error)
  {
    console.log(error);
  }
  console.log(results);
}



function draw()
{
  image(img,0,0,640,420);
  fill("#f705a7");
  text("dog",45,75);
  noFill();
  stroke("#f705a7");
  rect(30,60,450,350);

  fill("#fffb1f");
  text("cat",320,120);
  noFill();
  stroke("#fffb1f");
  rect(300,90,270,320);

}