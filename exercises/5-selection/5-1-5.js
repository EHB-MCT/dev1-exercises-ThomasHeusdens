"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

//witte rechthoek met blauwe border
drawRandomCircles();

function drawRandomCircles() {
    context.fillRect(0,0,width,height)

    for(let i = 0; i < 10000; i++){
        let x = Math.random() * width;
        let y = Math.random() * height;

        if(x < width/4 || y < height/4 || x > width/4*3 || y > height/4*3){
            context.fillStyle = "blue";
        } else{
            context.fillStyle = "white";
        }

        Utils.fillCircle(x,y,5);
    }
}