import angular from "angular";
import { productDetailComponent } from "./productDetail.component";
import "./productDetail.scss";

export const ProductDetailModule = angular
  .module("productDetail", [])
  .component("productDetail", productDetailComponent).name;
