<template>
    <div class="posts margin-content">
        <div class="posts-list">
            <div class="single-post" v-for="post in postsObject" :key="post.slug">
                <h2>{{post.title.rendered}}</h2>
                <nuxt-link :to="`/${getCategorySlugById(post.categories[0])}/${post.slug}`">Visit</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecentPosts',
    computed: {
        categoriesObject() { return this.$store.state.categoriesObject; },
        postsObject() { return this.$store.state.postsObject; },
    },
    methods: {
        getCategorySlugById(categoryId) {
            return this.categoriesObject.filter(category => category.id == categoryId)[0].slug;
        },
    },
}
</script>

<style lang="scss" scoped>

</style>