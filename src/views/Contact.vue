<script>
import feather from "feather-icons";
import ContactForm from "@/components/contact/ContactForm.vue";
import ContactDetails from "@/components/contact/ContactDetails.vue";

export default {
  components: {
    ContactForm,
    ContactDetails,
  },
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Nigeria",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "audugodstime95@gmail.com",
          icon: "mail",
        },
        {
          id: 3,
          name: "+2349012902537",
          icon: "phone",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div
    class="container mx-auto flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
  >
    <div>
      <div class="z-20 relative left-24">
        <div class="flex relative top-48 right-20">
          <img
            src="../assets/svgs/custom/freepic-arrow.svg"
            alt=""
            class="relative top-40"
          />
          <img
            src="../assets/svgs/custom/freepic-speech.svg"
            alt=""
            class="relative top-24 left-5"
          />
        </div>
        <img
          src="../assets/svgs/custom/freepic-arrowUp.svg"
          alt=""
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
          class="relative top-56 left-28"
        />
        <div>
          <img
            src="../assets/svgs/custom/freepic-character.svg"
            alt=""
            data-aos="fade-right"
            class="relative top-20 z-20"
          />
          <img
            src="../assets/svgs/custom/freepic-hand.svg"
            alt=""
            data-aos="zoom-in"
          />
        </div>
        <img
          src="../assets/svgs/custom/freepic-arrowDown.svg"
          alt=""
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="700"
          class="relative bottom-[6.5rem] right-[4.8rem] z-10"
        />
        <div class="relative bottom-44">
          <div class="flex items-center relative bottom-10">
            <img
              src="../assets/svgs/custom/freepic-plant.svg"
              alt=""
              class="relative -left-24 -top-8"
            />
            <img src="../assets/svgs/custom/freepic-coin.svg" alt="" />
            <img
              src="../assets/svgs/custom/freepic-bar.svg"
              alt=""
              class="relative -top-16 left-4"
            />
          </div>
        </div>
      </div>

      <div class="relative">
        <img
          src="../assets/svgs/custom/freepic-floor.svg"
          alt=""
          class="absolute bottom-[16.5rem]"
          width="356.64"
          height="204.32"
        />
      </div>
    </div>

    <div
      class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
    >
      <!-- Contact form -->
      <ContactForm />

      <!-- Contact details -->
      <ContactDetails :contacts="contacts" />
    </div>
  </div>
</template>
