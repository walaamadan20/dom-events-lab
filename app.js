// Initialisation
let num1 = undefined;
let num2 = undefined;
let total = undefined;
let operator = null;

const initialValues = () => {
  num1 = undefined;
  num2 = undefined;
  total = undefined;
  operator = null;
};

// Constants
const calculator = document.querySelector('#calculator');
const numButtons = document.querySelectorAll(".button.number");
const displayScreen = document.querySelector(".display");
const opDivide = document.querySelector("#devide");
const opMultiply = document.querySelector("#multiply");
const opMinus = document.querySelector("#minus");
const opAdd = document.querySelector("#add");
const clearButton = document.querySelector('#clear');
const equalButton = document.querySelector('#equal');



numButtons.forEach(function(eachButton) {
  eachButton.addEventListener('click', (event) => {
    console.log(event.target)
    if (operator === null) {
      if (num1 === undefined) {
        num1 = event.target.textContent;
        num1 = Number(num1)
      } else {
        num1 += event.target.textContent;
        num1 = Number(num1)
      }
    } else {
      if (num2 === undefined) {
        num2 = event.target.textContent;
        num2 = Number(num2)
      } else {
        num2 += event.target.textContent;
        num2 = Number(num2)
      }
    }
    displayScreen.textContent = operator === null ? num1 : num2;
  });
});

opDivide.addEventListener('click', () => {
  operator = "/";
  displayScreen.textContent = operator;
});


opMultiply.addEventListener('click', () => {
  operator = "*";
  displayScreen.textContent = operator;
});

opMinus.addEventListener('click', () => {
  operator = "-";
  displayScreen.textContent = operator;
});

opAdd.addEventListener('click', () => {
  operator = "+";
  displayScreen.textContent = operator;
});

const calculate = () => {
  if (num1 !== undefined && num2 !== undefined) {
    if (operator === "/") {
      total = num1 / num2;
      displayScreen.textContent = total;
      num1 = total;

    } else if (operator === "*") {
      total = num1 * num2;
      displayScreen.textContent = total;
      num1 = total;

    } else if (operator === "+") {
      total = num1 + num2;
      displayScreen.textContent = total;
      num1 = total;

    } else if (operator === "-") {
      total = num1 - num2;
      displayScreen.textContent = total;
      num1 = total;
    }

}};


clearButton.addEventListener('click', () => {
  initialValues();
  displayScreen.textContent = '';
});

equalButton.addEventListener('click', () => {
  calculate();
});