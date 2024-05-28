const URL = "http://localhost:5000/api/user/";

var cfchild = {
  profile: URL + "profile/",
  cart: URL + "cart/",
  product: URL + "product/",
};

export const apiConfig = {
  profile: {
    getProfile: cfchild.profile + "getProfile",
    updateProfile: cfchild.profile + "updateProfile",
    addProfile: cfchild.profile + "addProfile",
  },
  cart: {
    addToCart: cfchild.cart + "addToCart",
    changequantity: cfchild.cart + "changequantity",
    deleteProductonCart: cfchild.cart + "deleteProductonCart",
    getCart: cfchild.cart + "getCart",
  },
  product: {
    getAllProducts: cfchild.product + "getAllProducts",
    getProductByID: cfchild.product + "getProductByID",
    findProductByTitle: cfchild.product + "findProductByTitle",
    findProductNewIn: cfchild.product + "findProductNewIn",
  },
};
