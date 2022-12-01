"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = changeColor;

let frameCount = 0;
let mouseHue = 0;

drawBubbles();

function drawBubbles() {
	if (frameCount % 30 == 0) {
		let x = Utils.randomNumber(0, width);
		let y = Utils.randomNumber(0, height);
		let radius = Utils.randomNumber(25, 100);
		let hue = Utils.randomNumber(0, 360);
		drawBubble(x, y, radius, mouseHue);
	}
	frameCount++;
	requestAnimationFrame(drawBubbles);
}

function drawBubble(x, y, radius, hue) {
	context.fillStyle = Utils.hsl(hue, 50, 50);
	Utils.fillCircle(x, y, radius);
	context.fillStyle = Utils.hsl(hue, 50, 75);
	Utils.fillCircle(x + radius / 3, y - radius / 3, radius / 4);
}

/**
 *
 * @param {MouseEvent} EventData
 */
function changeColor(EventData) {
	mouseHue = (EventData.pageX / width) * 360;
}
