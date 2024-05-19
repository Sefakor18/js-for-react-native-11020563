
const { processArray, formatArrayStrings } = require('./arrayManipulation');


function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}


const names = ["Ama", "Adwoa", "Aku", "Yao", "Semanu"];
const numbers = [10, 15, 20, 25, 30];
const processedNumbers = processArray(numbers);
const modifiedNames = formatArrayStrings(names, processedNumbers);
const userProfiles = createUserProfiles(names, modifiedNames);

console.log(userProfiles);
 
module.exports = {
 createUserProfiles
};
