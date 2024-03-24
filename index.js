#! /usr/bin/env node
console.log(
  "\t\t\t: simple calculator :\t\t\t".replace(/(^|\s)\S/g, (char) =>
    char.toUpperCase()
  )
);
import inquirer from "inquirer";
const result = await inquirer.prompt([
  { message: "Enter a first Number:", type: "number", name: "firstnumber" },
  { message: "Enter a Second Number:", type: "number", name: "secondnumber" },
  {
    message: "Select an operator to perform an operation",
    type: "list",
    name: "operators",
    choices: [
      "Addition",
      "subtraction",
      "multiplication",
      "division",
      "modulus",
      "exponent",
    ],
  },
]);
if (result.operators == "Addition") {
  console.log(
    "The value of addition is:",
    result.firstnumber + result.secondnumber
  );
  console.log("Thanks");
} else if (result.operators == "subtraction") {
  console.log(
    "The value of subtraction is:",
    result.firstnumber - result.secondnumber
  );
  console.log("Thanks");
} else if (result.operators == "multiplication") {
  console.log(
    "The value of multiplication is:",
    result.firstnumber * result.secondnumber
  );
  console.log("Thanks");
} else if (result.operators == "division") {
  console.log(
    "The value of division is:",
    result.firstnumber / result.secondnumber
  );
  console.log("Thanks");
} else if (result.operators == "modulus") {
  console.log(
    "The value of modulus is:",
    result.firstnumber % result.secondnumber
  );
  console.log("Thanks");
} else if (result.operators == "exponent") {
  console.log(
    "The value of exponent is:",
    result.firstnumber ** result.secondnumber
  );
  console.log("Thanks");
} else {
  console.log("Please select valid operator");
}
