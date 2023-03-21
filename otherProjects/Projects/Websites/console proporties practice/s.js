//getting specific letter
firstName = "ahmad";
lastLetter = firstName[firstName.length - 2]; //to second to last letter
console.log(lastLetter);
//conatitation
function words(Noun, Verb, Adjective, Adverb) {
  var result = "";
  result += "the" + " " + Adjective + " " + Noun + " " + Verb + " " + Adverb;

  return result;
}

console.log(words("dog", "ran", "huge", "quickly"));

//calling nested arrays
let myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14, 15],
];
myData = myArray[3][0][2];

console.log(myData);

//push function(add)to the end of the array
let ourArray = [
  ["ray", "jao", "j"],
  [1, 2, 3],
];
ourArray.push([3, 3, 3]);

console.log(ourArray);
//pop function(remove)last item

let hisArray = [
  ["ray", "jao", "j"],
  [1, 2, 3],
];
hisArray.pop();
console.log(hisArray);

//shift function (delete first item)
let thisArray = [
  ["ray", "jao", "j"],
  [1, 2, 3],
];

thisArray.shift();
console.log(thisArray);
//unshift add to the beggining of the array

let thatArray = [
  ["ray", "jao", "j"],
  [1, 2, 3],
];

thatArray.shift();
thatArray.unshift("haapy");
console.log(thatArray);

//parameters in function(varibles)

function m(a, b) {
  console.log(a - b);
}
m(70, 7);

//var only in function cant be called outside its function
