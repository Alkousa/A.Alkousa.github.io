document.getElementById("btn").addEventListener("click", loadUsers);

function loadUsers() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.github.com/users", true);

  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      var output = "";
      for (var i in users) {
        output +=
          '<div class= "user">' +
          '<img src= "' +
          users[i].avatar_url +
          '" width = "70"height="70">' +
          "<ul>" +
          "<li>" +
          users[i].id +
          "</li>" +
          "<li>" +
          users[i].login +
          "</li>" +
          "</ul>" +
          "</div>";
      }
      document.getElementById("users").innerHTML = output;
    }
  };
  xhr.send();
}
