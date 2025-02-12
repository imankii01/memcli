const chalk = require("chalk");

/**
 * Logs an info message in styled format
 * @param {string} message - Message to display
 */
function logInfo(message) {
  console.log(chalk.blue.bold("ℹ️ INFO: ") + message);
}

/**
 * Logs an error message in styled format
 * @param {string} message - Message to display
 */
function logError(message) {
  console.error(chalk.red.bold("❌ ERROR: ") + message);
}

/**
 * Logs a success message in styled format
 * @param {string} message - Message to display
 */
function logSuccess(message) {
  console.log(chalk.green.bold("✅ SUCCESS: ") + message);
}

module.exports = { logInfo, logError, logSuccess };
