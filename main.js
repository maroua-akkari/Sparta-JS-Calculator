
var calculatorType = prompt("What calculator do you want to use? (a) basic or (b) advanced");

if (calculatorType.toLowerCase() == "a") {
  alert("You are now using a basic calculator");
  var firstNumber = prompt("Enter your first number");
  var operator = prompt("Which operator would you like to use? +/*-");
  var secondNumber = prompt("Enter your second number");

  switch (operator) {
    case "+":
      alert(parseInt(firstNumber)+parseInt(secondNumber));
      break;
    case "-":
      alert(parseInt(firstNumber)-parseInt(secondNumber));
      break;
    case "/":
      alert(parseInt(firstNumber)/parseInt(secondNumber));
      break;
    case "*":
      alert(parseInt(firstNumber)*parseInt(secondNumber));
      break;
    default:
       alert("try again");
  }

} else if (calculatorType.toLowerCase() == "b") {
  alert("You are now using an advanced calculator");
  var powerOrSquare = prompt("To calculate the square of a number enter a, to calculate the square root of a number enter b");
  if (powerOrSquare == "a") {
    var firstNumber = parseInt(prompt("Enter your first number"));
    var powerOf = parseInt(prompt("Enter to which power"));
    var powerOfResult = alert(firstNumber ** powerOf);
  } else if (powerOrSquare == "b") {
    var squareRootNumber = parseInt(prompt("Enter the number you would like to square root"));
    var squareOfNumber = alert(Math.sqrt(squareRootNumber));
  } else alert("Please enter type of calculator")
}
