// How can we use require here if it's frontend? We can thank webpack.
const MergeSort = require("./Sort");

// A link to our styles!
require("./index.css");

window.onload = () => {
  let result;

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

    // add step button
    const stepButton = document.createElement("button");
    stepButton.innerText = "Next";
    stepButton.id = "stepButton";
    document.getElementById("steps-div").appendChild(stepButton);

    const unsorted = [];
    const strings = inputField.value.split(",");

    // convert strings to ints
    for (let element of strings) {
      let num = parseInt(element, 10);
      unsorted.push(num);
    }
    console.log("UNSORTED ARRAY: " + unsorted);

    let myUnsorted = document.createElement("h2");
    myUnsorted.id = "unsorted";
    myUnsorted.innerText = "Unsorted: " + unsorted;
    document.getElementById("title").appendChild(myUnsorted);

    sortIt(unsorted);

    return;
  });

  document.addEventListener("call sort", () => {
    console.log("EVENT RECEIVED");
  });

  function sortIt(array) {
    const mergeSort = new MergeSort(array);
    result = mergeSort.sort();

    // remove later - just for my own reference in console
    mergeSort.printSteps();
    stepByStep(mergeSort);
    // display result here too?
    //displayResult(result);
    return;
  }

  function stepByStep(obj) {
    const title = document.getElementById("title");
    let newStep = document.createElement("div");
    newStep.id = "step";
    newStep.innerText = "[" + obj.unsortedSteps[0].left + "]";
    newStep.innerText += "[" + obj.unsortedSteps[0].right + "]";
    title.appendChild(newStep);

    //obj.unsortedS teps[0];
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
    document.getElementById("title").appendChild(resultHeader);
    return;
  }

  // TILES

  // const box = document.createElement("div");
  // box.setAttribute("id", "tile");
  // document.getElementById("array").appendChild(box);

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
