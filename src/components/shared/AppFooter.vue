<script>
import feather from "feather-icons";
import FooterCopyright from "./FooterCopyright.vue";
import { socialLinks } from "../../data/socialLinks";

export default {
  components: { FooterCopyright },
  data() {
    return {
      socials: socialLinks,
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
  <div class="container mx-auto relative mt-40 mb-14">
    <img src="@/assets/images/footer.png" alt="" class="hidden md:flex" />
    <div
      class="border-primary-light dark:border-secondary-dark absolute left-0 right-0 top-0 py-2"
    >
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
          class="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"
        >
          Follow me
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a
            v-for="social in socials"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="text-slate-900 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-full bg-gray-50 hover:bg-gray-100 shadow-sm p-4 duration-500"
          >
            <i :data-feather="social.icon" class="w-5 sm:w-8 h-5 sm:h-8"></i>
          </a>
        </ul>
      </div>

      <!-- Footer copyright -->
      <FooterCopyright />
    </div>
  </div>
</template>

<style scoped></style>
