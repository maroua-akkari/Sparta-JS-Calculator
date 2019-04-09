//what calc do you want to use? (a) basic (b) advanced
//ask user for 1st number
//ask user for operation symbol (a) = +*/- (b) ^square root
//ask user for 2nd number
//present back results in an alert


var calculatorType = prompt("What calculator do you want to use? (a) basic or (b) advanced");

if (calculatorType.toLowerCase() == "a") {
  alert("You are now using a basic calculator");
} else if (calculatorType.toLowerCase() == "b") {
  alert("You are now using an advanced calculator");
} else alert("Please enter type of calculator");

// if (calculatorType.toLowerCase() == "b") {
//   alert(powerOf);
// } else alert("try again");



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

// var powerOf = prompt("Enter to which power")
// var powerOfResult = Math.pow(parseInt(firstNumber), parseInt(secondNumber));
