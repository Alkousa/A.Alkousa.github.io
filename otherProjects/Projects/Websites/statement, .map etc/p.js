let todos = [
  { id: 0, name: "take out trash", isCompleted: true },
  { id: 1, name: "js work", isCompleted: false },
  { id: 2, name: "take", isCompleted: true },
];

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].name);
}

let i = 0;
while (i < todos.length) {
  console.log(todos[i].name);
  i++;
}

for (let todo of todos) {
  console.log(todo.name);
}

//forEach, map, filter
todos.forEach(function (todo) {
  console.log(todo.name);
});
//put a parameter in the function to be used as a varible for each item or each (todo)
let todoText = todos.map(function (todo) {
  return todo.name;
});
console.log(todoText);
//////////////////////////
let todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted === true;
});
console.log(todoCompleted);
/////////////////////////////
let todoCompleteds = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.name;
  });
console.log(todoCompleteds);
/////////////////////
let xs = 11;

let colors = xs > 10 ? "red" : "blue"; //?means then or {} , : means else
console.log(colors);
////////////////////
let x = 9;

let color = x > 10 ? "red" : "blue";

switch (color) {
  case "red": //if color is red
    console.log("color is red");
    break;
  case "blue": //if
    console.log("color is blue");
    break;
  default:
    //else
    console.log("color is neither");
    break;
}
