<template>
    <h2 v-if="!contact">Loading...</h2>
    <form v-else @submit.prevent="save" class="contact-edit">
        <input v-model="contact.name" type="text" placeholder="name">
        <!-- <input v-model="contact.speed" type="number" placeholder="speed"> -->
        <button>Save</button>
    </form>
</template>

<script>
import { contactService } from '@/services/contact.service';
import { showSuccessMsg } from '@/services/event-bus.service';

export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async save() {
            await contactService.save(this.contact)
            showSuccessMsg('contact saved.')
            this.$router.push('/contact')
        }
    },  
    async created() {
        const { contactId } = this.$route.params

        if(contactId) {
            this.contact = await contactService.get(contactId)
        } else {
            this.contact = contactService.getEmptycontact()
        }
    }
}
</script>

<style lang="scss">
.contact-edit {
    display: grid;
    justify-items: start;
    gap: 10px;

    padding: 10px;
    background-color: rgb(245, 224, 145);

    button {
        place-self: end;
    }
}
</style>