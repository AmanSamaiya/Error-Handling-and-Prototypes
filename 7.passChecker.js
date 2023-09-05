class User {
  username;
  password;

  constructor(u, p) {
    this.username = u;
    this.password = p;
  }

  getpass() {
    let splittedpass = this.password.split("");
    for (let i = 0; i < splittedpass.length; i++) {
      splittedpass[i] = "*";
    }
    this.password = splittedpass.join("");
    console.log(this.password);
  }

  setpass(newpass) {
    let pattern = /[A-Z]/;
    let pattern1 = /\d/;
    if (
      newpass.length >= 8 &&
      pattern.test(newpass) == true &&
      pattern1.test(newpass) == true
    ) {
      console.log("password updated");
      user.getpass();
    } else {
      console.log(
        "Password must be atleast 8 characters long and contain a number and a uppercase letter"
      );
    }
  }
}

let user = new User("aman", "aman1@2345");

user.getpass();
user.setpass("AsdsdsdsdA122323");
