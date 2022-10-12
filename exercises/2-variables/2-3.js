"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;


drawRect();

function drawRect() {
    //linkse donker blauwe rect
    context.fillStyle = "#063970";
    context.beginPath();
    context.rect(0,0,width/3,height/8*5)
    context.fill();
    
    //linkse licht blauwe rect
    context.fillStyle = "#0596dc";
    context.beginPath();
    context.rect(0,height/8*5,width/3,height/8*3);
    context.fill();

    //middelste grijze rect
    context.fillStyle = "#eeeee4";
    context.beginPath();
    context.rect(width/3,0,width/3,height);
    context.fill();

    //rechtse donker blauwe rect
    context.fillStyle = "#063970";
    context.beginPath();
    context.rect(width/3*2,0,width/3,height/8*5);
    context.fill();

    //rechtse licht blauwe rect
    context.fillStyle = "#0596dc";
    context.beginPath();
    context.rect(width/3*2,height/8*5,width/3,height/8*3);
    context.fill();

    //horizontale rode rect
    context.fillStyle = "red";
    context.beginPath();
    context.rect(0,height/16*2,width,height/6*2);
    context.fill();
}