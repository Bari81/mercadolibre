import template from "./productDetail.html";

export const productDetailComponent = {
  bindings: {
    selectedProduct: "<"
  },
  template,
  controller: class productDetailComponentController {
    constructor() {}
  }
};
