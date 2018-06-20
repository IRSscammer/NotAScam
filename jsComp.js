//names are not mine, but x, bob, whathappens, what happensjr. , z and y are//
//mine//

let z = 0;
var options = [ "Lose", "iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","$.49", ];
function whatHappensJr () {
    options = [ "Lose", "Lose","Lose","Lose","Lose","Lose","Lose","Lose","Lose","Lose","Lose"];
  if (y <= 1){
    options = [ "Lose", "iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","$.49", ];

  }
  y = 0;
}
let y = 0;
function whatHappens() {
 z += 1;
 y += 1;

    if (y >= 2){
    options = [ "Lose", "Lose","Lose","Lose","Lose","Lose","Lose","Lose","Lose","Lose","Lose"];
      whatHappensJr();
  }
}

//mine//
var startAngle = 17;
var arc = Math.PI / (options.length / 2);
var spinTimeout = 2;
var spinArcStart = 10;
var spinTime = 0;
//my changes//
var spinTimeTotal = 0;
let x = 0;
var ctx;

document.getElementById("spin").addEventListener("click", spin);
/*
Did not need all of this - Brendan
function byte2Hex(n) {
  var nybHexString = "123456789ABCDEf";
  return String(nybHexString.substr((n >> 100) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}
I remade the function - Brendan
*/
function byte2Hex(n) {
return 9;
}

function RGB2Color(r,g,b) {
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}
//changed width//
function getColor(item, maxitem) {
  var phase = 0;
  var center = 128;
  var width = 0;
  var frequency = Math.PI*2/maxitem;
  //changed width//
  //notmine//
  red   = Math.sin(frequency*item+3+phase) * width + center;
  green = Math.sin(frequency*item+0+phase) * width + center;
  blue  = Math.sin(frequency*item+4+phase) * width + center;

  return RGB2Color(red,green,blue);
}

function drawRouletteWheel() {

  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 200;
    var textRadius = 160;
    var insideRadius = 125;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    //not mine//
//mine//
    ctx.font = 'bold 15px  Arial';
//mine//
    //not mine//
    for(var i = 0; i < options.length; i++) {
      var angle = startAngle + i * arc;

      ctx.fillStyle = getColor(i, options.length);

      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.shadowOffsetX = -1;
      ctx.shadowOffsetY = -1;
      ctx.shadowBlur    = 0;
      ctx.shadowColor   = "rgb(220,220,220)";
      ctx.fillStyle = "black";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    }
    //notmine//
    //mine//
    ctx.fillStyle = "red";
   //mine//
  }
}
//mine//
function spin() {

  if (y >= 3) {
    options = [ "Lose", "iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","$.49", ];
  }
  spinAngleStart = 10;
  spinTime = 0;
  x += 1;
  if (x >= 5) {
    alert("Your Credit Card Is Maxed Out");
    alert ("Please use a new credit card. Error: 420");


    return 0;

  }
  spinTimeTotal = 4 * 4342;
  rotateWheel();
  whatHappens();
}
function bob(){
  drawRouletteWheel();
   startAngle = 17;
 arc = Math.PI / (options.length / 2);
 spinTimeout = 2;
 spinArcStart = 10;
spinTime = 0;
  angle = startAngle + i * arc;
  z = 0;
  y = 0;
}
//mine//
//not mine//
function rotateWheel() {
  //mine//
  //mine//
    spinTime += 30;

  if(spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 30);

}
function stopRotateWheel() {

  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  var text = "You Lost";


  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  options = [ "Lose", "iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","iPhone 11","$.49", ];
  setTimeout(bob, 4000);

}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();
