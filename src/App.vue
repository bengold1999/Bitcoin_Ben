<script>
import AppHeader from './components/AppHeader.vue'
import UserMsg from './components/UserMsg.vue'
export default {
    components: {
        AppHeader,
        UserMsg,
    }
}
</script>

<template>
    <AppHeader />
	<RouterView />
    <UserMsg />
</template>

<style scoped>
</style>
