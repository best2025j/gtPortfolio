<script>
export default {
  props: ["project"],
};
</script>

<template>
  <!-- 
  <router-link
    to="/projects/single-project"
    class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-slate-100 dark:bg-slate-300"
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
 -->
 
 
 <!-- links For external websites -->
 <a
    :href="project.url"
    target="_blank"
    rel="noopener noreferrer"
    class="block rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-slate-100 dark:bg-slate-300"
    aria-label="Visit Project Website"
  >
    <div>
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none w-full"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p
        class="font-general-semibold text-sm text-ternary-dark dark:text-black font-semibold mb-2"
      >
        {{ project.title }}
      </p>
      <span
        class="font-general-medium text-sm capitalize text-ternary-dark dark:text-black"
      >
        {{ project.category }}
      </span>
    </div>
  </a>
</template>

<style lang="scss" scoped></style>
