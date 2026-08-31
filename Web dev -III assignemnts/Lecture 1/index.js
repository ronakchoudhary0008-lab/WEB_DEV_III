/**
 * Smart Utility Toolkit - Main Entry Point (index.js)
 * Course: Web Dev III (Node.js & Express Backend)
 * Lab Assignment 1 - Smart Utility Toolkit
 */

const logger = require('./modules/logger');
const { calculate } = require('./calculator');
const { rollDice, simulateDiceRolls } = require('./dice');

function printBanner() {
    console.log("=================================================");
    console.log("    🚀 SMART UTILITY TOOLKIT - LAB ASSIGNMENT 1   ");
    console.log("    Web Dev III (Node.js & Express Backend)      ");
    console.log("=================================================\n");
}

function printHelp() {
    printBanner();
    console.log("Available Commands & Modules:\n");
    console.log("1. Calculator (process.argv):");
    console.log("   node calculator.js <operation> <num1> <num2>");
    console.log("   node index.js calc add 10 5\n");
    console.log("2. Custom Modules Demo (modules/isEven.js & modules/logger.js):");
    console.log("   node app.js\n");
    console.log("3. HTTP Server (http module):");
    console.log("   node server.js\n");
    console.log("4. File Manager (fs CRUD operations):");
    console.log("   node fileManager.js\n");
    console.log("5. Crypto Dice Simulator (crypto module):");
    console.log("   node dice.js [number_of_rolls]");
    console.log("   node index.js dice 3\n");
    console.log("-------------------------------------------------");
}

const args = process.argv.slice(2);
const command = args[0] ? args[0].toLowerCase() : null;

if (!command) {
    printHelp();
    logger.info("Running a quick demonstration of all utilities...\n");
    
    console.log("--- 1. Calculator Demonstration ---");
    calculate('add', 10, 5);
    calculate('mult', 8, 9);
    console.log("");

    console.log("--- 2. Dice Demonstration (Crypto) ---");
    console.log(`🎲 Dice Rolled: ${rollDice()}`);
    console.log("");

    logger.success("Run individual scripts directly or pass arguments to index.js!");
} else if (command === 'calc' || command === 'calculator') {
    const [, op, a, b] = args;
    if (!op || a === undefined) {
        console.log("Usage: node index.js calc <operation> <num1> [num2]");
    } else {
        calculate(op, a, b);
    }
} else if (command === 'dice') {
    const count = args[1] ? parseInt(args[1], 10) : 1;
    if (count === 1 && !args[1]) {
        console.log(`🎲 Dice Rolled: ${rollDice()}`);
    } else {
        simulateDiceRolls(count);
    }
} else {
    printHelp();
}
