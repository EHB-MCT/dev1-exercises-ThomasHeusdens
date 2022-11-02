"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
drawRect();

function drawRect(){
    context.fillStyle = "#C00"
    for (let i = 0; i<6; i++){
        for (let e = 0; e<10; e++){
            context.fillRect((50+(i%2*50)) + e*105,50+i*55,100,50);
        }
    }
}