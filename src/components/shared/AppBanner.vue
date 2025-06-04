<script>
import feather from "feather-icons";

export default {
  name: "Home",
  data: () => {
    return {
      theme: "",
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <section
    class="flex flex-col sm:justify-between items-center sm:flex-row mt-16 sm:mt-10"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light"
      >
        I'm Audu Godstime
      </h1>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-xl text-center sm:text-left leading-none text-gray-400"
      >
        A Front-End Web Developer
      </p>
      <div class="flex justify-center sm:block">
        <a
          download="auduGodstimeResume.pdf"
          href="/files/auduGodstimeResume.pdf"
          class="flex justify-center items-center w-52 text-sm mt-12 mb-6 sm:mb-0 border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <i
            data-feather="arrow-down-circle"
            class="mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm font-general-medium duration-100"
            >Download my Resume</span
          ></a
        >
      </div>
    </div>

    <!-- <div class="">
      <div class="z-20 relative left-24">
        <div class="flex relative top-48 right-20">
          <img
            src="../../assets/svgs/custom/freepic-arrow.svg"
            alt=""
            class="relative top-40"
          />
          <img
            src="../../assets/svgs/custom/freepic-speech.svg"
            alt=""
            class="relative top-24 left-5"
          />
        </div>
        <img
          src="../../assets/svgs/custom/freepic-arrowUp.svg"
          alt=""
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
          class="relative top-56 left-28"
        />
        <div>
          <img
            src="../../assets/svgs/custom/freepic-character.svg"
            alt=""
            data-aos="fade-right"
            class="relative top-20 z-20"
          />
          <img
            src="../../assets/svgs/custom/freepic-hand.svg"
            alt=""
            data-aos="zoom-in"
          />
        </div>
        <img
          src="../../assets/svgs/custom/freepic-arrowDown.svg"
          alt=""
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="700"
          class="relative bottom-[6.5rem] right-[4.8rem] z-10"
        />
        <div class="relative bottom-44">
          <div class="flex items-center relative bottom-10">
            <img
              src="../../assets/svgs/custom/freepic-plant.svg"
              alt=""
              class="relative -left-24 -top-8"
            />
            <img src="../../assets/svgs/custom/freepic-coin.svg" alt="" />
            <img
              src="../../assets/svgs/custom/freepic-bar.svg"
              alt=""
              class="relative -top-16 left-4"
            />
          </div>
        </div>
      </div>

      <div class="">
        <img
          src="../../assets/svgs/custom/freepic-floor.svg"
          alt=""
          class="absolute bottom-[11.5rem]"
          width="356.64"
          height="204.32"
        />
      </div>
    </div> -->

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="theme === 'light'"
        src="@/assets/svgs/developer.svg"
        alt="Developer"
      />
      <img v-else src="@/assets/svgs/developer-dark.svg" alt="Developer" />
    </div>
  </section>
</template>

<style scoped></style>
