const axios = require("axios");
const os = require("os");
const { detectLanguage } = require("./langDetector");

const REDDIT_MEME_API = "https://www.reddit.com/r/memes/top.json?limit=10";
const FUNNY_TEMPLATES = [
    "Me looking at my code like: {text}",
    "When you realize {text}",
    "Nobody: ... Me: {text}",
    "That moment when {text}",
    "Brain: {text} | Me: Nah!",
];

/**
 * Get a random joke caption if the user doesn’t provide one.
 * @returns {string} - Auto-generated meme text
 */
async function generateMemeCaption() {
    try {
        const response = await axios.get(REDDIT_MEME_API, {
            headers: { "User-Agent": "MemeCLI/1.0" },
        });

        const memes = response.data.data.children.map(post => post.data.title);
        return memes[Math.floor(Math.random() * memes.length)];
    } catch (error) {
        console.warn("⚠️ Failed to fetch trending meme captions. Using fallback.");
        return generateLocalCaption();
    }
}

/**
 * Generate a local meme caption if Reddit fails
 * @returns {string} - Random local meme caption
 */
function generateLocalCaption() {
    const textOptions = [
        "Monday is coming",
        "Why is my code not working?",
        "When the bug fixes itself",
        "Deploying to production without testing",
    ];
    const template = FUNNY_TEMPLATES[Math.floor(Math.random() * FUNNY_TEMPLATES.length)];
    return template.replace("{text}", textOptions[Math.floor(Math.random() * textOptions.length)]);
}

/**
 * Detects user system language and translates common meme words
 * @returns {string} - Localized meme caption
 */
function getLocalizedCaption() {
    const lang = detectLanguage();
    const translations = {
        "en-US": "When the server crashes!",
        "es-ES": "¡Cuando el servidor se cae!",
        "fr-FR": "Quand le serveur plante!",
        "de-DE": "Wenn der Server abstürzt!",
        "hi-IN": "जब सर्वर क्रैश हो जाता है!",
    };
    return translations[lang] || translations["en-US"];
}

module.exports = { generateMemeCaption, generateLocalCaption, getLocalizedCaption };
