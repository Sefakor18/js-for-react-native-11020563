
function processArray(numbers) {
  return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}


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


const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers);

const strings = ["marry", "seed", "christian", "life", "beans"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); 
module.exports = {
  processArray,
  formatArrayStrings
};
