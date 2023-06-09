//Business logic

function mrRobo(inputNumber) {
  const result = [];
  for (let i = 0; i <= inputNumber; i++) {
    if (i.toString().includes('3')) {
      result.push("Won't you be my neighbor");
    } else {
      result.push(i);
    }
  }
  return result;
};

































//UI logic

window.onload = function () {
  document.querySelector("button").onclick = function (getResults) {
    const inputNumber = document.getElementById("number").value;
    console.log
  }
}; 