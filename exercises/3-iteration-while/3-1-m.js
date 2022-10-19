"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();
drawWormhole();
function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawWormhole();
}

function drawWormhole() {
    let i = 0;
    while (i<31) {
        Utils.drawLine(50+i*10,50,350-i*10,350);
        Utils.drawLine(50,50+i*10,350,350-i*10);
        i++;
    }
}