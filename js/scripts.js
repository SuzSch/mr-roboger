//Business logic

function mrRobo(inputNumber) {
  const result = [];
  for (let i = 0; i <= inputNumber; i + 1) {
    if (i.toString().includes('1')) {
      result.push('beep!');
    } else {
      result.push(i);
    }
  }
  return result;
  console.log
};






























//UI logic

window.onload = function () {
  document.querySelector("button").onclick = function (getResults) {
    const inputNumber = document.getElementById("number").value;
    console.log
  }
}; 