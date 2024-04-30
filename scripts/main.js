const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/spinning-colors.jpg") {
    myImage.setAttribute("src", "images/photo-de-groupe.jpg");
  } else {
    myImage.setAttribute("src", "images/spinning-colors.jpg");
  }
};
