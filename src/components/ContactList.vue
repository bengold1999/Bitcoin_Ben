<template>
    <section class="contact-list">
        <ul>
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
                <div class="actions">
                    <RouterLink :to="`/contact/${contact._id}`"><button>Details</button></RouterLink>
                    <RouterLink :to="`/contact/edit/${contact._id}`"><button>Edit</button></RouterLink>
                    <button @click="onRemove(contact._id)">x</button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue'

export default {
    props: {
        contacts: {
            type: Array,
            required: true,
        },
    },
    methods: {
        onRemove(contactId) {
            this.$emit('remove', contactId)
        }
    },  
    components: {
        ContactPreview,
    }
}
</script>

<style lang="scss">

</style>