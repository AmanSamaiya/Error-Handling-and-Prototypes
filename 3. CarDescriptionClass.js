class Car {
  company;
  model;
  year;

  constructor(c, m, y) {
    this.company = c;
    this.model = m;
    this.year = y;
  }

  getDescription() {
    return `This is a ${this.year} ${this.company} ${this.model}`;
  }
}

let mycar = new Car("Lamborghini", "Aventador", 2018);

console.log(mycar.getDescription());
