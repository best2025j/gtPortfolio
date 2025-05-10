<!-- <script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      this.$emit("theme-changed", newTheme);
      this.$router.go();
    },
  },
};
</script> -->
<!-- <template>
  <a href="#" @click.prevent="toggleTheme" aria-label="Theme Switcher">
    <i
      v-if="theme === 'light'"
      data-feather="moon"
      class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"
    ></i>
    <i
      v-else
      data-feather="sun"
      class="text-gray-200 hover:text-gray-50 w-5"
    ></i>
  </a>
</template> -->


<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  computed: {
    // Dynamically return the appropriate icon based on the theme
    currentIcon() {
      return this.theme === "light" ? "moon" : "sun";
    },
    // Dynamically return the class for the icon based on the theme
    iconClass() {
      return this.theme === "light"
        ? "text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light"
        : "text-gray-200 hover:text-gray-50";
    },
  },
  methods: {
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      this.$emit("theme-changed", newTheme);
      this.$router.go(); // Trigger a page reload to apply the theme
    },
  },
};
</script>

<template>
  <a href="#" @click.prevent="toggleTheme" aria-label="Theme Switcher">
    <!-- Using computed properties to determine icon and class dynamically -->
    <i :data-feather="currentIcon" :class="`${iconClass} w-5`"></i>
  </a>
</template>

