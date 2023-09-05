let students = {
  name: "aman",
};

function student(name) {
  this.name = name;
}

Object.assign(student.prototype, students);

const student1 = new student("rahul");

student1.printDetails = function () {
  console.log(`Hello my name is ${this.name}`);
};


student1.printDetails();
