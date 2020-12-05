export const PRODUCT_NAMES = {
  CUCUMBER: "Cucumber",
  TOMATO: "Tomato",
  RIBS: "Ribs",
  CHICKEN: "Chicken",
};

export const PRODUCT_PRICES = {
  CUCUMBER: 2.5,
  TOMATO: 4.5,
  RIBS: 12.5,
  CUCUMBER: 15.25,
};

export const PRODUCT_CATEGORIES = {
  VEGETABLES: "Vegetables",
  MEATS: "Meats",
};

export const PRODUCTS_LIST = [
  {
    name: PRODUCT_CATEGORIES.VEGETABLES,
    products: [
      {
        name: PRODUCT_NAMES.CUCUMBER,
        price: PRODUCT_PRICES.CUCUMBER,
        category: PRODUCT_CATEGORIES.VEGETABLES,
      },
      {
        name: PRODUCT_NAMES.TOMATO,
        price: PRODUCT_PRICES.TOMATO,
        category: PRODUCT_CATEGORIES.VEGETABLES,
      },
    ],
  },
  {
    name: PRODUCT_CATEGORIES.MEATS,
    products: [
      {
        name: PRODUCT_NAMES.RIBS,
        price: PRODUCT_PRICES.RIBS,
        category: PRODUCT_CATEGORIES.MEATS,
      },
      {
        name: PRODUCT_NAMES.CHICKEN,
        price: PRODUCT_PRICES.CHICKEN,
        category: PRODUCT_CATEGORIES.MEATS,
      },
    ],
  },
];
