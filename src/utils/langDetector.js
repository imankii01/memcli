const osLocale = require("os-locale");

/**
 * Detects user system language
 * @returns {string} - Language code (e.g., en-US, fr-FR)
 */
function detectLanguage() {
  return osLocale.sync() || "en-US";
}

/**
 * Detects user timezone
 * @returns {string} - Timezone name (e.g., Asia/Kolkata, America/New_York)
 */
function detectTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
}

module.exports = { detectLanguage, detectTimezone };
