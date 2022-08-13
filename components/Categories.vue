<template>
    <div class="categories margin-content">
        <h2 class="section-title">Discover</h2>

        <div class="category-list">
            <div class="single-category" v-for="category in categoriesObject" :key="category.slug">
                <nuxt-link :to="`/${category.slug}`">
                    <img :src="require(`~/assets/images/categories/${category.slug}.png`)" v-lazy-load>
                    <div class="title"><h3>{{category.name}}</h3></div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Categories',
    computed: {
        categoriesObject() { return this.$store.state.categoriesObject; },
    }
}
</script>

<style lang="scss" scoped>
.categories {
    .section-title {
        text-align: center;
        margin-bottom: 30px;
        text-transform: uppercase;
    }
    .category-list {
        grid-gap: 35px;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        .single-category {
            height: 300px;
            max-width: 370px;
            flex-grow: 1;
            display: block;
            margin: 0 auto;
            transition: 0.3s all;
            a {
                height: 100%;
                display: block;
                position: relative;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 6px;
                }
                .title {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: 20px;
                    border: 1px solid #000;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 6px;
                    transition: 0.3s all;
                    h3 {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        margin: auto;
                        height: fit-content;
                        width: fit-content;
                        text-transform: uppercase;
                        color: #000;
                        font-size: 14px;
                        text-align: center;
                    }
                }
            }
            &:hover {
                transform: translateY(-2%);
                a {
                    .title {
                        background: rgba(255, 255, 255, 0.5);
                    }
                }
            }
        }
    }
}
</style>