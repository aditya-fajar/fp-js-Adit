const product = [
  {
    "name": "Xiaomi Redmi 5A",
    "price": "Rp1.199.000",
    "category": "Smartphone"
  },
  {
    "name": "Macbook Air",
    "price": "Rp13.775.000",
    "category": "Laptop"
  },
  {
    "name": "Samsung Galaxy J7",
    "price": "Rp3.549.000",
    "category": "Smartphone"
  },
  {
    "name": "DELL XPS 13",
    "price": "Rp26.799.000",
    "category": "Laptop"
  },
  {
    "name": "Xiaomi Mi 6",
    "price": "Rp5.399.000",
    "category": "Smartphone"
  },
  {
    "name": "LG V30 Plus",
    "price": "Rp10.499.000",
    "category": "Smartphone"
  },
]

function compare( a, b ) {
  if (parseInt(a.price.replace(/[^0-9]+/g, '')) < parseInt(b.price.replace(/[^0-9]+/g, ''))){
    return -1;

  }
  if (parseInt(a.price.replace(/[^0-9]+/g, '')) > parseInt(b.price.replace(/[^0-9]+/g, ''))){
  	return 1;
  }
  return 0;
}

console.log(product.sort( compare ));
