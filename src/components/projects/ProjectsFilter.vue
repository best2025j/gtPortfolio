<script>
export default {
  props: {
    select: {
      type: String,
      default: "projects",
      required: true,
    },
    selectOptions: {
      type: Array,
      default: () => [
        "Nuxt project",
        "Vue project",
        "React project",
        "Next project",
      ],
    },
  },
};
</script>

<template>

  <!-- custom select design -->
  <select
    @change="$emit('filter', $event.target.value)"
    :name="select"
    :id="select"
    class="px-4 w-full md:w-44 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
  >
    <option value class="text-sm sm:text-md">All Projects</option>
    <option
      v-for="option in selectOptions"
      :key="option"
      :value="option"
      class="sm:text-md"
    >
      {{ option }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
