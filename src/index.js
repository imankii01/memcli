#!/usr/bin/env node
const { program } = require("commander");
const langDetector = require("./utils/langDetector");
const memeGenerator = require("./memeGenerator");
const randomMsgs = require("./utils/randomMsgs");

// Package details from package.json
const packageInfo = require("../package.json");

// Get User Language & Timezone
const userLang = langDetector.detectLanguage();
const userTimezone = langDetector.detectTimezone();

// Setup CLI commands
program
  .name("memecli")
  .version(packageInfo.version)
  .description("🎉 CLI-Based Meme Generator - Generate & Share Memes from Your Terminal!")
  .argument("[text]", "Caption for the meme")
  .option("-t, --template <name>", "Choose a meme template (Drake, ThisIsFine, ExpandingBrain)")
  .option("-i, --image <path>", "Use your own image for meme generation")
  .option("-o, --output <filename>", "Specify output file name (default: meme.png)")
  .option("-l, --list", "List all available meme templates")
  .action(async (text, options) => {
    try {
      if (options.list) {
        console.log("Available Meme Templates:", memeGenerator.listTemplates());
        process.exit(0);
      }

      console.log(`🌍 Detected Language: ${userLang} | Timezone: ${userTimezone}`);
      
      // Generate meme
      const memePath = await memeGenerator.createMeme({
        text: text || "",
        template: options.template || "random",
        imagePath: options.image || null,
        outputFile: options.output || "meme.png",
        lang: userLang,
        timezone: userTimezone,
      });

      console.log(`✅ Meme saved as: ${memePath}`);

      // Show random fun message
      console.log(randomMsgs.getRandomMessage(userTimezone));

    } catch (error) {
      console.error("❌ Error generating meme:", error.message);
    }
  });

// Parse CLI arguments
program.parse(process.argv);
