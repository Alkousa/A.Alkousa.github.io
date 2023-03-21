document.getElementById("btn").addEventListener("click", loadUser);

function loadUser() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "user.json", true);

  xhr.onload = function () {
    if (this.status == 200) {
      var user = JSON.parse(this.responseText); //to access Json files

      var output = "";

      output +=
        "<ul>" +
        "<li>ID:" +
        user.id +
        "</li>" +
        "<li>Name:" +
        user.name +
        "</li>" +
        "</ul>";

      document.getElementById("user").innerHTML = output;
    }
  };
  xhr.send();
}
