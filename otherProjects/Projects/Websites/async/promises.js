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

function createPosts(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("ERROR");
      }
    }, 2000);
  });
}
const promise1 = promise.resolve("Hi");

const promise2 = 10;

const promise3 = new promise((resolve, reject) => {
  setTimeout(resolve, 2000, "B");
});

promise.all([promise2, promise3]).then(function (values) {
  console.log(values);
});
//createPosts({ title: "post three", body: "content" })
// .then(getPosts)
// .catch((err) => console.log(err));
