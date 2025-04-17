//1) Create a Car class with properties make, model, and year, then make instance of electric car which have battery level

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return console.log(`${this.year} ${this.make} ${this.model}`);
  }
}

class BatteryCar extends Car {
  constructor(make, model, year, batteryLevel) {
    super(make, model, year);
    this.batteryLevel = batteryLevel;
  }

  getBatteryLevel() {
    console.log(`my battery is at ${this.batteryLevel}`);
  }
}

const myCar = new Car("Ferrari", "488", 2020);

myCar.getDetails();

const myBatteryCar = new BatteryCar("Tesla", "Model LLL", 2019, 85);

myBatteryCar.getDetails();
myBatteryCar.getBatteryLevel();

//2) Create a Library class that stores a list of books (as an array) which have following methods addBook(), removeBook(), listBooks(). listBooks should have array of objects with following properties: [
//{
//    author: 'George Orwell',
//    book: 'Nineteen Eighty-Four',
//    year: 1948,
//    }
//    ]

class Libary {
    
}
