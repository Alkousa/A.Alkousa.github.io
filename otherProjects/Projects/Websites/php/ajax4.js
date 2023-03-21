//document.getElementById("btn").addEventListener("click", getName);

document.getElementById("getForm").addEventListener("submit", getName);

function getName(e) {
  e.preventDeeault(); //#endregion

  var name = document.getElementById("name1").Value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "process.php?name=" + name, true);

  xhr.onload = function () {
    console.log(this.responseText);
  };
  xhr.send();
}
