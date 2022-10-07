"use strict";

drawImg();

function drawImg() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.fillStyle = 'orange'
   context.beginPath();
   context.rect(50,50,300,200)
   context.fill();

   context.fillStyle = 'yellow'
   context.beginPath();
   context.arc(200,250,100,50,150,undefined);
   context.fill();

   context.fillStyle = 'blue'
   context.beginPath();
   context.rect(50,250,300,100)
   context.fill();
}