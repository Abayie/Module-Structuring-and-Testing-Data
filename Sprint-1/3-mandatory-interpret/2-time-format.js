const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result.

// b) How many function calls are there?
// There is 1 function call: console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// The % operator returns the remainder after dividing movieLength by 60. This gives the number of seconds left after converting as many full minutes as possible from the total seconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// (movieLength - remainingSeconds) / 60 calculates the total number of complete minutes in the movie by removing the leftover seconds and dividing the rest by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result represents the movie length formatted as hours:minutes:seconds. A better name could be formattedTime or timeString.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code works for positive integer values of movieLength. For values less than 60, hours and minutes will be 0, which is correct. For negative or non-integer values, the output may not make sense. Also, the output does not pad single-digit minutes or seconds with a leading zero (e.g., 1:2:3 instead
