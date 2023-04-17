import productsReducer, {addNewProduct, deleteProduct, sortByName, sortByPriceLowToHigh} from "../productsSlice";

describe('productsSlice', () => {

  const initState = {
    products: [],
    filteredProducts: [],
    filters: {
      categories: [],
      brand: [],
      manufacturer: []
    }
  };

  it('should add new product with addNewProduct action', () => {
    const action = {type: addNewProduct.type, payload: {title: 'AOS', barcode: "4604049097548"}};
    const result = productsReducer(initState, action);

    expect(result.products[0].title).toBe('AOS');
  });

  it('should delete product by barcode with "deleteProduct action"', () => {
    const productsCatalog = {
      products: [
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
      ],
      filteredProducts: [],
      filters: {
        categories: [],
        brand: [],
        manufacturer: []
      }
    };

    const action = {type: deleteProduct.type, payload: "4604049097548"};
    const result = productsReducer(productsCatalog, action);
    expect(result).toEqual(initState);

  });

  it('should sort state by name with "sortByName action"', () => {
    const state = {
      products: [],
      filteredProducts: [{
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
        price: 40,
      },
        {
          id: "730718ae-6c31-11ed-a1eb-0242ac120002",
          categories: ["body"],
          img: "img/aos.png",
          icon: "img/productCard_bottle.svg",
          title: "Bio Mio",
          unit: "мл",
          weight: 450,
          barcode: "4604049097548",
          manufacturer: "Нэфис",
          brand: "AOS",
          description: "",
          price: 48,
        },
      ],
      filters: {
        categories: [],
        brand: [],
        manufacturer: []
      }
    };
    const action = {type: sortByName.type};
    const resultSort = productsReducer(state, action);
    expect(resultSort).toEqual({
      products: [],
      filteredProducts: [
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
          price: 40,
        },
        {
          id: "730718ae-6c31-11ed-a1eb-0242ac120002",
          categories: ["body"],
          img: "img/aos.png",
          icon: "img/productCard_bottle.svg",
          title: "Bio Mio",
          unit: "мл",
          weight: 450,
          barcode: "4604049097548",
          manufacturer: "Нэфис",
          brand: "AOS",
          description: "",
          price: 48,
        },
      ],
      filters: {
        categories: [],
        brand: [],
        manufacturer: []
      }
    });
  });

  it('should sort state by price with "sortByPriceLowToHigh action"', () => {
    const state = {
      products: [],
      filteredProducts: [
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
          price: 40,
        },
        {
          id: "730718ae-6c31-11ed-a1eb-0242ac120002",
          categories: ["body"],
          img: "img/aos.png",
          icon: "img/productCard_bottle.svg",
          title: "Bio Mio",
          unit: "мл",
          weight: 450,
          barcode: "4604049097548",
          manufacturer: "Нэфис",
          brand: "AOS",
          description: "",
          price: 48,
        },
      ],
      filters: {
        categories: [],
        brand: [],
        manufacturer: []
      }
    };
    const action = {type: sortByPriceLowToHigh.type};
    const resultPrice = productsReducer(state, action);
    expect(resultPrice).toEqual({
      products: [],
      filteredProducts: [
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
          price: 40,
        },
        {
          id: "730718ae-6c31-11ed-a1eb-0242ac120002",
          categories: ["body"],
          img: "img/aos.png",
          icon: "img/productCard_bottle.svg",
          title: "Bio Mio",
          unit: "мл",
          weight: 450,
          barcode: "4604049097548",
          manufacturer: "Нэфис",
          brand: "AOS",
          description: "",
          price: 48,
        },
      ],
      filters: {
        categories: [],
        brand: [],
        manufacturer: []
      }
    });
  });



})