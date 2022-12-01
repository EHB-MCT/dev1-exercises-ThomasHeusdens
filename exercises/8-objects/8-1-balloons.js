"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let sizeX = 80;

let baloons = [];

setup();

drawBaloons();

function setup() {
	for (let i = 0; i < 50; i++) {
		let baloon = {
			x: Utils.randomNumber(0, width),
			y: height + sizeX,
			sizeX: 50,
			sizeY: 80,
			vSpeed: Math.random() * -5 - 1,
			hue: Utils.randomNumber(0, 360),
		};
		baloons.push(baloon);
	}
}

function drawBaloons() {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);

	for (let i = 0; i < baloons.length; i++) {
		let baloon = baloons[i];

		context.fillStyle = Utils.hsl(baloon.hue, 100, 50);
		Utils.fillEllipse(baloon.x, baloon.y, baloon.sizeX, baloon.sizeY);
		Utils.drawLine(baloon.x, baloon.y + 40, baloon.x, baloon.y + 150);
		baloon.x += Utils.randomNumber(-1, 1);
		baloon.y += baloon.vSpeed;
	}
	requestAnimationFrame(drawBaloons);
}
