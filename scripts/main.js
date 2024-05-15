const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/spinning-colors.jpg") {
    myImage.setAttribute("src", "images/photo-de-groupe.jpg");
  } else {
    myImage.setAttribute("src", "images/spinning-colors.jpg");
  }
};

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   if (!myName) {
//     setUserName();
//   } else {
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `Bienvenue ${myName}`;
//   }
// }

// if (!localStorage.getItem("name")) {
//   setUserName();
// } else {
//   const storedName = localStorage.getItem("name");
//   myHeading.textContent = `Bienvenue ${storedName}`;
// };

// myButton.onclick = () => {
//   setUserName();
// }
