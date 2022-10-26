"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
drawRect();
drawBubbles();
function drawBubbles() {
    for (let i = 0; i < 50; i++){
        let margin = 200;
        let x = margin + (Math.random()*(width-margin*2));
        let y = margin + (Math.random()*(height-margin*2));
        let radius = Math.random()*80;
        let r = Math.random()*255;
        let g = Math.random()*255;
        let b = Math.random()*255;
        context.fillStyle = Utils.rgba(r,g,b,0.5);
        Utils.fillCircle(x,y,radius);
    }
}
function drawRect(){
    context.fillRect(0,0,width,height);
}