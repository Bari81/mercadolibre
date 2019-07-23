import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { productListComponent } from "./components/productList/productList.component";
import { productDetailComponent } from "./components/productDetail/productDetail.component";
import "bootstrap/dist/css/bootstrap.css";
import { MeliDemoService } from "./services/app.services";
import "./app.scss";

export const AppModule = angular
  .module("app", [ComponentsModule, uiRouter])
  .component("app", AppComponent)
  .component("productListComponent", productListComponent)
  .component("productDetailComponent", productDetailComponent)
  .service("MeliDemoService", MeliDemoService)
  .config([
    "$locationProvider",
    "$stateProvider",
    "$urlRouterProvider",
    ($locationProvider, $stateProvider, $urlRouterProvider) => {
      $locationProvider.html5Mode({
        enabled: true
      });
      /*
       * State used by UiRouter to be inserted into the ui-view (app.html)
       * name: name used by $state.go() in other components
       * url: url with query param
       * resolve: call to service and return list of products to the component
       */
      const listState = {
        name: "results",
        url: "/items/?search={query}",
        component: "productListComponent",
        resolve: {
          productList: [
            "MeliDemoService",
            "$transition$",
            (MeliDemoService, $transition$) => {
              return MeliDemoService.getProductsList(
                $transition$.params().query
              );
            }
          ]
        }
      };
      /*
       * State used by UiRouter to be inserted into the ui-view (app.html)
       * name: name used by $state.go() in other components
       * url: url with path param
       * resolve: call to service and return detail of product to the component
       */
      const detailState = {
        name: "item",
        url: "/items/{id}",
        component: "productDetailComponent",
        resolve: {
          selectedProduct: [
            "MeliDemoService",
            "$transition$",
            (MeliDemoService, $transition$) =>
              MeliDemoService.getProductDetail($transition$.params().id)
          ]
        }
      };
      $stateProvider.state(listState);
      $stateProvider.state(detailState);
      $urlRouterProvider.otherwise("/");
    }
  ]).name;
