document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('mycanvas');
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.fillRect(20, 20, 300, 300);
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = "grey";
  ctx.lineWidth = 7;
  ctx.stroke();
  ctx.fillStyle = "purple";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(175, 150);
  ctx.lineTo(150, 75);
  ctx.lineTo(100, 25);
  ctx.fillStyle = "purple";
  ctx.lineWidth = 7;
  ctx.strokeStyle = "grey";
  ctx.fill();
});