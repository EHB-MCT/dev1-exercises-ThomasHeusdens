"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRect(75,75,400);
drawRect(100,100,350);
drawRect(125,125,300);
drawRect(150,150,250);
drawRect(175,175,200);
drawRect(200,200,150);
drawRect(225,225,100);
drawRect(250,250,50);

function drawRect(x,y,size) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + "," + g + "," + b + ")"; 
    context.fillStyle = color;
    context.beginPath();
    context.rect(x,y,size,size);
    context.fill();
}



