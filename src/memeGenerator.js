const axios = require("axios");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { createCanvas, loadImage } = require("canvas");

const IMGFLIP_API_URL = "https://api.imgflip.com/get_memes";
const LOCAL_TEMPLATE_PATH = path.join(__dirname, "templates");

/**
 * Get available meme templates from Imgflip API or local storage
 * @returns {Array} - List of meme templates
 */
async function listTemplates() {
  try {
    const response = await axios.get(IMGFLIP_API_URL);
    return response.data.data.memes.map(meme => meme.name);
  } catch (error) {
    console.error("❌ Failed to fetch meme templates. Using local templates.");
    return fs.readdirSync(LOCAL_TEMPLATE_PATH).filter(file => file.endsWith(".png"));
  }
}

/**
 * Create a meme with the given text and template
 * @param {Object} options - Meme options
 * @returns {string} - Path of the generated meme file
 */
async function createMeme({ text, template, imagePath, outputFile, lang, timezone }) {
  try {
    let memeImagePath;

    // Use custom image if provided
    if (imagePath) {
      memeImagePath = imagePath;
    } else {
      // Fetch meme template from Imgflip or use local templates
      const memeTemplates = await listTemplates();
      const selectedTemplate = template === "random" ? memeTemplates[Math.floor(Math.random() * memeTemplates.length)] : template;

      // Download template if using Imgflip
      if (selectedTemplate && selectedTemplate.includes("http")) {
        const response = await axios({ url: selectedTemplate, responseType: "arraybuffer" });
        memeImagePath = path.join(__dirname, "temp", "template.png");
        fs.writeFileSync(memeImagePath, response.data);
      } else {
        memeImagePath = path.join(LOCAL_TEMPLATE_PATH, `${selectedTemplate}.png`);
      }
    }

    // Load image and overlay text
    const memeBuffer = await addTextToImage(memeImagePath, text, lang, timezone);
    const outputPath = path.join(process.cwd(), outputFile);
    fs.writeFileSync(outputPath, memeBuffer);

    return outputPath;
  } catch (error) {
    throw new Error("❌ Error creating meme: " + error.message);
  }
}

/**
 * Overlay text on meme image
 * @param {string} imagePath - Path to the image
 * @param {string} text - Text to overlay
 * @param {string} lang - User's language
 * @param {string} timezone - User's timezone
 * @returns {Buffer} - Processed image buffer
 */
async function addTextToImage(imagePath, text, lang, timezone) {
  const image = await loadImage(imagePath);
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(image, 0, 0, image.width, image.height);
  ctx.fillStyle = "white";
  ctx.font = "bold 40px Arial";
  ctx.textAlign = "center";

  // Position text dynamically
  const x = image.width / 2;
  const y = image.height - 50;

  ctx.fillText(text.toUpperCase(), x, y);

  return canvas.toBuffer();
}

module.exports = { createMeme, listTemplates };
