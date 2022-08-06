<template>
    <div v-if="postsObject && post">
        <nuxt-link to="/">HOME</nuxt-link>
        POST
        {{post[0].title.rendered}}
    </div>
</template>

<script>
export default {
    name: 'Post',
    computed: {
        postsObject() { return this.$store.state.posts.postsObject; },
        post() { return this.postsObject.filter(post => post.slug == this.$route.params.post); }
    },
}
</script>

<style>

</style>