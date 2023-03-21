let posts = [
  { title: "rem", body: "ou" },
  { title: "res", body: "v" },
];
function getPosts() {
  setTimeout(function () {
    let output = "";

    for (var i in posts) {
      output += "<ul>" + "<li>" + posts[i].title + "</li>" + "</ul>"; //option 1
    }

    posts.forEach(function (post, index) {
      //option 2
      output += `<ul><li>${post.body}</li></ul>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPosts(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

createPosts({ title: "re", body: "ret" }, getPosts);
