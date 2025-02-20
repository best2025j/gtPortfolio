import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";
import BackToTop from "vue-backtotop";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

// Use plugins
app.use(router);
app.use(BackToTop);

// Initialize AOS
AOS.init({
  duration: 1200,
  offset: 200,
  easing: "ease-in-out",
  once: true,
});

// Initialize Feather Icons
const feather = require("feather-icons");
feather.replace();

// Mount the app only once
app.mount("#app");

// Theme handling
const appTheme = localStorage.getItem("theme");
if (
  appTheme === "dark" &&
  document.querySelector("body").classList.contains("app-theme")
) {
  document.querySelector("body").classList.add("bg-primary-dark");
} else {
  document.querySelector("body").classList.add("bg-secondary-light");
}
