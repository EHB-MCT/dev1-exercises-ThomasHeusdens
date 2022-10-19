"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

drawRect();

function drawRect() {
    //eerste laag
    context.fillStyle = "#ea9e24";
    context.beginPath();
    context.rect(0.5,0.5,width,height/4)
    context.fill();

    //tweede laag
    context.fillStyle = "#fc701b";
    context.beginPath();
    context.rect(0,height/4,width,height/4)
    context.fill();

    //derde laag
    context.fillStyle = "#a51f02";
    context.beginPath();
    context.rect(0,height/4*2,width,height/4)
    context.fill();

    //zon
    context.fillStyle = "#ffffc8"
    context.beginPath();
    context.ellipse(width/2,height/4*3,width/4 + height/4,width/4 + height/4,0,0,10,undefined);
    context.fill();
    
    //4e laag
    context.fillStyle = "#00198c";
    context.beginPath();
    context.rect(0,height/4*3,width,height/4)
    context.fill();
}