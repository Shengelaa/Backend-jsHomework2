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
  constructor() {
    this.books = [];
    this.Id = 1;
  }

  addBook(author, book, year) {
    this.books.push({ id: this.Id++, author, book, year });
  }

  removeBook(id) {
    this.books = this.books.filter((b) => b.id !== id);
  }

  listBooks() {
    console.log(this.books);
  }
}

const myLibrary = new Libary();
myLibrary.addBook("George ORwell", "Ninteen Eighty-four", 1948);

myLibrary.addBook("AvtoriaGela", "GelasWigni", 2023);

myLibrary.removeBook(2);

myLibrary.listBooks();

//
//
//3) Create a class Employee with a method calculateSalary() that calculates salary based on hours worked and hourly rate.

class Employee {
  constructor(name, worked, hourly = 25) {
    this.name = name;
    this.worked = worked;
    this.hourly = hourly;
  }

  calculateSalary() {
    const salary = this.worked * this.hourly;
    console.log(
      `Employees Name: ${this.name} Has made ${salary} in ${this.worked} Hours`
    );
  }
}

const employee1 = new Employee("levani", 5);

employee1.calculateSalary();
