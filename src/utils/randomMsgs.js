const messages = {
    morning: [
      "☀️ Good morning! Start your day with memes, not emails!",
      "🌅 Morning meme boost activated!",
      "☕ Grab your coffee and enjoy your meme!",
    ],
    afternoon: [
      "😎 Afternoon meme break! Productivity can wait!",
      "☀️ Sun is up, and so are your memes!",
      "🍕 Meme time before lunch break!",
    ],
    evening: [
      "🌆 Evening memes = Best way to chill!",
      "📺 Netflix and memes? Sounds like a plan!",
      "🛋️ Relax, laugh, and enjoy your meme!",
    ],
    night: [
      "🌙 It's late, go sleep... or make one more meme!",
      "🌌 Midnight memes hit differently!",
      "🦉 Night owl detected! More memes coming soon?",
    ],
  };
  
  /**
   * Get a random fun message based on user's timezone
   * @param {string} timezone - User's timezone
   * @returns {string} - Random fun message
   */
  function getRandomMessage(timezone) {
    const hour = new Date().toLocaleTimeString("en-US", { timeZone: timezone, hour12: false }).split(":")[0];
  
    if (hour >= 5 && hour < 12) return messages.morning[Math.floor(Math.random() * messages.morning.length)];
    if (hour >= 12 && hour < 17) return messages.afternoon[Math.floor(Math.random() * messages.afternoon.length)];
    if (hour >= 17 && hour < 22) return messages.evening[Math.floor(Math.random() * messages.evening.length)];
    return messages.night[Math.floor(Math.random() * messages.night.length)];
  }
  
  module.exports = { getRandomMessage };
  