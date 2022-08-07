<template>
    <div>
        <nuxt-link to="/">HOME</nuxt-link>
        CATEGORY
        {{category[0].name}}
    </div>
</template>

<script>
export default {
    name: 'Category',
    computed: {
        categoriesObject() { return this.$store.state.categoriesObject; },
        category() { return this.categoriesObject.filter(category => category.slug == this.$route.params.category); }
    },
}
</script>

<style>

</style>