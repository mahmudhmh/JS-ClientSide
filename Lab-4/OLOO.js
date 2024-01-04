const PersonOLOO = {
  init(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
    return this;
  },

  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  },

  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  },

  buy(items) {
    const cost = items * 10;
    if (cost <= this.money) {
      this.money -= cost;
    } else {
      console.log("Not enough money to buy the items.");
    }
  },
};

const personOLOO = Object.create(PersonOLOO).init("Mahmoud", 500, "happy", 80);
console.log(personOLOO);
personOLOO.sleep(8);
personOLOO.eat(2);
personOLOO.buy(1);
console.log(personOLOO);
