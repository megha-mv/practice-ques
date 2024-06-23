const obj4 = [
  { empId: 101, deptt: "IT", pkg: 10 },
  { empId: 102, deptt: "PROD", pkg: 13 },
  { empId: 109, deptt: "IT", pkg: 21 },
  { empId: 103, deptt: "IT", pkg: 12 },
  { empId: 104, deptt: "PURCHASE", pkg: 8 },
  { empId: 105, deptt: "PROD", pkg: 12 },
  { empId: 106, deptt: "IT", pkg: 11 },
  { empId: 107, deptt: "PROD", pkg: 21 },
  { empId: 108, deptt: "IT", pkg: 21 },
  { empId: 109, deptt: "PURCHASE", pkg: 21 },
  { empId: 105, deptt: "PURCHASE", pkg: 12 },
  { empId: 110, deptt: "PURCHASE", pkg: 12 },
  { empId: 111, deptt: "IT", pkg: 12 },
];

function processObject(input) {
  let result = {};

  input.forEach(item => {
    if (!result[item.deptt]) {
      result[item.deptt] = { count:1,pkg: new Set([item.pkg]) };
    } else {
      result[item.deptt].count++;
      result[item.deptt].pkg.add(item.pkg)
    }
  });

  return result;
}

const output = processObject(obj4);
console.log(output);
// Convert the array of objects into a CSV string for export.
const csvString = obj4.map(employee => `${employee.empId},${employee.deptt},${employee.pkg}`).join('\n');
console.log("CSV String:", csvString);

// Group employees by empId
const empGroups = {};
obj4.forEach(employee => {
  if (!empGroups[employee.empId]) {
    empGroups[employee.empId] = { ...employee };
  } else {
    empGroups[employee.empId].deptt += `,${employee.deptt}`;
  }
});

// Convert grouped employees back to array format
const mergedEmployees = Object.values(empGroups);

console.log("Merged Employees:", mergedEmployees);

//Group employees by package
const pkgGroups = {};
obj4.forEach(employee => {
  const pkgSize = employee.pkg;
  if (!pkgGroups[pkgSize]) {
    pkgGroups[pkgSize] = [employee.empId,employee.deptt];
  } else {
    pkgGroups[pkgSize].push([employee.empId,employee.deptt]);
  }
});

console.log("Employees grouped by packages:", pkgGroups);

//

let value = {
  count: 1,
  get add() {
    return this.count++;
  },
  get val(){
    return this.count;
  },
  set add(newValue) {
    if(newValue) this.count = 1;
  },
};
console.log('++++++++++',value.add);
console.log('++++++++++',value.add);
console.log('++++++++++',value.add);
value.add = 6;
console.log('++++++++++>>>>',value.add);

str = '1234'
console.log( typeof ~~str);

var pets=['dogs','cats','chicken','dogs', 'cats','horse'];
var petCount = pets.reduce((acc, pet) =>{
	if(!acc[pet]){
  	acc[pet]=1;
  }else{
  	acc[pet]++;
  }
  return acc;
},{});
console.log(petCount);


const locMap={
a:['ram','NewDelhi'],
b:['shyan','Rohtak'],
c:["Seeta",'NewDelhi'],
d:["Geeta",'Rohtak'],
e:['John','USA']
}

const groupByLoc = Object.entries(locMap).reduce((acc,[key,[name,location]]) => {
	if(!acc[location]){
  acc[location]=[];
  }
  
  acc[location].push(name);
  return acc;
},{})
console.log(groupByLoc);


//

function isEqual(obj1, obj2) {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return obj1 === obj2;
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) {
          return false;
      }
      for (let i = 0; i < obj1.length; i++) {
          if (!isEqual(obj1[i], obj2[i])) {
              return false;
          }
      }
      return true;
  }

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
      return false;
  }

  for (let i = 0; i < obj1Keys.length; i++) {
      if (!isEqual(obj1[obj1Keys[i]], obj2[obj2Keys[i]])) {
          return false;
      }
  }

  return true;
}

const a = { a: 'bfe' };
const b = { a: 'bfe' };

console.log(isEqual(a, b)); // true
console.log(a === b); // false

const c = [1, a, '4'];
const d = [1, b, '4'];

console.log(isEqual(c, d)); // true
console.log(c === d); // false