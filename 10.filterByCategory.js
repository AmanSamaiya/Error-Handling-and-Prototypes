function productsCollection(arr) {
    
  return function (filterstyle) {
    arr.filter((el) => {
      if (el.category == filterstyle) {
        console.log(el);
      }
    });
  };
}

var products = [
  { name: "shirt", category: "Clothes" },
  { name: "pants", category: "Clothes" },
  { name: "watch", category: "accesories" },
  { name: "chain", category: "jwellery" },
];

productsCollection(products)("accesories");
