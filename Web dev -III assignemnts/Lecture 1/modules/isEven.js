/**
 * Custom Module: isEven
 * Web Dev III (Node.js & Express Backend) - Lab Assignment 1
 * 
 * Description:
 * A reusable module to check if a given number is even or odd.
 */

/**
 * Check if a number is even.
 * @param {number|string} num - The number to check.
 * @returns {boolean} - Returns true if even, false if odd.
 */
function isEven(num) {
    const parsed = Number(num);
    if (isNaN(parsed)) {
        throw new TypeError(`Expected a valid number, received: ${num}`);
    }
    return parsed % 2 === 0;
}

/**
 * Check if a number is odd.
 * @param {number|string} num - The number to check.
 * @returns {boolean} - Returns true if odd, false if even.
 */
function isOdd(num) {
    return !isEven(num);
}

// Export functions for reuse across application
module.exports = isEven;
module.exports.isEven = isEven;
module.exports.isOdd = isOdd;
