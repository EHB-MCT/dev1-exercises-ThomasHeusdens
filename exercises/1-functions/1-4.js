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

   context.lineWidth = 3
   context.strokeStyle = 'black'
   context.fillStyle = '#76b5c5'
   context.beginPath();
   context.rect(50,50,250,250)
   context.stroke();
   context.fill();

   context.lineWidth = 3
   context.strokeStyle = 'black'
   context.fillStyle = '#76b5c5'
   context.beginPath();
   context.rect(100,50,200,200)
   context.stroke();
   context.fill();

   context.lineWidth = 3
   context.strokeStyle = 'black'
   context.fillStyle = '#76b5c5'
   context.beginPath();
   context.rect(150,100,150,150)
   context.stroke();
   context.fill();

   context.lineWidth = 3
   context.strokeStyle = 'black'
   context.fillStyle = '#76b5c5'
   context.beginPath();
   context.rect(150,150,100,100)
   context.stroke();
   context.fill();
}