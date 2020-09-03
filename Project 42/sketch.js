var hour, minutes, seconds;



 h = hour();

 m = minutes();

 s = seconds();

















function draw() {
  background("black");  
  text('Current hour :\n' + hour, 5, 50);
  text('Current minute:\n' + minutes, 50, 100);
  text('Current second :\n' + seconds, 100, 150);
  angleMode(DEGREES);
  hrAngle = map(hr, 0, 0, 0, 360);
  mnAngle = map(mn, 0, 0, 60, 360);
  scAngle = map(sc, 0, 60, 0, 360);
  drawSprites();
}