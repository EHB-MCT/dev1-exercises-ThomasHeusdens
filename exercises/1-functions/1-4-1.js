"use strict";

drawRect();

function drawRect() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.lineWidth = 3
   context.strokeStyle = 'black'
   context.fillStyle = '#76b5c5'
   context.beginPath();
   context.rect(50,50,300,300);
   context.stroke();
   context.fill();

   context.lineWidth = 1.5
   context.strokeStyle ='black'
   context.beginPath();
   context.moveTo(50,300);
   context.lineTo(300,300);
   context.lineTo(300,50);
   context.moveTo(100,50);
   context.lineTo(100,250);
   context.lineTo(300,250);
   context.moveTo(300,100);
   context.lineTo(150,100);
   context.lineTo(150,250);
   context.moveTo(150,150);
   context.lineTo(250,150);
   context.lineTo(250,250);
   context.stroke();
}
