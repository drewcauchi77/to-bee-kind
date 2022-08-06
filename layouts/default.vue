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
    created() {
        this.fetchCategories();
        this.fetchPosts();
    },
    methods: {
        async fetchCategories() {
            const categories = await this.$axios.$get(`${this.$axios.defaults.baseURL}/categories`);
            this.$store.commit('categories/add', categories);
        },
        async fetchPosts() {
            const posts = await this.$axios.$get(`${this.$axios.defaults.baseURL}/posts`);
            this.$store.commit('posts/add', posts);
        },
    },
}
</script>

<style>

</style>