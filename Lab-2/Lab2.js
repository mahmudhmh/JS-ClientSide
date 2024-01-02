//Example 1
function getUserAgeStatus() {
  let age;
  do {
    age = prompt("Enter your age:");
    if (age === null) {
      return;
    }
    age = parseInt(age);
  } while (isNaN(age) || age <= 0);

  let status;
  switch (true) {
    case age >= 1 && age <= 10:
      status = "Child";
      break;
    case age >= 11 && age <= 18:
      status = "Teenager";
      break;
    case age >= 19 && age <= 50:
      status = "Grown up";
      break;
    default:
      status = "Old";
  }
  alert(`You are a ${status}.`);
}

//Example 2
function countVowelsInString() {
  let inputString = prompt("Enter a string:");
  if (inputString !== null) {
    const vowels = ["a", "e", "o", "u", "i"];
    let vowelCount = 0;

    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i].toLowerCase())) {
        vowelCount++;
      }
    }

    alert(`Number of vowels: ${vowelCount}`);
  }
}

//Example 3
function convertTo12HourClock() {
  function convertTo12HourClock(hour) {
    switch (true) {
      case hour === 0:
        return "12AM";
      case hour >= 1 && hour <= 11:
        return `${hour}AM`;
      case hour === 12:
        return "12PM";
      default:
        return `${hour - 12}PM`;
    }
  }

  let hour = prompt("Enter the hour in 24-hour format:");
  if (hour !== null) {
    hour = parseInt(hour);
    if (!isNaN(hour) && hour >= 0 && hour <= 23) {
      alert(`Converted time: ${convertTo12HourClock(hour)}`);
    } else {
      alert("Invalid input for hour.");
    }
  }
}

//Test
let choice;
do {
  choice = prompt(
    "Enter a number \n (1) for Age Status, \n (2) for Count Vowels, \n (3) for 12-Hour Clock, \n (4) cancel to exit:"
  );
  switch (choice) {
    case "1":
      getUserAgeStatus();
      break;
    case "2":
      countVowelsInString();
      break;
    case "3":
      convertTo12HourClock();
      break;
    case "4":
      break;
  }
} while (choice !== null && choice !== "4");
