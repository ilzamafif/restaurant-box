import "regenerator-runtime";
import "../styles/main.css";
import "../styles/responsive.css";
import App from "./views/app";

const app = new App({
  button: document.querySelector(".bars-toggler"),
  drawer: document.querySelector(".nav-list"),
  content: document.querySelector("#content"),
});
