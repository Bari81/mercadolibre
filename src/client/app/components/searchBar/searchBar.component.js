import template from "./searchBar.html";

export const searchBarComponent = {
  template,
  controller: class searchBarComponentController {
    static get $inject() {
      return ["$state"];
    }
    constructor($state) {
      "ngInject";
      this.$state = $state;
    }
    $onInit() {
      this.token = "";
    }

    /**
     * Change state to results defined in app.module.js
     * with query param used in state service
     */
    redirectSearch() {
      this.$state.go("results", { query: this.token });
    }
  }
};
