<script>
export default {
  props: ["project"],
};
</script>

<template>
  <router-link
    to="/projects/single-project"
    class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-darkj"
    aria-label="Single Project"
  >
    <div>
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p
        class="font-general-semibold text-sm text-ternary-dark dark:text-black font-semibold mb-2"
      >
        {{ project.title }}
      </p>
      <span
        class="font-general-medium text-sm capitalize text-ternary-dark dark:text-black`"
        >{{ project.category }}</span
      >
    </div>
  </router-link>
</template>

<style lang="scss" scoped></style>


