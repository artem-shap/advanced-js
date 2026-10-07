// exersice 1
let user = {
  name: "John",
  years: 30
}

let {name ,years: age, isAdmin = false} = user;

// exersice 2
const planetName = "Earth";
let currentUserName = "John";

// exersice 3
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi()
// it will throw an error because the function sayHi is defined inside the if block and cannot be accessed outside of it. To fix this, you can move the function definition outside of the if block or use a different approach to define the function.


// exersice 4
let user = {};       
user.name = "John";      
user.surname = "Smith";       
user.name = "Pete";       
delete user.name;

//exersice 5
const user = {
  name: "John"
}

// does it work?
user.name = "Pete"
//Yes, it works . With const stops me from reassigning the variable user to a new object. But the properties of the object can still change.

//exersice 6
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

//exersice 7
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

result = (a + b < 4) ? 'Below' : 'Over';

//exersice 8
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

message = (login == 'Employee') ? 'Hello'
        : (login == 'Director') ? 'Greetings'
        : (login == '') ? 'No login'
        : '';