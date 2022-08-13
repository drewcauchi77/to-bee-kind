<template>
    <div class="home">
        <Categories />

        <div v-for="post in postsObject" :key="post.slug">
            <span>{{post.title.rendered}}</span><br>
            <span>{{post.slug}}</span><br>
            <nuxt-link :to="`/${getCategorySlugById(post.categories[0])}/${post.slug}`">Visit</nuxt-link>
            <br><br>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
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