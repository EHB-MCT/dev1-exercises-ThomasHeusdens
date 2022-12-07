"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = movePaddle;

let x = width / 2;
let y = height / 2;
let x2 = width / 2;

let score1 = 0;
let score2 = 0;

let xSpeed = 3;
let xSpeed2 = 3;
let ySpeed = 3;

let playerX = width / 2 - 75;

setup();
function setup() {
	x += xSpeed;
	y += ySpeed;
	x2 += xSpeed2;

	context.fillStyle = "black";
	//fillrect = method
	context.fillRect(0, 0, width, height);
	//fillstyle = property
	context.fillStyle = "white";

	context.fillRect(x2, 75, 150, 25);
	context.fillRect(playerX, height - 75, 150, 25);
	Utils.fillCircle(x, y, 10);

	if (x2 >= width - 150) {
		xSpeed2 *= -1;
	}

	if (x2 <= 0) {
		xSpeed2 *= -1;
	}

	let n = width / 100;
	for (let i = 0; i < n; i++) {
		context.fillRect(0 + i * 100, height / 2 - 12.5, 50, 25);
	}

	if (y >= height) {
		score1++;
		y = height / 2;
		x = width / 2;
		xSpeed = 3;
	}
	if (y <= 0) {
		score2++;
		y = height / 2;
		x = width / 2;
		xSpeed = 3;
		ySpeed = 3;
	}

	if (x >= width - 10) {
		xSpeed *= -1;
	}

	if (x <= 10) {
		xSpeed *= -1;
	}

	if (y >= height - 100) {
		if (x >= playerX && x <= playerX + 150) {
			ySpeed *= -1;
		}
	}

	context.font = "normal 50pt Arial";
	context.fillText(score1, 50, height / 2 - 100);
	context.fillText(score2, 50, height / 2 + 150);

	requestAnimationFrame(setup);
}
/**
 *
 * @param {MouseEvent} e
 */
function movePaddle(e) {
	playerX = e.pageX;
}
