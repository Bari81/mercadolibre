import template from "./productDetail.html";

export const productDetailComponent = {
  //binding setting selectedProduct returned on state resolve
  bindings: {
    selectedProduct: "<"
  },
  template,
  controller: class productDetailComponentController {
    constructor() {}
  }
};
