<script>
import Button from "../reusable/Button.vue";
import FormInput from "../reusable/FormInput.vue";
export default { components: { Button, FormInput } };
</script>

<template>
  <div class="w-full md:w-1/2">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-3xl shadow-xl text-left"
    >
      <p
        class="font-black text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        Contact Form
      </p>
      <form action="#" class="font-general-regular space-y-7">
        <FormInput label="Full Name" inputIdentifier="name" />
        <FormInput label="Email" inputIdentifier="email" inputType="email" />
        <FormInput label="Subject" inputIdentifier="subject" />
        <!-- <FormTextarea label="Message" textareaIdentifier="message" /> -->

        <div>
          <a href="mailto:audugodstime95@gmail.com">
            <Button
              title="Send Message"
              class="px-4 text-sm py-2.5 text-white tracking-wider bg-blue-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-full duration-500"
              type="submit"
              aria-label="Send Message"
            />
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
