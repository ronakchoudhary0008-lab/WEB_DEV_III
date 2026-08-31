/**
 * Custom Module: Logger
 * Web Dev III (Node.js & Express Backend) - Lab Assignment 1
 * 
 * Description:
 * A reusable logging utility that outputs timestamped, color-coded terminal messages.
 */

// ANSI escape codes for terminal styling
const COLORS = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m'
};

/**
 * Returns formatted current timestamp string [YYYY-MM-DD HH:mm:ss]
 * @returns {string}
 */
function getTimestamp() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const yyyy = now.getFullYear();
    const mm = pad(now.getMonth() + 1);
    const dd = pad(now.getDate());
    const hh = pad(now.getHours());
    const min = pad(now.getMinutes());
    const ss = pad(now.getSeconds());
    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
}

/**
 * Log standard info message
 */
function info(message) {
    console.log(`${COLORS.dim}[${getTimestamp()}]${COLORS.reset} ${COLORS.cyan}[INFO]${COLORS.reset} ${message}`);
}

/**
 * Log success message
 */
function success(message) {
    console.log(`${COLORS.dim}[${getTimestamp()}]${COLORS.reset} ${COLORS.green}[SUCCESS]${COLORS.reset} ${message}`);
}

/**
 * Log warning message
 */
function warn(message) {
    console.log(`${COLORS.dim}[${getTimestamp()}]${COLORS.reset} ${COLORS.yellow}[WARN]${COLORS.reset} ${message}`);
}

/**
 * Log error message
 */
function error(message) {
    console.error(`${COLORS.dim}[${getTimestamp()}]${COLORS.reset} ${COLORS.red}[ERROR]${COLORS.reset} ${message}`);
}

/**
 * General log message
 */
function log(message) {
    console.log(`${COLORS.dim}[${getTimestamp()}]${COLORS.reset} ${message}`);
}

module.exports = {
    info,
    success,
    warn,
    error,
    log,
    getTimestamp,
    COLORS
};
