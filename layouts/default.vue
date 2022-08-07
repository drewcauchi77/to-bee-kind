<template>
    <main>
        <div>header</div>
        <nuxt />
        <div>Footer</div>
    </main>
</template>

<script>
    export default {
        name: 'App',
        async fetch() {
            const categories = await this.$axios.get(`${this.$axios.defaults.baseURL}/categories`);
            this.$store.commit('addCategories', categories.data);
            
            const posts = await this.$axios.get(`${this.$axios.defaults.baseURL}/posts`);
            this.$store.commit('addPosts', posts.data);
        },
    }
</script>

<style>

</style>