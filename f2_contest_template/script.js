/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(arr => {
    if (arr.profession === "developer") {
        console.log(arr);
    }
});
}

function PrintDeveloperbyForEach() {
  arr.forEach(arr => {
    if (arr.profession === "developer") {
        console.log(arr);
    }
});
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
}

function removeAdmin() {
  arr = arr.filter(employee => arr.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  const newEmployees = [
    { id: 5, name: "alice", age: "22", profession: "designer" },
    { id: 6, name: "bob", age: "24", profession: "manager" },
    { id: 7, name: "charlie", age: "23", profession: "analyst" }
];
const combinedArray = arr.concat(newEmployees);
console.log(combinedArray);
}

