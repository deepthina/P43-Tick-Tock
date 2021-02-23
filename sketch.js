var hr, min, sec;
var hrAngle, minAngle, secAngle;


function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);


}

function draw() {
  background("black");

  translate(200, 200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  hrAngle = map(hr % 12, 0, 12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);


  //Blue= hour, green = minutes, red = seconds

  push();
  rotate(secAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();


  push();
  rotate(minAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 70, 0);
  pop();


  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();


  //arc(x, y, w, h, start, stop, [mode], [detail])

  noFill();
  stroke("red");
  strokeWeight(7);
  arc(0, 0, 260, 260, 0, secAngle);

  noFill();
  stroke("green");
  strokeWeight(7);
  arc(0, 0, 280, 280, 0, minAngle);


  noFill();
  stroke("blue");
  strokeWeight(7);
  arc(0, 0, 300, 300, 0, hrAngle);




}