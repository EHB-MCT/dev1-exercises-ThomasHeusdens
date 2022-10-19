"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();
drawDiagonalGrid();
function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    let step = 150
    while (i < 7 ) {
        let x = 200 + i*25
        let y = 50 + i*25
        Utils.drawLine(200-i*25,y,350-i*25,y+step);
        Utils.drawLine(x,50+i*25,x-step,200+i*25);
        i++ ;
    }
}

//function drawDiagonalGrid() {
    //let i = 0;
    //while(i<7){
        //Utils.drawLine(50+i*25,200+i*25,200+i*25,50+i*25);
        //Utils.drawLine(50+i*25,200-i*25,200+i*25,350-i*25);
        //i++;
    //}