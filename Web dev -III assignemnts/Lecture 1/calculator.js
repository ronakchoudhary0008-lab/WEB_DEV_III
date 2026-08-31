/**
 * CLI-Based Calculator using process.argv
 * Web Dev III (Node.js & Express Backend) - Lab Assignment 1
 * 
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 * 
 * Examples:
 *   node calculator.js add 10 5
 *   node calculator.js sub 20 8
 *   node calculator.js mult 6 7
 *   node calculator.js div 100 4
 *   node calculator.js mod 10 3
 *   node calculator.js pow 2 8
 *   node calculator.js sqrt 64
 */

const args = process.argv.slice(2);

function printUsage() {
    console.log("Usage: node calculator.js <operation> <num1> <num2>");
    console.log("\nSupported Operations:");
    console.log("  add      : Addition (num1 + num2)");
    console.log("  sub      : Subtraction (num1 - num2)");
    console.log("  mult     : Multiplication (num1 * num2)");
    console.log("  div      : Division (num1 / num2)");
    console.log("  mod      : Modulo (num1 % num2)");
    console.log("  pow      : Exponentiation (num1 ^ num2)");
    console.log("  sqrt     : Square root of num1");
    console.log("\nExample:");
    console.log("  node calculator.js add 10 5");
}

function calculate(operation, a, b) {
    const num1 = parseFloat(a);
    const num2 = b !== undefined ? parseFloat(b) : undefined;
    const op = operation.toLowerCase();

    if (isNaN(num1)) {
        console.error("Error: First argument must be a valid number.");
        return;
    }

    if (op !== 'sqrt' && isNaN(num2)) {
        console.error("Error: Second argument must be a valid number for this operation.");
        return;
    }

    let result;

    switch (op) {
        case 'add':
        case '+':
            result = num1 + num2;
            break;
        case 'sub':
        case 'subtract':
        case '-':
            result = num1 - num2;
            break;
        case 'mult':
        case 'multiply':
        case '*':
            result = num1 * num2;
            break;
        case 'div':
        case 'divide':
        case '/':
            if (num2 === 0) {
                console.error("Error: Division by zero is undefined.");
                return;
            }
            result = num1 / num2;
            break;
        case 'mod':
        case '%':
            result = num1 % num2;
            break;
        case 'pow':
        case '^':
            result = Math.pow(num1, num2);
            break;
        case 'sqrt':
            if (num1 < 0) {
                console.error("Error: Cannot calculate square root of a negative number.");
                return;
            }
            result = Math.sqrt(num1);
            break;
        default:
            console.error(`Error: Unknown operation '${operation}'.`);
            console.log("Available operations: add, sub, mult, div, mod, pow, sqrt");
            return;
    }

    console.log(`Result: ${result}`);
    return result;
}

// Execution flow when run directly from command line
if (require.main === module) {
    if (args.length === 0) {
        printUsage();
    } else {
        const [operation, num1, num2] = args;
        calculate(operation, num1, num2);
    }
}

module.exports = { calculate };
