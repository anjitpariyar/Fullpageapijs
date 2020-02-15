// var canvas = document.getElementById('tutorial');
// if (canvas.getContext) {
// 	var ctx = canvas.getContext('2d');
// 	ctx.beginPath();
// 	ctx.moveTo(110, 110);
// 	ctx.fillStyle = "#4caf50";
//     ctx.arc(75, 75, 50, 20, 360, false); // Outer circle
//     ctx.arc(105, 75, 50, 20, 360, false);
//     ctx.fill();
//     ctx.moveTo(75, 75);
// 	arcTo(105,300,165 , 100, 100)


// 	var a=1;
// 	b=100;

// } else {
// 	console.log('fuck');
// }

var img= document.getElementById('img');

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      img.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
}

img.addEventListener("dblclick", ()=> {
	toggleFullScreen()
});

