<template>
    <div class="home">
        <div class="categories">
            <div class="category-list">
                <div class="single-category" v-for="category in categoriesObject" :key="category.slug">
                    <img :src="require(`~/assets/images/categories/${category.slug}.png`)">
                    <h2>{{category.name}}</h2>
                    <nuxt-link :to="`/${category.slug}`"></nuxt-link>
                </div>
            </div>
        </div>

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

<style lang="scss" scoped>
.home {
    .categories {
        .category-list {
            grid-gap: 20px;
            display: flex;
            flex-wrap: wrap;
            .single-category {
                height: 350px;
                flex-grow: 1;
                display: block;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
        }

    }
}
</style>