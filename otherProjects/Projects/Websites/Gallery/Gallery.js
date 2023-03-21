let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImage;
let windowWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach(function (image, index) {
    image.onclick = function () {
      let getElementCss = window.getComputedStyle(image); //get the whole styling
      let getFullImageUrl = getElementCss.getPropertyValue("background-image"); //get a specifc style value
      let getImageUrlPos = getFullImageUrl.split("/img/thumbs/"); //to get the last part of the URL
      let setNewImgUrl = getImageUrlPos[1].replace('")', ""); //to delete ") to only get th name by ots self

      getLatestOpenedImage = index + 1; //to know which image is clicked9, (+ 1) isn't needed

      let container = document.body; //get Palce
      let newImgWindow = document.createElement("div"); //create Element
      container.appendChild(newImgWindow); // append the created element to div
      newImgWindow.setAttribute("class", "img-window"); //set attribute to the new element to style in css
      newImgWindow.setAttribute("onclick", "closeImg()"); //set a function  to close img on Clicking the new element

      let newImg = document.createElement("img"); //create element
      newImgWindow.appendChild(newImg); //append img tag to the div tag in the body
      newImg.setAttribute("src", "img/" + setNewImgUrl); //setting attribute with the URL that was created above
      newImg.setAttribute("id", "current-img"); //to remove img in the change function

      newImg.onload = function () {
        //function to ensure the image is loaded to get the width of the image for the buttons
        let imgWidth = this.width; //this is (newImg). to get the width of the imagee
        let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80; //to get distance to place the buttons
        //BUTTONS
        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("Next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(1)"); //1 is for going forward and 0 for backwards
        newNextBtn.style.cssText = "left:" + calcImgToEdge + "px;";

        let newPrevBtn = document.createElement("a"); //new a tag for th button
        let btnPrevText = document.createTextNode("Prev"); //the text inside the button
        newPrevBtn.appendChild(btnPrevText); //insert the previous text inide the button
        container.appendChild(newPrevBtn); //append the a tag and teh text to the body
        newPrevBtn.setAttribute("class", "img-btn-prev"); //add class to a tag
        newPrevBtn.setAttribute("onclick", "changeImg(0)"); //add onclick event to a tag
        newPrevBtn.style.cssText = "right:" + calcImgToEdge + "px;"; //getting the button for styling
      };
    };
  });
}
//close image and btn function
function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
  //changeDir will determine whether ()0-1to go forward or backwards
  document.querySelector("#current-img").remove();

  let getImgWindow = document.querySelector(".img-window"); //img container class
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg); //adding  img tag to the img container

  let calcNewImg; //Next button
  if (changeDir === 1) {
    calcNewImg = getLatestOpenedImage + 1; //to run next image by adding 1

    if (calcNewImg > galleryImages.length) {
      // to get the last img to go back to the first
      calcNewImg = 1;
    }
  } else if (changeDir === 0) {
    //prev Button
    calcNewImg = getLatestOpenedImage - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length; //not to go back to zero
    }
  }
  newImg.setAttribute("src", "img/img" + calcNewImg + ".jpg");
  newImg.setAttribute("id", "current-img");

  getLatestOpenedImage = calcNewImg;

  newImg.onload = function () {
    let imgWidth = this.width; //to have the width needeed for the different imgs
    let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

    let nextBtn = document.querySelector(".img-btn-next");
    nextBtn.style.cssText = "right:" + calcImgToEdge + "px;";

    let prevBtn = document.querySelector(".img-btn-prev");
    prevBtn.style.cssText = "left:" + calcImgToEdge + "px;";
  };
}
