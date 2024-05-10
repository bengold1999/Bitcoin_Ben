<template>
  <h1>Contacts</h1>
  <RouterLink to="/contact/edit"><button>Add a Contact</button></RouterLink>
  <ContactFilter @filter="onFilter" />
  <ContactList @remove="removeContact" :contacts="contacts" />
</template>

<script>
import { contactService } from "@/services/contact.service";
import ContactList from "../components/ContactList.vue"
import ContactFilter from "../components/ContactFilter.vue"
import { eventBusService, showErrorMsg, showSuccessMsg } from '@/services/event-bus.service'

export default {
  data() {
    return {
      contacts: [],
    };
  },
  async created() {
    this.contacts = await contactService.query();
  },
  methods: {
    async removeContact(contactId) {
      try {
        await contactService.remove(contactId);

        const idx = this.contacts.findIndex(
          (contact) => contact._id === contactId
        );
        this.contacts.splice(idx, 1);

        // eventBusService.emit('show-user-msg', { txt: `contact ${contactId} deleted`, type: 'success', timeout: 4000 })
        showSuccessMsg(`contact ${contactId} deleted`);
      } catch (err) {
        showErrorMsg("Couldnt delete contact");
      }
    },
    async onFilter(filterBy) {
      this.contacts = await contactService.query(filterBy);
    },
  },
    components: {
      ContactList,
      ContactFilter,
    },
};
</script>

<style>
</style>