
let xc, yc,yt;

function setup() {

  createCanvas(720, 720);

  xc = width / 2;
  yc = 24;

  //position of the TNT box
  bottom = (height / 2)+(height / 4);

  boom = false;
  tik_tak = false;
  explosion_duration_counter = 0;

  //time controls
  duration_explosion = 100;
  spark_time = .8;

  //positon of the string spark
  yt = -height+(height / 4)+24


  //Random star generator for night sky
  random_sky_x1 = random(0,width);
  random_sky_y1 = random(0,bottom);
  random_sky_x2 = random(0,width);
  random_sky_y2 = random(0,bottom);
  random_sky_x3 = random(0,width);
  random_sky_y3 = random(0,bottom);
  random_sky_x4 = random(0,width);
  random_sky_y4 = random(0,bottom);
  random_sky_x5 = random(0,width);
  random_sky_y5 = random(0,bottom);
  random_sky_x6 = random(0,width);
  random_sky_y6 = random(0,bottom);
  random_sky_x7 = random(0,width);
  random_sky_y7 = random(0,bottom);
  random_sky_x8 = random(0,width);
  random_sky_y8 = random(0,bottom);
  random_sky_x9 = random(0,width);
  random_sky_y9 = random(0,bottom);
  random_sky_x10 = random(0,width);
  random_sky_y10 = random(0,bottom);
  random_sky_x11 = random(0,width);
  random_sky_y11 = random(0,bottom);
  random_sky_x12 = random(0,width);
  random_sky_y12 = random(0,bottom);
  random_sky_x13 = random(0,width);
  random_sky_y13 = random(0,bottom);
  random_sky_x14 = random(0,width);
  random_sky_y14 = random(0,bottom);
  random_sky_x15 = random(0,width);
  random_sky_y15 = random(0,bottom);

}

function draw() {

  background(36, 0, 66);
  stroke(255, 247, 0);
  strokeWeight(random(0,7));
  fill(255, 247, 0);
  point(random_sky_x1,random_sky_y1);
  point(random_sky_x2,random_sky_y2);
  point(random_sky_x3,random_sky_y3);
  point(random_sky_x4,random_sky_y4);
  point(random_sky_x5,random_sky_y5);
  point(random_sky_x6,random_sky_y6);
  point(random_sky_x7,random_sky_y7);
  point(random_sky_x8,random_sky_y8);
  point(random_sky_x9,random_sky_y9);
  point(random_sky_x10,random_sky_y10);
  point(random_sky_x11,random_sky_y11);
  point(random_sky_x12,random_sky_y12);
  point(random_sky_x13,random_sky_y13);
  point(random_sky_x14,random_sky_y14);
  point(random_sky_x15,random_sky_y15);



  if(boom == false) {
    explosion_duration_counter = 0;
    stroke(20);
    fill(20);
    strokeWeight(1);
    rect((width / 2)-8, bottom,18, yt);


    //wick spark of TNT
    if(tik_tak == false){
      stroke(255, 132, 0);
      fill(255, 132, 0);
      ellipse(xc, yc, 33, 33);
      tik_tak = true;
    }
    else{
      stroke(20);
      fill(0);
      ellipse(xc, yc, 33, 33);
      tik_tak = false;
    }



    //TNT drawing
    stroke(0);
    strokeWeight(10);
    fill(168, 40, 40);
    square((width / 2)-80, bottom, 170);
    fill(0);
    point((width / 2)+50, bottom+20);
    point((width / 2)+70, bottom+20);
    point((width / 2)+70, bottom+40);
    rect((width / 2)-80, bottom+100, 170, 40);

    //positions and animation of the wick burning
    xc = xc + random(-.1, .1);
    yc = yc + spark_time;
    yt = yt + spark_time;


    // TNT activation
    if (yc >= bottom) {
      yc = bottom;
      boom = true;
    }
  }
  else {
    explosion_duration_counter = explosion_duration_counter+1;
    //Boom
    background(random(0, 255),random(0, 255),random(0, 255));
    stroke(212, 255, 41);
    strokeWeight(5);
    fill(random(0, 255),random(0, 255),random(0, 255));

    push();
    translate(width * 0.4, height * 0.9);
    rotate(frameCount / 200.0);
    star(random(-2,2), random(-20,20), 40, 60, 5);
    pop();

    push();
    translate(width * 0.5, height * 0.6);
    rotate(frameCount / -100.0);
    star(random(-2,2), random(-20,20), 30, 70, 5);
    pop();

    push();
    translate(width * 0.3, height * 0.7);
    rotate(frameCount / -100.0);
    star(random(-2,2), random(-20,20), 30, 60, 5);
    pop();

    push();
    translate(width * 0.6, height * 0.9);
    rotate(frameCount / -100.0);
    star(random(-2,2), random(-20,20), 30, 60, 5);
    pop();

    push();
    translate(width * 0.7, height * 0.7);
    rotate(frameCount / -100.0);
    star(random(-2,2), random(-20,20), 30, 70, 5);
    pop();

    //control of animation duration
    if(explosion_duration_counter == duration_explosion){
      xc = width / 2;
      yc = 24;
      bottom = (height / 2)+(height / 4);
      boom = false;
      tik_tak = false

      yt = -height+(height / 4)+24
      clear();
    }
  }


}


//star drawing function
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
