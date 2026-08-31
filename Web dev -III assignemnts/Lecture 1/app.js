/**
 * Custom Module Demonstration & Reusability
 * Web Dev III (Node.js & Express Backend) - Lab Assignment 1
 * 
 * Description:
 * Imports custom modules (isEven and logger) using require() and demonstrates
 * their reusability across different use cases.
 */

// 1. Import custom modules using require()
const isEven = require('./modules/isEven');
const logger = require('./modules/logger');

logger.info("=== Custom Modules Reusability Demonstration ===");

// 2. Demonstrate isEven module with single values
logger.info("Testing isEven with individual numbers:");
const testNumbers = [4, 7, 0, -2, -9, 42, 99];

testNumbers.forEach((num) => {
    const status = isEven(num) ? "EVEN" : "ODD";
    if (isEven(num)) {
        logger.success(`Number ${num} is ${status}`);
    } else {
        logger.warn(`Number ${num} is ${status}`);
    }
});

// 3. Demonstrate reusability in array filtering
logger.info("\nDemonstrating reusability with Array.prototype.filter():");
const dataList = [12, 23, 34, 45, 56, 67, 78, 89, 90];
const evensOnly = dataList.filter(isEven);
const oddsOnly = dataList.filter(num => !isEven(num));

console.log("Original List :", dataList);
console.log("Filtered Evens:", evensOnly);
console.log("Filtered Odds :", oddsOnly);

// 4. Demonstrate error handling for non-numeric input
logger.info("\nDemonstrating module input validation / error handling:");
try {
    isEven("hello");
} catch (err) {
    logger.error(`Caught expected validation error: ${err.message}`);
}

logger.success("All module demonstrations completed successfully!");
