// How can we use require here if it's frontend? We can thank webpack.
const MergeSort = require("./Sort");

// A link to our styles!
require("./index.css");

const sort = new MergeSort([3, 11, 1, 2, 7, 5, 9]);
const result = sort.sort();

// INPUT FIELD

// input field for array
const inputField = document.createElement("input");
inputField.id = "inputField";
inputField.type = "text";
inputField.value = "4, 1, 10, 3, 7";
document.getElementById("input-box").appendChild(inputField);

// input field description
const inputTitle = document.createElement("h2");
const inputExplainer = document.createElement("p");
inputExplainer.innerText = "Range: 1 to 10";
inputTitle.innerText = "Enter a list of numbers separated by commas";
inputTitle.append(inputExplainer);
document.getElementById("input-box").prepend(inputTitle);

// clear example text on click
inputField.addEventListener("click", () => {
  inputField.value = "";
});

// input button to create list
const inputButton = document.createElement("button");
inputButton.innerText = "Sort";
document.getElementById("input-box").appendChild(inputButton);

const box = document.createElement("div");
box.setAttribute("id", "tile");

document.getElementById("array").appendChild(box);

const test = document.createElement("h1");
test.innerText = "Merge Sort";
document.getElementById("title").appendChild(test);

function displayResult(result) {
  string = JSON.stringify(result);
  console.log(string);
  const resultHeader = document.createElement("h1");
  const textNode = document.createTextNode(string);
  resultHeader.appendChild(textNode);
  document.getElementById("array").appendChild(resultHeader);
  return;
}

displayResult(result);

// function createCheesyTitle(slogan) {
//   const container = document.createElement("h1");
//   const textNode = document.createTextNode(slogan);
//   container.appendChild(textNode);
//   return container;
// }

// const title = createCheesyTitle("test");
// document.getElementById("title").appendChild(title);

// /*
//     An simple example of how you can make your project a bit more
//     interactive, if you would like.

//     In our `index.html` page, we have a short form.
//     Here is the code that talks to it.
//   */
// function changeTitle(event) {
//   event.preventDefault();
//   // console.log('What is an event?', event);
// }

// const form = document.querySelector("form");
// document.addEventListener("DOMContentLoaded", () => {
//   form.onsubmit = changeTitle;
// });
