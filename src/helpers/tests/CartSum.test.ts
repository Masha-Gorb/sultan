import {cartSum} from '../cartSum'

describe('cartSum', function () {

  it('should return sum of ordered products', () => {

    const orderedProducts = [
      {title: 'Milk', price: 10.10},
      {title: 'Bread', price: 24.20},
      {title: 'Eggs', price: 15.38},
    ];
    const result = cartSum(orderedProducts);

    expect(result).toEqual("49.68")
  });

});