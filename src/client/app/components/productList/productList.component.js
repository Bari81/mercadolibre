import template from "./productList.html";

export const productListComponent = {
  bindings: {
    productList: "<"
  },
  template,
  controller: class productListComponentController {
    static get $inject() {
      return ["$state"];
    }
    constructor($state) {
      "ngInject";
      this.$state = $state;
    }
    $onInit() {
      this.selectedProductId = "";
    }
    redirectSelectedProduct(param) {
      debugger;
      this.selectedProductId = param.id;
      this.$state.go("item", { id: this.selectedProductId });
    }
  }
};
