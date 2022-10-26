"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontal = 60;
let vertical = 30;

let width = 600;
let height = 300;

drawRect();
drawLines();

function drawRect(){
    context.fillStyle = 'orange'
    context.fillRect(0,0,width,height);
}

function drawLines() {
    context.strokeStyle = 'white'
    let step = width/horizontal
    for (let i = 0; i <= horizontal; i++){
        Utils.drawLine(step*i,0,width-i*step,height);
    }
    for (let i = 0; i < vertical; i++){
        Utils.drawLine(0,i*step,width,height-i*step);
    }
}

