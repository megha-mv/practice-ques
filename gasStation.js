function canCompleteCircuit(gas, cost) {
  const n = gas.length;
  let totalGas = 0;
  let currentGas = 0;
  let startStation = 0;

  for (let i = 0; i < n; i++) {
      totalGas += gas[i] - cost[i];
      currentGas += gas[i] - cost[i];

      // If currentGas becomes negative, reset and start from the next station
      if (currentGas < 0) {
          currentGas = 0;
          startStation = i + 1;
      }
  }

  // If totalGas is negative, it's impossible to complete the circuit
  if (totalGas < 0) {
      return -1;
  } else {
      return startStation;
  }
}

// Example usage
const A = [1, 2, 3, 4, 5];
const B = [3, 4, 5, 1, 2];
const Anew = [1, 2]
const Bnew = [2, 1]
const result = canCompleteCircuit(Anew, Bnew);
console.log(`Minimum starting gas station's index: ${result}`);
