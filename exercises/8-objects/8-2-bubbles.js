"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let isPlaying = true;

let size = 50;

let balls = [];

document.onmousedown = click;
setup();
drawBubble();

function setup() {
	for (let i = 0; i < 40; i++) {
		let ball = {
			size: Utils.randomNumber(30, 50),
			x: Utils.randomNumber(size, width - size),
			y: Utils.randomNumber(size, height - size),
			hSpeed: Utils.randomNumber(1, 5),
			vSpeed: Utils.randomNumber(1, 5),
			hue: Utils.randomNumber(0, 360),
		};
		balls.push(ball);
	}
}

function drawBubble() {
	if (isPlaying) {
		context.fillStyle = "white";
		context.fillRect(0, 0, width, height);

		for (let i = 0; i < balls.length; i++) {
			let ball = balls[i];

			context.fillStyle = Utils.hsl(ball.hue, 100, 50);
			Utils.fillCircle(ball.x, ball.y, ball.size);
			ball.x += ball.hSpeed;
			ball.y += ball.vSpeed;
			if (ball.x >= width - size || ball.x <= ball.size) {
				ball.hSpeed *= -1;
			}
			if (ball.y >= height - size || ball.y <= ball.size) {
				ball.vSpeed *= -1;
			}
		}

		requestAnimationFrame(drawBubble);
	}
}

/**
 *
 * @param {MouseEvent} e
 */
function click(e) {
	for (let i = 0; i < balls.length; i++) {
		let ball = balls[i];
		if (Utils.calculateDistance(e.pageX, e.pageY, ball.x, ball.y) < ball.size) {
			isPlaying = false;
			context.fillStyle = "red";
			Utils.fillCircle(e.pageX, e.pageY, ball.size / 2);
		}
	}
}
