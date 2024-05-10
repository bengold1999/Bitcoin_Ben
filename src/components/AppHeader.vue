<template>
	<header class="app-header">
        <h1>Bitcoin</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/contact">Contacts</RouterLink>
            <RouterLink to="/statistics">Statistics</RouterLink>
        </nav>
	</header>
</template>

<script>
export default {}
</script>

<style>
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    background-color: lightblue;
}
nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

</style>
