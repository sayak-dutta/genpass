#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword.js");
const savePassword = require("./utils/savePassword.js");
const log = console.log;

program.version("1.0.0").description("Command Line Password Generator");

program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to password.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

//generate password
const generatedPassword = createPassword(length, numbers, symbols);

//Save password
if (save) {
  savePassword(generatedPassword);
}

//Copy output to clipboard
clipboardy.writeSync(generatedPassword);

//Output generated password
log(chalk.cyan("Generated Password : ") + chalk.bgRed(generatedPassword));

//Copyright and Author Name
log("");
log(chalk.gray("Sayak Dutta © 2021"));
