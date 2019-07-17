import angular from "angular";
import { searchBarComponent } from "./searchBar.component";
import "./searchBar.scss";

export const SearchBarModule = angular
  .module("searchBar", [])
  .component("searchBar", searchBarComponent).name;
