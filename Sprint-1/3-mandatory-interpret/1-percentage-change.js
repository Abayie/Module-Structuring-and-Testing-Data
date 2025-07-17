let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls:
// 1. carPrice.replaceAll(",", "")   (line 4)
// 2. Number(carPrice.replaceAll(",", ""))   (line 4)
// 3. priceAfterOneYear.replaceAll("," "")   (line 5) [this line has a syntax error]
// 4. Number(priceAfterOneYear.replaceAll("," ""))   (line 5) [this line has a syntax error]
// 5. console.log(...)   (line 8)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can we fix this problem?
// The error is on line 5: priceAfterOneYear.replaceAll("," "")
// The syntax is incorrect: it should be replaceAll(",", "") (missing comma between arguments).
// Fix: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
// carPrice = Number(carPrice.replaceAll(",", ""));   (line 4)
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));   (line 5)

// d) Identify all the lines that are variable declarations
// let carPrice = "10,000";   (line 1)
// let priceAfterOneYear = "8,543";   (line 2)
// const priceDifference = carPrice - priceAfterOneYear;   (line 6)
// const percentageChange = (priceDifference / carPrice) * 100;   (line 7)

// e) Describe what the expression Number(carPrice.replaceAll(",", "")) is doing - what is the purpose of this expression?
// It removes all commas from the carPrice string (e.g., "10,000" becomes "10000") and then converts the result to a number (10000).
// This allows us to do mathematical calculations

