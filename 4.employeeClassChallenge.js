class Employee {
  name;
  position;
  salary;

  constructor(n, p, s) {
    this.name = n;
    this.position = p;
    this.salary = s;
  }

  getSalary() {
    return this.salary;
  }
}

let emp = new Employee("aman", "CEO", 500000000);

console.log(emp.getSalary());
