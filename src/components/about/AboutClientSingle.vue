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
      class="w-44 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-[44px] mb-8 cursor-pointer"
    />
  </div>
</template>

<style lang="scss" scoped></style>
