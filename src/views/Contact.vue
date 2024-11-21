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
    <div class="h-full w-1/2 border rounded-3xl">
      hello gt

      <div>
        <span>
          <img src="../assets/svgs/custom/freepic-arrow.svg" alt="" />
          <img src="../assets/svgs/custom/freepic-bar.svg" alt="" />
          <img src="../assets/svgs/custom/freepic-arrowUp.svg" alt="" />
          <img src="../assets/svgs/custom/freepic-character.svg" alt="" />
          <img src="../assets/svgs/custom/freepic-hand.svg" alt="" />
          <img src="../assets/svgs/custom/freepic-arrowDown.svg" alt="" />
          <img src="../assets/svgs/custom/freepic-coin.svg" alt="" />
          <img src="../assets/svgs/custom/freepic-speech.svg" alt="" />
          <img src="../assets/svgs/custom/freepic-plant.svg" alt="" />
          <img src="../assets/svgs/custom/freepic-floor.svg" alt="" />
        </span>
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
