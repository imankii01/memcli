module.exports = {
    appName: "MemeCLI",
    version: "1.0.0",
    author: "Ankit",
    defaultOutputFile: "meme.png",
    fontSettings: {
      defaultFont: "Arial",
      defaultSize: 40,
      color: "white",
    },
    apiKeys: {
      imgflip: "your_imgflip_api_key",  // If using Imgflip API for meme templates
    },
    memeSettings: {
      defaultTemplate: "Drake",
      allowCustomImages: true,
      fetchTrendingMemes: true,
    },
  };
  