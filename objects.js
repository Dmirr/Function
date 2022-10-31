let testUser = new Object();

testUser.name = "Dmitriy";
testUser.age = 45;
testUser.city = "Belgrade";

console.log(testUser);

let testUserLiteral = {
  name: "Dmitriy",
  age: 45,
  city: "Belgrade",
};

console.log(testUserLiteral);

let testUserArray = new Array("dmitriy", 45, "belgrade"); //массив (array)
console.log(testUserArray);

let testUserFunction = new Function(
  "userName",
  "age",
  "city",
  "return userName+age+city"
);
console.log(testUserFunction("Dmitriy", 45, "Belgrade"));

let testUserSimple = {
  name: "Dmitriy",
  age: 45,
  "city-default": "Belgrade",
};
testUserSimple.car = "BMW";
console.log(testUserSimple);
if (testUserSimple.age > 30 && testUserSimple.car == "BMW") {
  console.log("We can offer a credit for you");
} else {
  console.log("You are too young");
}

let calculation = {
  april: 5000,
  may: 4000,
  june: 3000,
  calculateAverage: function () {
    let average = (calculation.april + calculation.may + calculation.june) / 3;
    console.log(
      `average for ${calculation.april}, ${calculation.may}, ${calculation.june} is ${average}`
    );
  },
};
calculation.calculateAverage();
