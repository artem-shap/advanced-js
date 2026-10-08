// exercise 1
let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)

alert( filtered )  // 3,1 (matching values)

alert( arr )      // 5,3,8,1 (not modified)
  function filterRange(arr, a, b) {
    return arr.filter(function (item) {
      return item >= a && item <= b;
    });
  }
  
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  
  alert(filtered); // [3, 1]
  alert(arr);      // [5, 3, 8, 1] (not modified)


  //exercise 2
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let users = [john, pete, mary];
  
  let names = users.map(function (user) {
    return user.name;
  });
  
  alert(names); // ["John", "Pete", "Mary"]

  //exercise 3
function getAverageAge(users) {
    let total = users.reduce(function (sum, user) {
      return sum + user.age;
    }, 0); // 0 = start value of sum
  
    return total / users.length;
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  
  let arr = [john, pete, mary];
  
  alert(getAverageAge(arr)); // 28