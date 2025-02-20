<script>
export default {
  props: ["client"],
};
</script>

<template>
  <div>
    <img
      :src="client.img"
      :alt="client.title"
      class="w-44 p-4 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-full mb-8 cursor-pointer"
    />
  </div>
</template>

<style lang="scss" scoped></style>
