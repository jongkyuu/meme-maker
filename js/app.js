const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

let isPainting = false;

function startPainting(event){
    isPainting = true;
    console.log(event);
}

function onMouseUp(event){
    isPainting = false;
}

function onMouseLeave(event){
    if(event.which != 0){
        return;
    }
    
    isPainting = false;
}

function move(event){
    console.log(event.which);
    if(event.which == 0){
        isPainting = false;
    }

    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mousemove", move);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseLeave);
