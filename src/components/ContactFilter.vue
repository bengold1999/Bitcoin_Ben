<template>
    <form class="contact-filter">
        <h2>Filter</h2>
        <input @input="onFilter" v-model="filterBy.txt" type="text">
        <input @input="onFilter" v-model="filterBy.phone" type="text">
        <input @input="onFilter" v-model="filterBy.email" type="text">
    </form>
</template>

<script>
export default {
    data() {
        return {
            filterBy: { txt: '', phone: '',email:'' },
        }
    },
    methods: {
        onFilter() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss">
.contact-filter {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;

    padding: 10px;
    background-color: darkcyan;
    color: whitesmoke;
}
</style>