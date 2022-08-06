<template>
    <div>
        <template v-if="postsObject && postsObject.length > 0 && categoriesObject && categoriesObject.length > 0">
            <div v-for="post in postsObject" :key="post.slug">
                <span>{{post.title.rendered}}</span><br>
                <span>{{post.slug}}</span><br>
                <nuxt-link :to="`/${getCategorySlugById(post.categories[0])}/${post.slug}`">Visit</nuxt-link>
                <br><br>
            </div>
            
            <div v-for="category in categoriesObject" :key="category.slug">
                <span>{{category.name}}</span><br>
                <span>{{category.slug}}</span><br>
                <nuxt-link :to="`/${category.slug}`">Visit</nuxt-link>
                <br><br>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        categoriesObject() { return this.$store.state.categories.categoriesObject; },
        postsObject() { return this.$store.state.posts.postsObject; },
    },
    methods: {
        getCategorySlugById(categoryId) {
            return this.categoriesObject.filter(category => category.id == categoryId)[0].slug;
        },
    },
}
</script>

<style>

</style>