function lap1Login() {
  let username = prompt("Enter your username:");
  let password = prompt("Enter your password:");

  if (username === "admin" && password === "421$$") {
    alert("Welcome! Login success");
  } else {
    alert("Incorrect username or password. Please check your credentials.");
  }
}

function lap2Calc() {
  let num1 = parseFloat(prompt("Enter the first number:"));

  if (isNaN(num1)) {
    alert("Invalid input. Please enter a valid number.");
    return;
  }

  let operation = prompt(
    "Enter the operation (sum, multi, subtract, division, modulus):"
  );
  let num2 = parseFloat(prompt("Enter the second number:"));
  let result;

  switch (operation) {
    case "sum":
      result = num1 + num2;
      break;
    case "multi":
      result = num1 * num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "division":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        alert("Cannot divide by zero. Please enter a non-zero divisor.");
        return;
      }
      break;
    case "modulus":
      result = num1 % num2;
      break;
    default:
      alert("Invalid operation. Please enter a valid operation.");
  }

  alert("Result: " + result);
}

function bonusCalc() {
  let lastResult = 0;

  while (true) {
    let num1 = parseFloat(
      prompt("Enter the first number (or type 'exit' to end):")
    );

    if (isNaN(num1)) {
      break;
    }

    let operation = prompt(
      "Enter the operation (sum, multi, subtract, division, modulus):"
    );
    let num2 = parseFloat(prompt("Enter the second number:"));

    switch (operation) {
      case "sum":
        lastResult = lastResult + num2;
        break;
      case "multi":
        lastResult = lastResult * num2;
        break;
      case "subtract":
        lastResult = lastResult - num2;
        break;
      case "division":
        if (num2 !== 0) {
          lastResult = lastResult / num2;
        } else {
          alert("Cannot divide by zero. Please enter a non-zero divisor.");
          return;
        }
        break;
      case "modulus":
        lastResult = lastResult % num2;
        break;
      default:
        alert("Invalid operation. Please enter a valid operation.");
    }

    alert("Result: " + lastResult);
  }
}

while (true) {
  let choice = prompt(
    "Choose a function \n (1) Login  \n (2) Calc \n (3) Bonus \n (4) Exit"
  );

  switch (choice) {
    case "1":
      lap1Login();
      break;
    case "2":
      lap2Calc();
      break;
    case "3":
      bonusCalc();
      break;
    case "4":
      alert("Exiting the program. Goodbye!");
      break;
    default:
      alert("Invalid choice. Please enter a valid option.");
  }
}
