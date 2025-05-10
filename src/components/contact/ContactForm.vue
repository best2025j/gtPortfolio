<script>
import emailjs from "@emailjs/browser";
import FormInput from "../reusable/FormInput.vue";

export default {
  name: "ContactForm",
  components: { FormInput },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      isSending: false,
      statusMessage: "",
    };
  },
  mounted() {
    emailjs.init("K7xLosDl8FEdeGzpq");
  },
  methods: {
    async sendEmail(e) {
      e.preventDefault();

      if (
        !this.form.name ||
        !this.form.email ||
        !this.form.subject ||
        !this.form.message
      ) {
        this.statusMessage = "Please fill all fields";
        return;
      }

      this.isSending = true;
      this.statusMessage = "Sending...";

      try {
        const result = await emailjs.send(
          "service_4xizkmq",
          "template_ywya2vi",
          {
            to_name: "Godstime",
            from_name: this.form.name,
            from_email: this.form.email,
            subject: this.form.subject,
            message: this.form.message,
            reply_to: this.form.email,
          },
          "K7xLosDl8FEdeGzpq"
        );

        if (result.status === 200) {
          this.statusMessage = "Message sent successfully!";
          this.form = {
            name: "",
            email: "",
            subject: "",
            message: "",
          };

          setTimeout(() => {
            this.statusMessage = "";
          }, 5000);
        }
      } catch (error) {
        console.error("EmailJS Error:", error);
        this.statusMessage = "Failed to send message. Please try again.";
      } finally {
        this.isSending = false;
      }
    },
  },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div
      class="max-w-xl m-4 md:p-7 p-4 bg-secondary-light dark:bg-secondary-dark rounded-3xl shadow-xl text-left"
    >
      <p
        class="font-black text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        Contact Form
      </p>
      <form class="font-general-regular space-y-7" @submit.prevent="sendEmail">
        <FormInput
          v-model="form.name"
          label="Full Name"
          inputIdentifier="name"
          required
        />
        <FormInput
          v-model="form.email"
          label="Email"
          inputIdentifier="email"
          inputType="email"
          required
        />
        <FormInput
          v-model="form.subject"
          label="Subject"
          inputIdentifier="subject"
          required
        />

        <div class="mt-6 mb-4">
          <label
            class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
            for="message"
            >Message</label
          >
          <textarea
            v-model="form.message"
            class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Message"
            required
          ></textarea>
        </div>

        <!-- Status message -->
        <div v-if="statusMessage" class="mb-4">
          <p
            :class="{
              'text-green-500': statusMessage.includes('successfully'),
              'text-red-500': statusMessage.includes('Failed'),
              'text-blue-500': statusMessage.includes('Sending'),
            }"
          >
            {{ statusMessage }}
          </p>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            :disabled="isSending"
            :class="{ 'opacity-50 cursor-not-allowed': isSending }"
            class="px-4 py-2 text-white tracking-wider bg-blue-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-full duration-500"
            aria-label="Send Message"
          >
            {{ isSending ? "Sending..." : "Send Message" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Add any CSS styles here if needed */
</style>
