/**
 * Random Dice Generator using Node.js Core 'crypto' Module
 * Web Dev III (Node.js & Express Backend) - Lab Assignment 1
 * 
 * Description:
 * Generates cryptographically secure random numbers between 1 and 6
 * to simulate realistic dice rolls, supporting single/multiple rolls
 * and saving history to a file.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const logger = require('./modules/logger');

const historyFile = path.join(__dirname, 'dice_history.txt');

/**
 * Rolls a single standard 6-sided dice (1-6) using crypto.randomInt
 * @returns {number} Value between 1 and 6
 */
function rollDice() {
    // crypto.randomInt(min, max) generates integer min <= n < max
    return crypto.randomInt(1, 7);
}

/**
 * Simulates multiple dice rolls
 * @param {number} count Number of rolls
 * @param {boolean} saveToFile Whether to append rolls to history log
 */
function simulateDiceRolls(count = 5, saveToFile = true) {
    console.log(`\n🎲 Simulating ${count} Dice Roll(s):`);
    console.log("--------------------------------");

    const rolls = [];
    for (let i = 1; i <= count; i++) {
        const value = rollDice();
        rolls.push(value);
        console.log(`Roll #${i}: 🎲 Dice Rolled: ${value}`);
    }

    if (saveToFile) {
        const timestamp = logger.getTimestamp();
        const historyEntry = `[${timestamp}] Rolls (${count}): [${rolls.join(', ')}]\n`;
        try {
            fs.appendFileSync(historyFile, historyEntry, 'utf8');
            console.log(`\n(History saved to ${path.basename(historyFile)})`);
        } catch (err) {
            console.error("Failed to save history:", err.message);
        }
    }

    return rolls;
}

// Check CLI arguments
const args = process.argv.slice(2);
const rollCount = args[0] ? parseInt(args[0], 10) : 1;

if (require.main === module) {
    if (isNaN(rollCount) || rollCount <= 0) {
        console.log("Usage: node dice.js [number_of_rolls]");
        console.log("Example: node dice.js 5");
    } else if (rollCount === 1 && args.length === 0) {
        const single = rollDice();
        console.log(`🎲 Dice Rolled: ${single}`);
        console.log("\n(Tip: Run 'node dice.js 5' to simulate 5 rolls in a loop)");
    } else {
        simulateDiceRolls(rollCount);
    }
}

module.exports = {
    rollDice,
    simulateDiceRolls
};
