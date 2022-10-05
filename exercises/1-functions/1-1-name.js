"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //T
   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(25,50); 
   context.lineTo(225,50);
   context.lineTo(125,50);
   context.lineTo(125,250);
   context.stroke(); 

   //H
   context.lineWidth = 10;
   context.strokeStyle = 'blue';
   context.beginPath();
   context.moveTo(275,50);
   context.lineTo(275,250);
   context.lineTo(275,150);
   context.lineTo(375,150);
   context.lineTo(375,50);
   context.lineTo(375,250);
   context.stroke();

   //O
   context.fillStyle = 'yellow';
   context.beginPath();
   context.rect(425,50,100,200)
   context.fill();

   //M
   context.lineWidth = 5;
   context.strokeStyle = 'pink';
   context.beginPath();
   context.moveTo(575,250);
   context.lineTo(575,50);
   context.lineTo(650,150);
   context.lineTo(725,50);
   context.lineTo(725,250);
   context.stroke();

   //A
   context.lineWidth = 10;
   context.strokeStyle = 'green';
   context.beginPath();
   context.moveTo(775,250);
   context.lineTo(850,50);
   context.lineTo(925,250);
   context.moveTo(925,150);
   context.lineTo(775,150);
   context.stroke();

   //S
   context.lineWidth = 10;
   context.strokeStyle = 'purple';
   context.beginPath();
   context.moveTo(1125,50);
   context.lineTo(975,50);
   context.lineTo(975,150);
   context.lineTo(1125,150);
   context.lineTo(1125,260);
   context.lineTo(15,260);
   context.stroke();

}
   

