const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

submitBtn = document.getElementById("submit");
plusBtn = document.getElementById("plus");
minusBtn = document.getElementById("minus");

let action = "+";

plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  return actionSymbol == "+" ? num1 + num2 : num1 - num2;
}

submitBtn.onclick = function () {
  resultElement.textContent = computeNumbersWithAction(input1, input2, action);
};
