import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { productListComponent } from "./productList.component";
import "./productList.scss";

export const ProductListModule = angular
  .module("productList", [])
  .component("productList", productListComponent).name;
