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

export const PRODUCT_DISCOUNTS = {
  CUCUMBER: 0,
  TOMATO: 15,
  RIBS: 0,
  CHICKEN: 0,
};

export const PRODUCT_CATEGORIES = {
  VEGETABLES: "Vegetables",
  MEATS: "Meats",
};

export const PRODUCT_DESCRIPTIONS = {
  CUCUMBER: null,
  TOMATO: "fresh cucumber from finland",
  RIBS: null,
  CHICKEN: "Good chicken from Thailand. No salmonella.",
};

export const PRODUCTS_LIST = [
  {
    name: PRODUCT_CATEGORIES.VEGETABLES,
    products: [
      {
        name: PRODUCT_NAMES.CUCUMBER,
        price: PRODUCT_PRICES.CUCUMBER,
        category: PRODUCT_CATEGORIES.VEGETABLES,
        sale: false,
        salePercent: PRODUCT_DISCOUNTS.CUCUMBER,
        description: PRODUCT_DESCRIPTIONS.CUCUMBER,
      },
      {
        name: PRODUCT_NAMES.TOMATO,
        price: PRODUCT_PRICES.TOMATO,
        category: PRODUCT_CATEGORIES.VEGETABLES,
        sale: true,
        salePercent: PRODUCT_DISCOUNTS.TOMATO,
        description: PRODUCT_DESCRIPTIONS.TOMATO,
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
        sale: false,
        salePercent: PRODUCT_DISCOUNTS.RIBS,
        description: PRODUCT_DESCRIPTIONS.RIBS,
      },
      {
        name: PRODUCT_NAMES.CHICKEN,
        price: PRODUCT_PRICES.CHICKEN,
        category: PRODUCT_CATEGORIES.MEATS,
        sale: false,
        salePercent: PRODUCT_DISCOUNTS.CHICKEN,
        description: PRODUCT_DESCRIPTIONS.CHICKEN,
      },
    ],
  },
];
