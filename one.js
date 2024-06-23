function largestPositiveK(nums) {
  const numSet = new Set(nums);
  let largestK = -1;

  for (let num of nums) {
      if (num > 0 && numSet.has(-num) && num > largestK) {
          largestK = num;
      }
  }

  return largestK;
}

// Test cases
console.log(largestPositiveK([-1, 2, -3, 3])); // Output: 3
// console.log(largestPositiveK([-1, 10, 6, 7, -7, 1])); // Output: 7
console.log(largestPositiveK([-10, 8, 6, 7, -2, -3])); // Output: -1

const arr = ['a', 'b', 'c', 'a', 'b', 'a', 'c', 'b'];

function requiredOP(arr) {
  const counts = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  return counts;
}

console.log(requiredOP(arr));


function countOccurrences(arr) {
  const countMap = arr.reduce((map, item) => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    return map;
  }, new Map());

  return countMap;
}

console.log(countOccurrences(arr));

const data = [
  { id: 1, category: 'A' },
  { id: 2, category: 'B' },
  { id: 3, category: 'A' },
  { id: 4, category: 'C' },
  { id: 5, category: 'B' }
];

function groupByCategory(data) {
  const groupMap = data.reduce((map, item) => {
    const { id, category } = item;
    if (!map.has(category)) {
      map.set(category, []);
    }
    map.get(category).push({ id, category });
    return map;
  }, new Map());

  return groupMap;
}

console.log(groupByCategory(data));

function groupByCategoryNew(data) {
  return data.reduce((result, item) => {
    const { id, category } = item;
    const existingCategory = result.find(entry => entry.category === category);
    if (existingCategory) {
      existingCategory.items.push(id);
    } else {
      result.push({ category, items: [id] });
    }
    return result;
  }, []);
}

console.log(groupByCategoryNew(data));