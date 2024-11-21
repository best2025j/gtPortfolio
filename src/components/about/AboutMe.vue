<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "I'm Godstime, A Front-End Website Developer with a Passion for Creating Beautiful Websites. A Solution-driven FRONT-END web developer who adapt faster at contributing to highly collaborative work environment and finding solutions. I have a Proven experience at developing consumer-focused websites using HTML, CSS, and JavaScript and their respective libraries and framework (vue.js). Good knowledge of the best practices for web design, user experience, and speed.",
        },
        {
          id: 2,
          bio: "I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript. I am currently improving my Backend development skills by learning various new technologies.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/gt.jpg" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-san mb-4 text-ternary-dark dark:text-ternary-light md:text-base text-sm"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
