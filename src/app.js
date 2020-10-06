// How can we use require here if it's frontend? We can thank webpack.
const MergeSort = require("./Sort");

// A link to our styles!
require("./index.css");

window.onload = () => {
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

  // collect user's list of numbers when button clicked
  inputButton.addEventListener("click", () => {
    // remove other stuff on screen
    document.getElementById("input-box").remove();

    const unsorted = [];
    const strings = inputField.value.split(",");

    console.log("strings " + strings);
    // convert strings to ints
    for (let element of strings) {
      let num = parseInt(element, 10);
      unsorted.push(num);
    }
    console.log("UNSORTED ARRAY: " + unsorted);

    sortIt(unsorted);

    return;
  });

  document.addEventListener("call sort", () => {
    console.log("EVENT RECEIVED");
  });

  function sortIt(array) {
    const mergeSort = new MergeSort(array);
    const result = mergeSort.sort();
    displayResult(result);
  }

  function displayResult(result) {
    // if there is already a result, remove it
    if (document.getElementById("result")) {
      document.getElementById("result").remove();
    }
    string = JSON.stringify(result);
    const resultHeader = document.createElement("h1");
    resultHeader.id = "result";
    const textNode = document.createTextNode(string);
    resultHeader.appendChild(textNode);
    document.getElementById("array").appendChild(resultHeader);
    return;
  }

  // TILES

  const box = document.createElement("div");
  box.setAttribute("id", "tile");

  document.getElementById("array").appendChild(box);

  const test = document.createElement("h1");
  test.innerText = "Merge Sort";
  document.getElementById("title").appendChild(test);
};

module.exports = window;

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
