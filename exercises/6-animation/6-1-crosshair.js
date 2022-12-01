"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = drawCrosshair;

let x = 0;
let y = 0;

/**
 *
 * @param {MouseEvent} EventData
 */
function drawCrosshair(EventData) {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	x = EventData.pageX;
	y = EventData.pageY;
	context.lineWidth = 5;
	context.strokeStyle = "red";
	Utils.drawLine(0, y, width, y);
	Utils.drawLine(x, 0, x, height);
}
