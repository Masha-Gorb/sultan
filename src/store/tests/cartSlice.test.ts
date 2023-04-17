import cartReducer, {addToCart, removeFromCart, deleteCart} from "../cartSlice";

describe('cartSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = cartReducer(undefined, {type: ''});

    expect(result).toEqual({orderedProducts: []});
  });

  it('should add product with "AddToCart action"', () => {
    const action = {type: addToCart.type, payload: {title: 'AOS', barcode: "4604049097548"}};
    const initState = {orderedProducts: []};
    const result = cartReducer(initState, action);

    expect(result.orderedProducts[0].title).toBe('AOS');
    expect(result.orderedProducts[0].barcode).toBe('4604049097548');
  });

  it('should delete product by id with "removeFromCart action"', () => {
    const products = {orderedProducts: [
        {
        id: "730718ae-6c31-11ed-a1eb-0242ac120002",
        categories: ["body"],
        img: "img/aos.png",
        icon: "img/productCard_bottle.svg",
        title: "AOS средство для мытья посуды Crystal",
        unit: "мл",
        weight: 450,
        barcode: "4604049097548",
        manufacturer: "Нэфис",
        brand: "AOS",
        description: "",
        price: 48.76,
    }
      ]};
    const action = {type: removeFromCart.type, payload: "730718ae-6c31-11ed-a1eb-0242ac120002"};
    const result = cartReducer(products, action);

    expect(result).toEqual({orderedProducts: []});
  });

  it('should delete cart with "deleteCart action"', () => {
    const products = {orderedProducts: [
        {
          id: "730718ae-6c31-11ed-a1eb-0242ac120002",
          categories: ["body"],
          img: "img/aos.png",
          icon: "img/productCard_bottle.svg",
          title: "AOS средство для мытья посуды Crystal",
          unit: "мл",
          weight: 450,
          barcode: "4604049097548",
          manufacturer: "Нэфис",
          brand: "AOS",
          description: "",
          price: 48.76,
        }
      ]};
    const action = {type: deleteCart.type};
    const result = cartReducer(products, action);

    expect(result).toEqual({orderedProducts: []});
  });

})
