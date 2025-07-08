<script>
import feather from "feather-icons";
import AppHeader from "./components/shared/AppHeader";
import AppFooter from "./components/shared/AppFooter";
import GradientBg from "./components/GradientBg.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    GradientBg,
  },
  data: () => {
    return {
      appTheme: localStorage.getItem("theme"),
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div :class="appTheme" class="pt-0.5">
    <GradientBg />

    <!-- App header -->
    <AppHeader />

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Scroll to top -->
    <back-to-top
      visibleoffset="500"
      right="30px"
      bottom="20px"
      class="shadow-lg"
    >
      <i data-feather="chevron-up"></i>
    </back-to-top>

    <!-- App footer -->
    <AppFooter />
  </div>
</template>
