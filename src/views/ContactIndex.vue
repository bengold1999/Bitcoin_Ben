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
      // contacts: [],
    };
  },
  async created() {
    this.$store.subscribe((cmd, state) => {
            console.log(cmd)
            console.log(state)
        })
        try {
            this.$store.dispatch({ type: 'loadContacts' })
        } catch (err) {
            console.log(err)            
        }  },
  methods: {
    async removeContact(contactId) {
      try {
        this.$store.dispatch({ type: 'removeContact', contactId })

        showSuccessMsg(`contact ${contactId} deleted`);
      } catch (err) {
        showErrorMsg("Couldnt delete contact");
      }
    },
    async onFilter(filterBy) {
      try {
                this.$store.dispatch({ type: 'loadContacts', filterBy })
            } catch (err) {
                console.log(err)
            }    },
  },
  computed: {
        contacts() { return this.$store.getters.contacts }
    },
    components: {
      ContactList,
      ContactFilter,
    },
};
</script>

<style>
</style>