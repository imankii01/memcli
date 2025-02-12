const axios = require("axios");

const IMGFLIP_API_URL = "https://api.imgflip.com/get_memes";
const REDDIT_MEME_API = "https://www.reddit.com/r/memes/top.json?limit=10";

/**
 * Fetch meme templates from Imgflip API
 * @returns {Array} - List of meme template URLs
 */
async function fetchImgflipTemplates() {
  try {
    const response = await axios.get(IMGFLIP_API_URL);
    return response.data.data.memes.map(meme => ({
      name: meme.name,
      url: meme.url,
    }));
  } catch (error) {
    console.error("❌ Error fetching Imgflip templates:", error.message);
    return [];
  }
}

/**
 * Fetch trending memes from Reddit
 * @returns {Array} - List of trending meme images
 */
async function fetchTrendingMemes() {
  try {
    const response = await axios.get(REDDIT_MEME_API, {
      headers: { "User-Agent": "MemeCLI/1.0" },
    });

    return response.data.data.children.map(post => ({
      title: post.data.title,
      image: post.data.url,
      upvotes: post.data.ups,
    }));
  } catch (error) {
    console.error("❌ Error fetching trending memes:", error.message);
    return [];
  }
}

module.exports = { fetchImgflipTemplates, fetchTrendingMemes };
