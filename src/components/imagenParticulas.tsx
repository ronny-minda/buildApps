import { useEffect } from "react"

const ImagenParticulas = () => {

  useEffect(() => {
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];


// get mouse mouse position ///////////////////////////////
let mouse = {
	x: null,
	y: null,
    radius: 80
}
window.addEventListener('mousemove', 
	function(event){
		mouse.x = event.x + canvas.clientLeft/2;
		mouse.y = event.y + canvas.clientTop/2;
});

function drawImage(){
    let imageWidth = png.width || png.naturalWidth;
    let imageHeight = png.height || png.naturalHeight;
    const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    class Particle {
        constructor(x, y, color, size){
            this.x = x + canvas.width/2-png.width*2,
            this.y = y + canvas.height/2-png.height*2,
            this.color = color,
            this.size = 2,
            this.baseX = x + canvas.width/2-png.width*2,
            this.baseY = y + canvas.height/2-png.height*2,
            this.density = ((Math.random() * 10) + 2);
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
            ctx.closePath();
            ctx.fill();
        }
        update() {
            ctx.fillStyle = this.color;
            // check mouse position/particle position - collision detection
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx*dx + dy*dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            // distance past which the force is zero
            var maxDistance = 80;
            var force = (maxDistance - distance) / maxDistance;

            // if we go below zero, set it to zero.
            if (force < 0) force = 0;

            let directionX = (forceDirectionX * force * this.density) * 0.9;
            let directionY = (forceDirectionY * force * this.density) * 0.9;

            if (distance < mouse.radius + this.size){
                this.x -= directionX;
                this.y -= directionY;
            } else {
                if (this.x !== this.baseX ) {
                    let dx = this.x - this.baseX;
                    let dy = this.y - this.baseY;
                    this.x -= dx/5;
                } if (this.y !== this.baseY) {
                    let dx = this.x - this.baseX;
                    let dy = this.y - this.baseY;
                    this.y -= dy/5;
                }
            }
            this.draw();
        }
    }
    function init(){
        particleArray = [];

        for (var y = 0, y2 = data.height; y < y2; y++) {
            for (var x = 0, x2 = data.width; x < x2; x++) {
                if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
                    let positionX = x;
                    let positionY = y;
                    let color = "rgb("+data.data[(y * 4 * data.width)+ (x * 4)]+","+data.data[(y * 4 * data.width)+ (x * 4) +1]+","+data.data[(y * 4 * data.width)+ (x * 4) +2]+")";

                    particleArray.push(new Particle(positionX*4, positionY*4, color));

                }
            }
        }
        
    }
    function animate(){
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(255,255,255,.2)';
        ctx.fillRect(0,0,innerWidth,innerHeight);
       // ctx.clearRect(0,0,innerWidth,innerHeight);
	    
	
	    for (let i = 0; i < particleArray.length; i++){
            particleArray[i].update();
	    }
    }
    init();
    animate();

    // RESIZE SETTING - empty and refill particle array every time window changes size + change canvas size
    window.addEventListener('resize',
	function(){
		canvas.width = innerWidth;
		canvas.height = innerHeight;
		init();
	});
}


var png = new Image();
png.src = "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"

// Run drawImage after page has been fully loaded

    console.log('page has loaded');
    ctx.drawImage(png, 0, 0);
    drawImage();

  }, [])

  return (
    <>
      <canvas className="bg-red-600 h-full w-full" id="canvas1"></canvas>
    </>
  )
}

export default ImagenParticulas
