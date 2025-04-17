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
  }

  addBook(author, book, year) {
    this.books.push({ author, book, year });
  }

  removeBook(book) {
    this.books = this.books.filter((b) => b.book !== book);
    //მოკლედ B არის წიგნების მასივი, B.book არის წიგნის სახელი, თუ B.book -
    //არ უდრის მაშინ რჩება მასივშ, თუ უდრის removeBookში გადმოცემულ
    //სახელს რა მაშინ ამოვარდება მასივიდან
  }

  listBooks() {
    console.log(this.books);
  }
}

const myLibrary = new Libary();
myLibrary.addBook("George ORwell", "Ninteen Eighty-four", 1948);

myLibrary.addBook("AvtoriaGela", "GelasWigni", 2023);

myLibrary.removeBook("Ninteen Eighty-four");

myLibrary.listBooks();
