//UI logic:

function handleClick() {
  const inputNumber = document.getElementById("inputNumber").value;
  const result = mrRobo(inputNumber);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Result: " + result.join(", ");
}


//Business logic:

function mrRobo(inputNumber) {
  const result = [];
  for (let i = 0; i <= inputNumber; i++) {
    if (i.toString().includes('3')) {
      result.push("Won't you be my neighbor?");
    } else if (i.toString().includes('2')) {
      result.push("Boop!");
    } else if (i.toString().includes('1')) {
      result.push("Beep!");
    } else {
      result.push(i);
    }
  }
  return result;
};

