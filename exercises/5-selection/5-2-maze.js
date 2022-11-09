"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze(){
    context.fillRect(0,0,width,height);
    
    for(let i=0;i<1000;i++){
        for(let j=0;j<100;j++){
            let x = i*10;
            let y = j*10;
            let value = Utils.randomNumber(0,1);
            
            context.strokeStyle = "gray";
            context.lineWidth = "5";
            if(value == 0){
                context.beginPath();
                context.moveTo(x,y+10);
                context.lineTo(x+10,y);
                context.stroke();
            } else if (value == 1){
                context.beginPath();
                context.moveTo(x,y);
                context.lineTo(x+10,y+10);
                context.stroke();   
            }
        }
    }
}