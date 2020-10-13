var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//var gradient = ctx.createLinearGradient(0, 0, 300, 150);
var gradient = ctx.createRadialGradient(150, 72, 0, 150, 72, 72);
gradient.addColorStop(0, 'rgba(99,255,150,.9)');
gradient.addColorStop(1, 'rgba(99,255,150,0)');

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 300, 150);

ctx.strokeStyle = 'darkblue';
ctx.strokeRect(75, 0, 150, 150);

ctx.clearRect(0, 0, 300, 150);

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(80, 60);
ctx.lineTo(110, 80);
ctx.lineTo(125, 40);
ctx.lineTo(140, 80);
ctx.lineTo(170, 60);
ctx.lineTo(150, 100);
ctx.bezierCurveTo(140, 90, 110, 90, 100, 100);
ctx.closePath();
ctx.stroke();
ctx.fill();