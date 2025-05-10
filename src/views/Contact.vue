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
    class="md:container mx-auto flex-col-reverse md:flex-row w-full"
  >
    <div
      class="md:container mx-auto flex flex-col-reverse md:flex-row w-full"
    >
      <!-- Contact form -->
      <ContactForm />

      <!-- Contact details -->
      <ContactDetails :contacts="contacts" />
      </div>
  </div>
</template>


<!-- public-key: K7xLosDl8FEdeGzpq

private-key: wS6F67wvUA63zt6RbPHQb

template- id: template_ywya2vi -->