import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { searchBarComponent } from "./searchBar.component";
import "./searchBar.scss";
// import { MeliDemoService } from "../../services/app.services";

export const SearchBarModule =
  // .service("MeliDemoService", MeliDemoService)
  angular.module("searchBar", []).component("searchBar", searchBarComponent)
    .name;
