//function , parameter
//////////////////////////////
let game = "warzon"; //assign a var

function gaming(text) {
  let upperCase = text.toUpperCase();
  alert(upperCase);
}

gaming(game);
//////////////////////////
//set a function
//set parameter
//assign a var to  the parameter, then set a function to it.
// alert the parameter var
//call the function

//THIS
///////////////////////////
let user = {
  name: "Ahmad",
  age: 20,
  games: ["Warzon", "fortnite", "rainbow six seige"],

  info: function () {
    console.log(this.games[0]);
  },
};

user.info();
/////////////////////////////
//create an object with info
//create a function:
//1st-console.log THIS(which is the USER)
// 2nd-identify the info you need.

//call the function with the user object

//LOOPS
let names = ["James", "Sam", "Clover", "Fenny"];

for (name of names) {
  console.log(`hello there ${name}`);
}

let loading = 0;

while (loading < 100) {
  console.log("web is still loading");

  loading++;
}

let btn = document.querySelector(".add-list-btn");
let nameList = document.querySelector(".name-list");
let inputList = document.querySelector(".list-input");

btn.addEventListener("click", function () {
  let newLi = document.createElement("li");
  let newText = document.createTextNode(inputList.value);

  newLi.appendChild(newText);
  nameList.appendChild(newLi);
});
