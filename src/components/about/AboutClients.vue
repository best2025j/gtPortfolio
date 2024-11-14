<script>
import AboutClientSingle from "./AboutClientSingle.vue";

export default {
  components: {
    AboutClientSingle,
  },
  data: () => {
    return {
      clientsHeading: "MY SKILLS",
      clients: [
        {
          id: 1,
          title: "Figma",
          img: require("@/assets/svgs/Figma-Light.svg"),
        },
        {
          id: 2,
          title: "css",
          img: require("@/assets/svgs/CSS.svg"),
        },
        {
          id: 3,
          title: "ExpressJS",
          img: require("@/assets/svgs/ExpressJS-Dark.svg"),
        },
        {
          id: 4,
          title: "HTML",
          img: require("@/assets/svgs/HTML.svg"),
        },
        {
          id: 5,
          title: "JavaScript",
          img: require("@/assets/svgs/JavaScript.svg"),
        },
        {
          id: 6,
          title: "MongoDB",
          img: require("@/assets/svgs/MongoDB.svg"),
        },
        {
          id: 7,
          title: "NextJS",
          img: require("@/assets/svgs/NextJS-Light.svg"),
        },
        {
          id: 8,
          title: "VueJS",
          img: require("@/assets/svgs/VueJS-Dark.svg"),
        },
        {
          id: 9,
          title: "bs",
          img: require("@/assets/svgs/Vite-Dark.svg"),
        },
        {
          id: 10,
          title: "SVG",
          img: require("@/assets/svgs/SVG-Light.svg"),
        },
        {
          id: 11,
          title: "TailwindCSS",
          img: require("@/assets/svgs/TailwindCSS-Dark.svg"),
        },
        {
          id: 12,
          title: "TypeScript",
          img: require("@/assets/svgs/TypeScript.svg"),
        },
        {
          id: 13,
          title: "NuxtJS",
          img: require("@/assets/svgs/NuxtJS-Dark.svg"),
        },
        {
          id: 14,
          title: "Postman",
          img: require("@/assets/svgs/Postman.svg"),
        },
        {
          id: 15,
          title: "React",
          img: require("@/assets/svgs/React-Dark.svg"),
        },
        {
          id: 16,
          title: "NodeJS",
          img: require("@/assets/svgs/NodeJS-Light.svg"),
        },
        {
          id: 17,
          title: "Bootstrap",
          img: require("@/assets/svgs/Bootstrap.svg"),
        },
        {
          id: 18,
          title: "Redux",
          img: require("@/assets/svgs/Redux.svg"),
        },
        {
          id: 19,
          title: "bs",
          img: require("@/assets/svgs/WindiCSS-Dark.svg"),
        },
        {
          id: 20,
          title: "bs",
          img: require("@/assets/svgs/Redux.svg"),
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-3 md:grid-cols-10 mt-10 md:mt-14 gap-2">
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>
