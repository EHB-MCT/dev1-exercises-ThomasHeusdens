"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
//drawRect();
drawRect1();
drawRect2();
function drawRect1(){
    context.fillStyle= "#C00"
    for(let i = 0; i<3; i++){
        for (let e = 0; e<10; e++){
            context.fillRect(50 + e*105,50+i*110,100,50);
        }
    }
}
function drawRect2(){
    context.fillStyle= '#C00';
    for(let i = 0; i<3; i++){
        for (let e = 0; e<10; e++){
            context.fillRect(100 + e*105,105+i*110,100,50);
        }
    }
}

function drawRect(){
    context.fillStyle = "#C00"
    for (let i = 0; i<6; i++){
        for (let e = 0; e<10; e++){
            context.fillRect((50+(3%(i-2)*50)) + e*105,50+i*55,100,50);
        }
    }
}