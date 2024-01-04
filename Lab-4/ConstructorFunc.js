function PersonConstructor(fullName, money, sleepMood, healthRate) {
  this.fullName = fullName;
  this.money = money;
  this.sleepMood = sleepMood;
  this.healthRate = healthRate;
}

this.sleep = function (hours) {
  if (hours === 7) {
    this.sleepMood = "happy";
  } else if (hours < 7) {
    this.sleepMood = "tired";
  } else {
    this.sleepMood = "lazy";
  }
};

this.eat = function (meals) {
  if (meals === 3) {
    this.healthRate = 100;
  } else if (meals === 2) {
    this.healthRate = 75;
  } else if (meals === 1) {
    this.healthRate = 50;
  }
};

this.buy = function (items) {
  const cost = items * 10;
  if (cost <= this.money) {
    this.money -= cost;
  } else {
    console.log("Not enough money to buy the items.");
  }
};

const personCF = new PersonConstructor("Mahmoud", 500, "happy", 80);
console.log(personClass);
personCF.sleep(8);
personCF.eat(2);
personCF.buy(1);
console.log(personCF);
