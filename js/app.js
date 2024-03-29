const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

let isPainting = false;

function onMouseMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }

    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(event) {
    isPainting = true;
}

function canclePainting(event) {
    console.log("mouse Leave");
    isPainting = false;
}

function onMouseEnter(event) {
    console.log("mouse Enter");
    console.log(event);
    console.dir(event);
    if (event.buttons === 1) {
        ctx.beginPath();
        isPainting = true;
    }
}

canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mouseup", canclePainting);
canvas.addEventListener("mouseleave", canclePainting);
canvas.addEventListener("mouseenter", onMouseEnter);
