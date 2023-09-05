class Person {
  name;
  age;

  constructor(n, a) {
    if (!n && !a) {
      this.name = "unknown";
      this.age = 0;
    } else {
      this.name = n;
      this.age = a;
    }
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}.`;
  }
}

let person = new Person();

console.log(person.getDetails());
