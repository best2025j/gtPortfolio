<script>
export default {
  props: ["client"],
};
</script>

<template>
  <div class="mb-8 flex-col flex items-center">
    <img
      :src="client.img"
      :alt="client.title"
      class="w-24 shadow-ternary-dark dark:shadow-ternary-light shadow-sm rounded-full mb-4 hover:scale-105 cursor-pointer"
    />
    <span class="text-sm dark:text-white">{{ client.title }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
