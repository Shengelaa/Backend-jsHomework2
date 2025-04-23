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

//4) Create a class ShoppingCart that holds a list of items. methods, addItem(), deleteItem(), updateItem(), calculateTotal()
//

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, price) {
    this.items.push({ name, price });
  }

  deleteItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }

  //DeleteItemში არ გამომიყენებია Id, გამოვიყენე სახელით წაშლა
  //თუ პრობლემაა უცებ შემიძლია გადასწორება, ან მეთოდს ვიყენებდი მესამე დავალებაში მარა გადავცვალე

  updateItem(name, newPrice) {
    const item = this.items.find((item) => item.name === name);
    if (item) {
      item.price = newPrice;
    }
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const myShoppingCart = new ShoppingCart();

myShoppingCart.addItem("book", 20);
myShoppingCart.addItem("Egg", 100);
myShoppingCart.addItem("Ball", 50);
myShoppingCart.deleteItem("Egg");
console.log(myShoppingCart.calculateTotal());

//5)  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars. getAllCars should be array of objects with following properties: [
//{
//  year: 2010 // use random year from 2010 to 2024 using math.random
//  model: 'Ferrari',
// price: 350000
//  }
//]
//
//

class CarFactory {
  constructor() {
    this.cars = [];
    this.id = 1;
  }

  addCar(model, price) {
    const year = Math.floor(Math.random() * (2024 - 2010) + 2010);
    this.cars.push({ id: this.id++, model, price, year });
  }

  deleteCar(id) {
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  updateCar(id, newModel, newPrice) {
    const car = this.cars.find((car) => car.id === id);
    if (car) {
      car.model = newModel;
      car.price = newPrice;
    }
  }

  getAllCars() {
    return this.cars;
  }
}

const myCar1 = new CarFactory();
myCar1.addCar("Ferrari", 250000);
myCar1.addCar("Subaru", 50000);
myCar1.addCar("Toyota", 10000);

myCar1.updateCar(2, "Subaru", 100000);
myCar1.deleteCar(3);
console.log(myCar1.getAllCars());

//6) Create a class rectangle that receives width and height and add this methods getArea(), getPerimeter(), isSquare()

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  //Tu Rectanglis width da height tolia mashin otxkurtxedia chveulebrivi
}

const myRectangle = new Rectangle(10, 20);

console.log(myRectangle.getArea());
console.log(myRectangle.getPerimeter());
console.log(myRectangle.isSquare());

///7) Create a Class Inventory that holds a list of items, Each item has name, stock, price Methods: addItem(), updateStock(name, quantity), checkAvailability(name), calculateValue()
///
///

class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(name, stock, price) {
    this.items.push({ name, stock, price });
  }

  updateStock(name, quantity) {
    const item = this.items.find((item) => item.name === name);
    if (item) {
      item.stock += quantity;
    }
  }
  checkAvailability(name) {
    const item = this.items.find((item) => item.name === name);
    if (item) {
      return item.stock > 0 ? "Available" : "Not Available";
    }
  }

  calcuteValue() {
    return this.items.reduce(
      (total, item) => total + item.stock * item.price,
      0
    );
  }
}

const myInventory = new Inventory();
myInventory.addItem("Wigni", 10, 20);
myInventory.addItem("Kvercxi", 100, 2);
myInventory.addItem("Paska", 50, 5);
myInventory.updateStock("Kvercxi", 50);
myInventory.updateStock("Wigni", -10);
console.log(myInventory.checkAvailability("Kvercxi"));
console.log(myInventory.checkAvailability("Wigni"));
console.log(myInventory.calcuteValue());
