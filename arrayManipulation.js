function processArray(numbers) {
  return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}


const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); 