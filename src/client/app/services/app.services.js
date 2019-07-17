export class MeliDemoService {
  static get $inject() {
    return ["$http"];
  }
  constructor($http) {
    "ngInject";
    this.$http = $http;
  }
  /**
   * param  {string} token , query param
   * return list of products json
   */
  getProductsList(token) {
    return this.$http
      .get("http://localhost:3000/api/items", { params: { q: token } })
      .then(response => response.data);
  }
  /**
   * param  {string} token , id of item
   * return product detail json
   */

  getProductDetail(token) {
    return this.$http
      .get(`http://localhost:3000/api/items/${token}`)
      .then(response => response.data);
  }
}
