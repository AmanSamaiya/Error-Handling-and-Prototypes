function convertToNumber(str) {
  if (!isNaN(str)) {
    console.log(parseInt(str));
  } else console.log("Invalid number");
}

convertToNumber("aman");
