const { createMeme, listTemplates } = require("../src/memeGenerator");
const { fetchImgflipTemplates, fetchTrendingMemes } = require("../src/utils/apiClient");
const { detectLanguage, detectTimezone } = require("../src/utils/langDetector");
const assert = require("assert");

// Run all tests
async function runTests() {
  console.log("🧪 Running tests...");

  try {
    // Test Language & Timezone Detection
    assert(typeof detectLanguage() === "string", "❌ Language detection failed!");
    assert(typeof detectTimezone() === "string", "❌ Timezone detection failed!");
    console.log("✅ Language & Timezone detection test passed!");

    // Test Meme Templates Fetching
    const templates = await fetchImgflipTemplates();
    assert(Array.isArray(templates), "❌ Failed to fetch Imgflip templates!");
    console.log("✅ Imgflip meme templates fetching test passed!");

    // Test Trending Memes Fetching
    const trendingMemes = await fetchTrendingMemes();
    assert(Array.isArray(trendingMemes), "❌ Failed to fetch trending memes!");
    console.log("✅ Trending memes fetching test passed!");

    // Test Local Template Listing
    const localTemplates = await listTemplates();
    assert(Array.isArray(localTemplates), "❌ Local templates listing failed!");
    console.log("✅ Local templates listing test passed!");

    // Test Meme Generation
    const memePath = await createMeme({
      text: "Test Meme!",
      template: "Drake",
      imagePath: null,
      outputFile: "test-meme.png",
      lang: "en-US",
      timezone: "UTC",
    });
    assert(memePath.includes(".png"), "❌ Meme generation failed!");
    console.log("✅ Meme generation test passed!");

    console.log("🎉 All tests passed successfully!");
  } catch (error) {
    console.error(error.message);
  }
}

runTests();
