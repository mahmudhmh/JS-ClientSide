let FLag = true;

while (FLag) {
  let choice = prompt(
    "Choose an option:\n1. Sum and Average\n2. Phone Book App\n3. Area Calculator\n4. Exit"
  );

  switch (choice) {
    case "1":
      // Lap 1 - Sum and Average
      let numValues = prompt("Enter how many numbers you want to sum:");
      let numbers = [];

      for (let i = 0; i < numValues; i++) {
        numbers.push(parseFloat(prompt(`Enter number ${i + 1}:`)));
      }

      let sum = numbers.reduce((acc, num) => acc + num, 0);
      let average = sum / numValues;

      alert(`Sum: ${sum}\nAverage: ${average}`);
      break;

    case "2":
      // Lap 2 - Phone Book App
      let contacts = [];

      while (true) {
        let operation = prompt(
          "Enter operation ('add' or 'search', or 'exit' to go back to main menu):"
        );

        if (operation === "add") {
          let name = prompt("Enter contact name:");
          let phoneNumber = prompt("Enter contact phone number:");
          let contact = { name, phoneNumber };
          contacts.push(contact);
        } else if (operation === "search") {
          let searchTerm = prompt("Enter Data to find:");
          let foundContacts = contacts.filter(
            (contact) =>
              contact.name.includes(searchTerm) ||
              contact.phoneNumber.includes(searchTerm)
          );

          if (foundContacts.length > 0) {
            alert(`Found contacts:\n${JSON.stringify(foundContacts, null, 2)}`);
          } else {
            alert("No contacts found.");
          }
        } else if (operation === "exit") {
          break;
        } else {
          alert("Invalid operation.");
        }
      }
      break;

    case "3":
      // Bonus - Area Calculator
      let shapeName = prompt("Enter the name of the shape:");
      let area;

      switch (shapeName.toLowerCase()) {
        case "circle":
          let radius = prompt("Enter the radius:");
          area = Math.PI * Math.pow(radius, 2);
          break;
        case "triangle":
          let base = prompt("Enter the base:");
          let heightTriangle = prompt("Enter the height:");
          area = 0.5 * base * heightTriangle;
          break;
        case "square":
          let sideSquare = prompt("Enter the length of a side:");
          area = Math.pow(sideSquare, 2);
          break;
        case "rectangle":
          let lengthRectangle = prompt("Enter the length:");
          let widthRectangle = prompt("Enter the width:");
          area = lengthRectangle * widthRectangle;
          break;
        case "parallelogram":
          let baseParallelogram = prompt("Enter the base:");
          let heightParallelogram = prompt("Enter the height:");
          area = baseParallelogram * heightParallelogram;
          break;
        case "trapezium":
          let sideA = prompt("Enter the length of side A:");
          let sideB = prompt("Enter the length of side B:");
          let heightTrapezium = prompt("Enter the height:");
          area =
            0.5 * (parseFloat(sideA) + parseFloat(sideB)) * heightTrapezium;
          break;
        case "ellipse":
          let semiMinorAxis = prompt("Enter the semi-minor axis:");
          let semiMajorAxis = prompt("Enter the semi-major axis:");
          area = Math.PI * semiMinorAxis * semiMajorAxis;
          break;
        default:
          alert("Shape not supported.");
      }

      if (area !== undefined) {
        alert(`The area of the ${shapeName} is: ${area} cm^2`);
      }
      break;

    case "4":
      FLag = false;
      break;

    default:
      alert("Invalid choice. Please enter a number between 1 and 4.");
  }
}
