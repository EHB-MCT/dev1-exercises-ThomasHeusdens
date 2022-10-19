"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();
drawWarpedEllipses();
function draw() {
    context.lineWidth = 2;
    drawWarpedEllipses();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawWarpedEllipses() {
    let i = 0;
    while (i<6) {
        let gray =255-i*50;
        context.fillStyle = Utils.rgb(gray, gray, gray);
        Utils.fillAndStrokeEllipse(200,200,25+i*25,150-i*25);
        i++;
    }
}