<template>
    <main>
        <Header />
        <div id="content" class="content-container">
            <nuxt />
        </div>
        <Footer />
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

<style lang="scss" scoped>
#content {
    padding-top: 80px;
}
</style>