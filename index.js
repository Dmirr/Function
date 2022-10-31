function showMessage(message) {
  console.log(message);
}
showMessage("Hey! How are you?");
showMessage("Hey! How are you?");
showMessage("Be ware of dog!");

function multipleSalary(salary, bonus) {
  return salary * bonus;
}
console.log(multipleSalary(30000, 1.5));

const validateInput = function (input, rule) {
  //функция объявлена через переменную
  console.log(input.length);
  input.length > rule
    ? console.log("Ok, Valid input...")
    : console.log("Validation was failded");
};

validateInput("Hello world!", 10);

const createUser = (name, age, email) => {
  return {
    id: "001",
    userName: name,
    age: age,
    UserEmail: email,
  };
};
console.log(createUser("Dmitriy", 45, "ppk77@mail.com"));

const createUser1 = (name, age, email) => {
  //arrow function
  let user = {
    id: "001",
    userName: name,
    age: age,
    UserEmail: email,
  };

  return user;
};
console.log(createUser("Dmitriy", 45, "ppk77@mail.com"));

//callback function:
function one(a, b) {
  return a + b;
}

function two(calc = one(2, 3)) {
  console.log(calc);
}
two();
two(15);

function logSystemStatus(status, callback) {
  console.log(`The system status is: ${status}`);
  callback();
}

logSystemStatus("Ready", function () {
  console.log("The status was typed...");
});
function updateSystemStatus() {
  console.log("Status was updated...");
}
logSystemStatus("Not ready", updateSystemStatus);
