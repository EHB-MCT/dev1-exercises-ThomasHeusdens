"use strict";

drawRect();

function drawRect() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //Rect top left
   context.strokeStyle = 'red'
   context.beginPath();
   context.rect(50,50,200,200);
   context.stroke();

   //Rect bottom right
   context.strokeStyle = 'red'
   context.beginPath();
   context.rect(250,250,200,200);
   context.stroke();

   //Rect mid 
   context.strokeStyle = 'red'
   context.beginPath();
   context.rect(150,150,200,200);
   context.stroke();
   context.fill();

   //Little Rect right
   context.beginPath();
   context.rect(350,75,75,75);
   context.stroke();

   //Rect top right
   context.beginPath();
   context.rect(425,50,25,25);
   context.fill();

   //Little Rect left
   context.beginPath();
   context.rect(75,350,75,75);
   context.stroke();

   //Rect bottom left
   context.beginPath();
   context.rect(50,425,25,25);
   context.fill();
}