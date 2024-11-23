import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";
import BackToTop from "vue-backtotop";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.mount("#app");

// Initialize AOS
AOS.init({
  duration: 1200, // Animation duration
  offset: 200, // Offset from the trigger point
  easing: "ease-in-out", // Easing function
  once: true, // Whether animation should happen only once
});

const feather = require("feather-icons");
feather.replace();

createApp(App).use(router).use(BackToTop).mount("#app");

const appTheme = localStorage.getItem("theme");

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
  appTheme === "dark" &&
  document.querySelector("body").classList.contains("app-theme")
) {
  document.querySelector("body").classList.add("bg-primary-dark");
} else {
  document.querySelector("body").classList.add("bg-secondary-light");
}
