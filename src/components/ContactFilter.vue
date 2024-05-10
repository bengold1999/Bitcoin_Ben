<template>
    <form class="car-filter">
        <h2>Filter</h2>
        <input @input="onFilter" v-model="filterBy.txt" type="text">
        <!-- <input @input="onFilter" v-model="filterBy.minSpeed" type="number"> -->
    </form>
</template>

<script>
export default {
    data() {
        return {
            filterBy: { txt: '', minSpeed: 0 },
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
.car-filter {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;

    padding: 10px;
    background-color: darkcyan;
    color: whitesmoke;
}
</style>