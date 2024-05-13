<template>
    <h2>{{contact.name}}</h2>
    <p>{{contact.email}}</p>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style >

</style>