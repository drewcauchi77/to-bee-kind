export const state = () => ({
    categoriesObject: null,
    postsObject: null,
});

export const mutations = {
    addCategories(state, newObject) {
        state.categoriesObject = newObject;
    },
    addPosts(state, newObject) {
        state.postsObject = newObject;
    }
};