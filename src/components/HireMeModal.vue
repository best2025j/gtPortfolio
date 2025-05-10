<script>
import emailjs from "@emailjs/browser";
import feather from "feather-icons";
import FormInput from "./reusable/FormInput.vue";

export default {
  name: "HireMeModal", // Add component name
  props: {
    showModal: {
      type: Function,
      required: true,
    },
    modal: {
      type: Boolean,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  components: { FormInput },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
        project: "",
      },
      isSending: false,
      statusMessage: "",
    };
  },
  mounted() {
    if (feather) {
      feather.replace();
    }
    emailjs.init("K7xLosDl8FEdeGzpq");
  },
  updated() {
    if (feather) {
      feather.replace();
    }
  },
  methods: {
    async sendEmail(e) {
      e.preventDefault();

      if (
        !this.form.name ||
        !this.form.email ||
        !this.form.project ||
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
            project_type: this.form.project,
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
            project: "",
            message: "",  
          };

          setTimeout(() => {
            if (this.showModal) {
              this.showModal();
            }
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
  <transition name="fade">
    <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
      <div
        v-show="modal"
        @click="showModal()"
        class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20 backdrop-blur-sm"
      ></div>
      <main class="flex flex-col items-center justify-center h-full w-full">
        <transition name="fade-up-down">
          <div v-show="modal" class="modal-wrapper w-full md:w-auto flex items-center z-30">
            <div
              class="modal max-w-md mx-4 md:w-[700px] w-full bg-secondary-light dark:bg-primary-dark h-full shadow-lg flex-row rounded-3xl relative"
            >
              <div
                class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark ml-3.5"
              >
                <h5 class="text-primary-dark dark:text-primary-light text-base">
                  How can I help you?
                </h5>
                <button
                  class="px-4 text-primary-dark dark:text-primary-light"
                  @click="showModal()"
                >
                  <i data-feather="x"></i>
                </button>
              </div>
              <div class="max-w-full modal-body p-5 w-full h-full">
                <form
                  class="max-w-xl m-4 text-left"
                  @submit.prevent="sendEmail"
                >
                  <div class="mb-4">
                    <FormInput
                      v-model="form.name"
                      label="Full Name"
                      inputIdentifier="name"
                      class="capitalize"
                      required
                    />
                  </div>

                  <div class="mb-4">
                    <FormInput
                      v-model="form.email"
                      label="Email Address"
                      inputIdentifier="email"
                      required
                    />
                  </div>

                  <div class="mt-6 mb-4">
                    <label
                      class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
                      for="project"
                      >Project Type</label
                    >
                    <select
                      v-model="form.project"
                      class="w-full px-5 py-3 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="project"
                      name="project"
                      required
                      aria-label="Project Category"
                    >
                      <option value="">Select Project Type</option>
                      <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.name"
                      >
                        {{ category.name }}
                      </option>
                    </select>
                  </div>
                  <!-- Added Message Textarea -->
                  <div class="mt-6 mb-4">
                    <label
                      class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
                      for="message"
                      >Message</label
                    >
                    <textarea
                      v-model="form.message"
                      class="w-full px-5 py-3 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="message"
                      name="message"
                      rows="5"
                      required
                      placeholder="Write your message here..."
                      aria-label="Message"
                    ></textarea>
                  </div>

                  <!-- Status message with improved visibility -->
                  <div v-if="statusMessage" class="mb-4">
                    <p
                      :class="{
                        'text-green-500':
                          statusMessage.includes('successfully'),
                        'text-red-500':
                          !statusMessage.includes('successfully') &&
                          !statusMessage.includes('Sending'),
                        'text-blue-500': statusMessage.includes('Sending'),
                      }"
                      class="font-medium text-sm"
                    >
                      {{ statusMessage }}
                    </p>
                  </div>

                  <div class="mt-8 pb-3 sm:pb-1">
                    <button
                      type="submit"
                      :disabled="isSending"
                      :class="{ 'opacity-50 cursor-not-allowed': isSending }"
                      class="px-4 sm:px-6 py-2 sm:py-3 text-white bg-blue-500 hover:bg-indigo-600 rounded-full focus:ring-1 focus:ring-indigo-900 duration-500"
                      aria-label="Submit Request"
                    >
                      {{ isSending ? "Sending..." : "Send Request" }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </transition>
      </main>
    </div>
  </transition>
</template>

<!-- <style scoped>  
.modal-body {
  max-height: 570px;
}
.bg-gray-800-opacity {
  background-color: #2d374850;
}
@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}
.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style> -->
