var numOne = document.getElementById("num-One");
var numTwo = document.getElementById("num-Two");
var addSum = document.getElementById("add-Sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
  var One = parseFloat(numOne.value) || 0;
  var Two = parseFloat(numTwo.value) || 0;

  addSum.innerHTML = "Your sum is" + " " + (One + Two);
}

/*var warzone = document.getElementById("warzone");
var warzonepic = document.getElementById("warzone-pic");

warzone.addEventListener("click", function() {
 if (warzonepic.className === "hide") {
     warzonepic.className = "";
} else {
warzonepic.className = "hide";
}
});

var rocket = document.getElementById("rocket");
var rocketpic = document.getElementById("rocket-pic");

rocket.addEventListener("click", function() {
 if (rocketpic.className === "hide") {
     rocketpic.className = "";
} else {
rocketpic.className = "hide";
}
});*/

var warzone = document.getElementById("warzone");
var rocket = document.getElementById("rocket");

warzone.addEventListener("click", piclink);
rocket.addEventListener("click", piclink);

function piclink() {
  var allImages = document.querySelectorAll("img");

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);

  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}

var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length);
}
function updateItem() {
  this.previousElementSibiling.innerHTML = this.value;
  this.parentNode.className = "";
}

function itemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(this);
  }
}

$(function () {
  $(".panel-button").on("click", function () {
    $("#panel1").toggle();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".button").onclick = count;
});

let counter = 0;

function count() {
  counter++;
  document.querySelector("#counter").innerHTML = counter;

  if (counter % 10 === 0) {
    alert(`counter is at ${counter}!`);
  }
}
