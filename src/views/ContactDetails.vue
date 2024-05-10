<template>
  <h2 v-if="!contact">Wait...</h2>
  <section v-else>
    <h1>{{ contact.name }}</h1>
    <h1>{{ contact.email }}</h1>
    <h1>{{ contact.phone }}</h1>
  </section>
</template>

<script>
import { contactService } from "@/services/contact.service";

export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const { contactId } = this.$route.params;

    this.contact = await contactService.get(contactId);
  },
};
</script>

<style>
</style>