"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

//circles die met y vergrootten

let width = 700;
let height = context.canvas.height;
let x = width/9
let y = height/9

drawCircles();
function drawCircles(){
    for (let i = 0; i<10; i++){
        for(let e = 0; e<10; e++){
            context.fillStyle = Utils.rgba (102,178,255,0.5)
            let radius = 10 + e*6
            Utils.fillCircle(x*i,y*e,radius);
        }
    }
}