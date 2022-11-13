img="";
status1="";
objects=[];

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

  objects=results;

}



function draw()
{
  image(img,0,0,640,420);

  if(status1 != "")
  {
    for(i=0;i<objects.length;i++)
    {
      document.getElementById("status").innerHTML="status : object detected";
      fill("#f705a7");
      percent=floor(objects[i].confidence * 100);
      text(objects[i].label+ " "+percent+"%",objects[i].x,objects[i].y);
      noFill();
      stroke("#f705a7");
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
  }
  //fill("#f705a7");
  //text("dog",45,75);
  //noFill();
  //stroke("#f705a7");
  //rect(30,60,450,350);

}