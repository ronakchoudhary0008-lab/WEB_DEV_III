# Web Dev III - Lab Assignment 1: Smart Utility Toolkit

**Course:** Web Dev III (Node.js & Express Backend)  
**Topic:** Unit-1 Core Node.js Modules  
**Student Name:** Lokesh Verma  

---

## 📖 Overview

The **Smart Utility Toolkit** is a hands-on backend lab project built entirely with Node.js built-in core modules (**`process`**, **`http`**, **`fs`**, **`crypto`**) without any external third-party dependencies or frameworks.

---

## 📁 Repository Structure

```
Web dev -III assignemnts/
└── Lecture 1/
    ├── package.json          # Project configuration & npm scripts
    ├── index.js              # Central launcher / master entry point
    ├── calculator.js         # CLI-based calculator using process.argv
    ├── app.js                # Custom module import & reusability demo
    ├── server.js             # HTTP server handling multiple routes
    ├── fileManager.js        # File CRUD operations using fs core module
    ├── dice.js               # Random dice simulator using crypto module
    ├── test.txt              # Sample text file
    ├── modules/
    │   ├── isEven.js         # Custom module to check even/odd numbers
    │   └── logger.js         # Custom timestamped ANSI color logger
    └── README.md             # Lab documentation and run instructions
```

---

## 🛠️ Features & Usage Instructions

### 1. CLI Calculator (`calculator.js`)
Performs arithmetic operations via terminal command-line arguments using `process.argv`.

- **Addition:**
  ```bash
  node calculator.js add 10 5
  # Output: Result: 15
  ```
- **Subtraction:**
  ```bash
  node calculator.js sub 20 8
  # Output: Result: 12
  ```
- **Multiplication:**
  ```bash
  node calculator.js mult 6 7
  # Output: Result: 42
  ```
- **Division:**
  ```bash
  node calculator.js div 100 4
  # Output: Result: 25
  ```
- **Bonus Operations (Power, Modulo, Square Root):**
  ```bash
  node calculator.js pow 2 8     # Result: 256
  node calculator.js mod 10 3    # Result: 1
  node calculator.js sqrt 64     # Result: 8
  ```

---

### 2. Custom Modules & Reusability (`app.js`)
Demonstrates exporting custom modules (`isEven.js` and `logger.js`) using `module.exports` and consuming them in other files via `require()`.

```bash
node app.js
```

---

### 3. HTTP Server (`server.js`)
A lightweight HTTP server built using Node.js built-in `http` module listening on port `3000`.

To start the server:
```bash
node server.js
```

**Routes Supported:**
| Route | Method | Response |
|---|---|---|
| `http://localhost:3000/` | GET | `Welcome to Node Server` |
| `http://localhost:3000/about` | GET | `About Page` |
| `http://localhost:3000/contact` | GET | `Contact Page` |
| `http://localhost:3000/unknown` | GET | `404 Error Message: Page Not Found` |

---

### 4. File Manager (`fileManager.js`)
Performs asynchronous CRUD file operations using the `fs` module:
1. `fs.writeFile()` — Creates file
2. `fs.readFile()` — Reads file contents
3. `fs.appendFile()` — Updates/appends content to file
4. `fs.unlink()` — Deletes file

```bash
node fileManager.js
```

**Expected Output:**
```
Creating File...
File Created
Reading File
Hello Node.js
File Updated
Hello Node.js
Learning FS Module
File Deleted
```

---

### 5. Random Dice Simulator (`dice.js`)
Simulates cryptographically secure dice rolls (1–6) using the `crypto` module:

- **Single Roll:**
  ```bash
  node dice.js
  # Output: 🎲 Dice Rolled: 4
  ```

- **Simulate Multiple Rolls (Loop):**
  ```bash
  node dice.js 5
  # Simulates 5 rolls and stores history
  ```

---

### 6. Master Entry Point (`index.js`)
Run all utilities or get a quick summary:
```bash
node index.js
```

Or run via npm scripts:
```bash
npm start          # Runs master index.js
npm run calc       # Usage guide for calculator
npm run app        # Runs custom modules demo
npm run server     # Starts HTTP server
npm run files      # Runs file operations
npm run dice       # Rolls dice
```

---

## 🚀 Git & GitHub Setup Instructions

1. Create a repository named `Web dev - III` on [GitHub](https://github.com/new).
2. Run the following commands in the root folder (`Web dev -III assignemnts`):

```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/Web-dev-III.git
git branch -M main
git push -u origin main
```
