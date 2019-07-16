export class MeliDemoService {
  static get $inject() {
    return ["$http"];
  } 
  constructor($http) {    
    "ngInject"; 
    this.$http = $http;
  }
  getProductsList(token) {
    debugger;
    return this.$http
      .get("http://localhost:3000/api/items", { params: { q: token } })
      .then(response => response.data);
  }
  getProductDetail(token) {
    return this.$http
      .get(`http://localhost:3000/api/items/${token}`)
      .then(response => response.data);
  }
};