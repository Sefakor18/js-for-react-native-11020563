// Function to process an array of numbers
function processArray(numbers) {
  return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Function to format strings based on the processed numbers
function formatArrayStrings(strings, numbers) {
  return strings.map((str, index) => {
      const num = numbers[index];
      if (num % 2 === 0) {
          return str.toUpperCase();
      } else {
          return str.toLowerCase();
      }
  });
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); // [3, 4, 9, 16, 15]

const strings = ["marry", "seed", "christian", "life", "beans"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); // ['hello', 'WORLD', 'javascript', 'IS', 'fun']

// Export the functions for use in other modules
module.exports = {
  processArray,
  formatArrayStrings
};
