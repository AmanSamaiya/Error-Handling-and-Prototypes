


function numberChecker(num) {

  return function (num1) {
    let result = false;
    num.forEach((element) => {
      if (element == num1) {
        result = true;
      }
    });
    console.log(result);
  };
}

const arr = [1, 2, 3];

const checkedNumber = numberChecker(arr);

checkedNumber(2);
