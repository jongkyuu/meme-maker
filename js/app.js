const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

let isPainting = false;

function onMouseDown(event){
    var offsetX = event.offsetX;
    var offsetY = event.offsetY;
    console.log(`down offsetX, offsetY : ${offsetX}, ${offsetY}`)
    ctx.moveTo(offsetX, offsetY);
    isPainting = true;
}

function onMouseUp(){
    isPainting = false;
}

function onMouseMove(event){
    if(isPainting){
        var offsetX = event.offsetX;
        var offsetY = event.offsetY;
        console.log(`moving offsetX, offsetY : ${offsetX}, ${offsetY}`)
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    }
}

canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mousemove", onMouseMove);