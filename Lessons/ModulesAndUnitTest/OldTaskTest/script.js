export const withdraw = (clients, balances, client, amount) => {
    if(!Array.isArray(clients)){
        return null;
    }
  const user = clients.indexOf(client);
  if (balances[user] > amount) {
    return balances[user] - amount;
  }
  return -1;
};
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50); // ==> 37 (balances array should be [1400, 37, -6])
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10); // ==> -1 (balances array should be [1400, 87, -6])


// // examples
// console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50)); // ==> 37 (balances array should be [1400, 37, -6])
// console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10)); // ==> -1 (balances array should be [1400, 87, -6])

export function reverseArray(arr) {
  if (!Array.isArray(arr) || !arr.length) {
    return null;
  }
  const reverse = arr.slice().reverse();

  return reverse;
}

// console.log(reverseArray([0, 0, 1, 3]));

export const getAdults = (obj) => {
    let adultObj = {};
  let userArray = Object.entries(obj);
  let filteredUserArray = userArray.filter((user) => user[1] >= 18);
  filteredUserArray.forEach((user) => {
    adultObj[user[0]] = user[1];
  });

  return adultObj;
};

console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }