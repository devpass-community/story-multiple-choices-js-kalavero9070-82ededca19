function chooseProduct(segment) {
  switch (segment) {
    case 'Beverage':
      return 'Soda';
    case 'Fruit':
      return 'Apple';
    case 'Hygiene':
      return 'Soap';
  }
}

module.exports = chooseProduct;
