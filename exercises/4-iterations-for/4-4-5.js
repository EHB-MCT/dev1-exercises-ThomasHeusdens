"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

//circles die van kleur veranderen in y

let width = 700;
let height = context.canvas.height;
let radius = width/18
let x = width/9
let y = height/9

drawCircles();
function drawCircles(){
    for (let i = 0; i<10; i++){
        for(let e = 0; e<10; e++){
            context.fillStyle = Utils.hsla(e%2*240,100,50,1);
            Utils.fillCircle(x*i,y*e,radius);
        }
    }
}