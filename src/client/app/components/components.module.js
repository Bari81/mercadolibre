import angular from "angular";
import { SearchBarModule } from "./searchBar/searchBar.module";
import { ProductListModule } from "./productList/productList.module";
import { ProductDetailModule } from "./productDetail/productDetail.module";

export const ComponentsModule = angular.module("app.components", [
  SearchBarModule,
  ProductListModule,
  ProductDetailModule
]).name;
