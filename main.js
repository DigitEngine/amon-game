var canvas = document.getElementById("cvs");
var ctx = canvas.getContext("2d");

function clear()
{
  ctx.fillStyle = "#f00";
  ctx.fillRect(0, 0, 960, 720);
}

clear();
