<template>
    <div v-if="categoriesObject && category">
        <nuxt-link to="/">HOME</nuxt-link>
        CATEGORY
        {{category[0].name}}
    </div>
</template>

<script>
export default {
    name: 'Category',
    computed: {
        categoriesObject() { return this.$store.state.categories.categoriesObject; },
        category() { return this.categoriesObject.filter(category => category.slug == this.$route.params.category); }
    },
    created() {
        // console.log(this.$route.params)
    }
}
</script>

<style>

</style>