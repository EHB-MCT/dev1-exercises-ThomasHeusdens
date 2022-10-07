'use strict'

drawImg();

function drawImg() {

    let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //background rect
   context.fillStyle = 'orange'
   context.beginPath();
   context.rect(100,100,400,400);
   context.fill();

   //top left circle
   context.fillStyle = 'white'
   context.beginPath();
   context.arc(100,100,200,0,10,undefined);
   context.fill();

   //top right circle
   context.fillStyle = 'white'
   context.beginPath();
   context.arc(500,100,200,0,10,undefined);
   context.fill();

   //bottom right circle
   context.fillStyle = 'white'
   context.beginPath();
   context.arc(500,500,200,0,10,undefined);
   context.fill();

   //bottom left circle
   context.fillStyle = 'white'
   context.beginPath();
   context.arc(100,500,200,0,10,undefined);
   context.fill();

   //medial stroke top left bottom right = 1
   context.strokeStyle = 'white'
   context.lineWidth = 10
   context.beginPath();
   context.moveTo(100,100);
   context.lineTo(500,500)
   context.stroke();

   //stroke above 1 = 2
   context.strokeStyle = 'white'
   context.lineWidth = 10
   context.beginPath();
   context.moveTo(150,100);
   context.lineTo(500,450)
   context.stroke();

   //stroke above 2 = 3
   context.strokeStyle = 'white'
   context.lineWidth = 10
   context.beginPath();
   context.moveTo(200,100);
   context.lineTo(500,400)
   context.stroke();

   //stroke under 1 = 4
   context.strokeStyle = 'white'
   context.lineWidth = 10
   context.beginPath();
   context.moveTo(100,150);
   context.lineTo(450,500)
   context.stroke();

   //stroke under 4 = 5
   context.strokeStyle = 'white'
   context.lineWidth = 10
   context.beginPath();
   context.moveTo(100,200);
   context.lineTo(400,500)
   context.stroke();

   //medial stroke bottom left to top right = 1a
   context.strokeStyle = 'white'
   context.lineWidth = 10
   context.beginPath();
   context.moveTo(100,500);
   context.lineTo(500,100);
   context.stroke();

   //stroke above 1a = 2a
   context.strokeStyle = 'white'
   context.lineWidth = 10
   context.beginPath();
   context.moveTo(100,450);
   context.lineTo(450,100);
   context.stroke();

   //stroke above 2a = 3a
   context.strokeStyle = 'white'
   context.lineWidth = 10
   context.beginPath();
   context.moveTo(100,400);
   context.lineTo(400,100);
   context.stroke();

   //stroke under 1a = 4a
   context.strokeStyle = 'white'
   context.lineWidth = 10
   context.beginPath();
   context.moveTo(150,500);
   context.lineTo(500,150);
   context.stroke();

   //stroke under 4a = 5a
   context.strokeStyle = 'white'
   context.lineWidth = 10
   context.beginPath();
   context.moveTo(200,500);
   context.lineTo(500,200);
   context.stroke();

   //border of the rectangle
   context.strokeStyle = 'orange'
   context.lineWidth = 10
   context.beginPath();
   context.rect(100,100,400,400);
   context.stroke();

   //medial rect
   context.rotate(45 * Math.PI / 180);
   context.translate(393,-32);
   context.fillStyle = 'orange'
   context.beginPath();
   context.rect(0,0,64,64);
   context.fill();
}