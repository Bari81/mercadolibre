import template from "./searchBar.html";

export const searchBarComponent = {
  template,
  controller: class searchBarComponentController {
    static get $inject() {
      // return ["$http", "MeliDemoService", "$state"];
      return ["$state"];
    }
    constructor($state) {
      "ngInject";
      // this.$http = $http;
      this.$state = $state;
      // this.meliDemoService = MeliDemoService;
    }
    $onInit() {
      this.token = "";
      // this.productList = [];
    }
    redirectSearch() {
      debugger;
      this.$state.go("results", { query: this.token });
    }
    // searchProductsByToken() {
    //   this.meliDemoService
    //     .getProductsList(this.token)
    //     .then(response => {
    //       this.productList = response.data;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }
  }
};
