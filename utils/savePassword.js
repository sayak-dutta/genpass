const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const os = require("os");

const savePassword = (password) => {
  fs.open(path.join(__dirname, "../", "Password.txt"), "a", "666", (e, id) => {
    fs.write(id, password + os.EOL, null, "utf-8", () => {
      fs.close(id, () => {
        console.log(chalk.yellow("Password copied to the clipboard successfully"));
      });
    });
  });
};

module.exports = savePassword;
