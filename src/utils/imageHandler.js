const fs = require("fs");
const path = require("path");
const { createCanvas, loadImage } = require("canvas");

/**
 * Dynamically resizes text based on image dimensions
 * @param {object} ctx - Canvas context
 * @param {string} text - Text to overlay
 * @param {number} maxWidth - Maximum width allowed for text
 */
function adjustFontSize(ctx, text, maxWidth) {
  let fontSize = 50; // Default size
  do {
    ctx.font = `bold ${fontSize}px Arial`;
    fontSize--;
  } while (ctx.measureText(text).width > maxWidth && fontSize > 20);
}

/**
 * Adds multiline text on an image
 * @param {object} ctx - Canvas context
 * @param {string} text - Text to overlay
 * @param {number} x - X-coordinate for text
 * @param {number} y - Y-coordinate for text
 * @param {number} maxWidth - Maximum width allowed
 */
function wrapText(ctx, text, x, y, maxWidth) {
  const words = text.split(" ");
  let line = "";
  let lineHeight = 50;
  words.forEach((word, i) => {
    const testLine = line + word + " ";
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line, x, y);
      line = word + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line, x, y);
}

/**
 * Adds text to an image and saves it
 * @param {string} imagePath - Path to input image
 * @param {string} text - Caption text
 * @returns {Buffer} - Modified image buffer
 */
async function addTextToImage(imagePath, text) {
  const image = await loadImage(imagePath);
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(image, 0, 0, image.width, image.height);
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.textAlign = "center";

  adjustFontSize(ctx, text, image.width - 50);
  wrapText(ctx, text.toUpperCase(), image.width / 2, image.height - 100, image.width - 50);

  return canvas.toBuffer();
}

module.exports = { addTextToImage };
