/**
 * File Manager using Node.js Core 'fs' Module
 * Web Dev III (Node.js & Express Backend) - Lab Assignment 1
 * 
 * Description:
 * Implements CRUD operations on files using asynchronous fs methods:
 *   - writeFile() : Create File
 *   - readFile()  : Read File
 *   - appendFile(): Update File
 *   - unlink()    : Delete File
 */

const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, 'sample.txt');

/**
 * Executes full CRUD lifecycle demonstration matching the assignment specification
 */
function runFileLifecycle() {
    console.log("Creating File...");
    
    // 1. Create File
    fs.writeFile(targetFilePath, "Hello Node.js\n", 'utf8', (err) => {
        if (err) {
            console.error("Error creating file:", err.message);
            return;
        }
        console.log("File Created");

        // 2. Read File
        console.log("Reading File");
        fs.readFile(targetFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error("Error reading file:", err.message);
                return;
            }
            process.stdout.write(data);

            // 3. Update File (Append)
            fs.appendFile(targetFilePath, "Learning FS Module\n", 'utf8', (err) => {
                if (err) {
                    console.error("Error updating file:", err.message);
                    return;
                }
                console.log("File Updated");

                // Read Updated File
                fs.readFile(targetFilePath, 'utf8', (err, updatedData) => {
                    if (err) {
                        console.error("Error reading updated file:", err.message);
                        return;
                    }
                    process.stdout.write(updatedData);

                    // 4. Delete File
                    fs.unlink(targetFilePath, (err) => {
                        if (err) {
                            console.error("Error deleting file:", err.message);
                            return;
                        }
                        console.log("File Deleted");
                    });
                });
            });
        });
    });
}

// Execute lifecycle demo when run directly
if (require.main === module) {
    runFileLifecycle();
}

module.exports = {
    runFileLifecycle
};
