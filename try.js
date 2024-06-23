const namesArray = ["John Smith", "Jane peter", "Doe mark", "John wick", "Jane", "Will Smith", "Doe"];

function findDuplicateNames(namesArray){
  const firstNameCount = new Map();
  const modifiedNames = [];
  
  namesArray.forEach((fullName) => {
    const firstName = fullName.split(" ")[0];
    if (firstNameCount.has(firstName)) {
      firstNameCount.set(firstName, firstNameCount.get(firstName) + 1);
    } else {
      firstNameCount.set(firstName, 1);
    } 
  });
  
    namesArray.forEach((fullName) => {
      const firstName = fullName.split(" ")[0];
      if (firstNameCount.get(firstName) > 1) {
        modifiedNames.push(`${firstName}-dup ${fullName.split(" ").slice(1).join(" ")}`.trim());
      } else {
        modifiedNames.push(fullName);
      }
    });
  
    return modifiedNames;
}
  
const duplicateNames = findDuplicateNames(namesArray);
console.log(duplicateNames);

function findDuplicateNamesNew(namesArray) {
  const firstNameCount = namesArray.reduce((acc, fullName) => {
    const firstName = fullName.split(" ")[0];
    acc.set(firstName, (acc.get(firstName) || 0) + 1);
    return acc;
  }, new Map());

  console.log(firstNameCount);

  return namesArray.map((fullName) => {
    const firstName = fullName.split(" ")[0];
    return firstNameCount.get(firstName) > 1 ? `${fullName}   --dup ` : fullName;
  });
}

const duplicateNamesNew = findDuplicateNamesNew(namesArray);
console.log(duplicateNamesNew);

function checkDuplicates(names) {
  let seen = new Map();
  let result = [];

  names.forEach(name => {
      let reversedName = name.split(' ').reverse().join(' ');
      console.log(reversedName,'reversedName')
      if (seen.has(reversedName)) {
          result.push(name + "--dup");
      } else {
          seen.set(name, reversedName);
          result.push(name);
      }
  });

  return result;
}

let input = ["John Mayor", "Johnny Baba", "Jin kum", "John Cena", "Cena John"];
let output = checkDuplicates(input);

console.log(output);