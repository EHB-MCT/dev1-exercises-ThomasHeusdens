"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
green();
function green(){
    context.fillStyle = "green"
    context.fillRect(0,0,context.canvas.width, context.canvas.height);
}

function drawRect(x,y){
    context.fillStyle ="white";
    context.fillRect(x,y,150,300);
}

function drawHeart(x, y) {
    context.fillStyle = "red";
    context.beginPath();
    context.moveTo(x, y - 10);
    context.bezierCurveTo(x, y - 25, x + 40, y - 15, x, y + 20);
    context.moveTo(x, y - 10);
    context.bezierCurveTo(x, y - 25, x - 40, y - 15, x, y + 20);
    context.fill();
}

function drawClover(x, y) {
    context.fillStyle = "black"
    Utils.fillCircle(x - 10, y + 5, 10);
    Utils.fillCircle(x + 10, y + 5, 10);
    Utils.fillCircle(x, y - 10, 10);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();

}

function drawPike(x, y) {
    context.fillStyle ="black"
    context.beginPath();
    context.moveTo(x, y - 20);
    context.bezierCurveTo(x, y - 30, x + 40, y + 20, x, y + 10);
    context.moveTo(x, y - 20);
    context.bezierCurveTo(x, y - 30, x - 40, y + 20, x, y + 10);
    context.fill();
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();
}

function drawDiamond(x, y) {
    context.fillStyle = "red";
    context.beginPath();
    context.moveTo(x - 20, y);
    context.lineTo(x, y - 20);
    context.lineTo(x + 20, y);
    context.lineTo(x, y + 20);
    context.fill();
}

document.getElementById("roll").onclick = roll;
function roll(){

    let value = Number(document.getElementById("input1").value);
    let draw = Utils.randomNumber(1,4);

    for (let i = 0; i<value;i++){
        drawRect(50+i*155,50);
        if(draw == 1){
            drawClover(125+i*155,175);
            let random = Utils.randomNumber(1,10)
            context.fillStyle = "black";
            context.textAlign = "center";
            context.font = "normal 40pt Arial";
            context.fillText(random,125+i*155,250);
        } else if (draw == 2){
            drawDiamond(125+i*155,175);
            let random = Utils.randomNumber(1,10)
            context.fillStyle = "red";
            context.textAlign = "center";
            context.font = "normal 40pt Arial";
            context.fillText(random,125+i*155,250);
        } else if (draw == 3){
            drawHeart(125+i*155,175);
            let random = Utils.randomNumber(1,10)
            context.fillStyle = "red";
            context.textAlign = "center";
            context.font = "normal 40pt Arial";
            context.fillText(random,125+i*155,250);
        } else if (draw == 4){
            drawPike(125+i*155,175);
            let random = Utils.randomNumber(1,10)
            context.fillStyle = "black";
            context.textAlign = "center";
            context.font = "normal 40pt Arial";
            context.fillText(random,125+i*155,250);
        }
    }
}