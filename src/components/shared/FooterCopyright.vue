<script>
export default {
  data: () => {
    return {
      copyrightDate: new Date().getFullYear(),
      projectName: "Portfolio",
      author: "godstime",
    };
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="font-general-regular text-lg text-ternary-dark"
    >
      &copy; {{ copyrightDate }}.
      <a
        href=""
        target="__blank"
        class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
      >
        {{ projectName }}
      </a>
      by
      <a
        href=""
        target="__blank"
        class="font-general-medium font-black text-secondary-dark uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
