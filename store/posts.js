export const state = () => ({
    postsObject: null,
})
  
export const mutations = {
    add(state, newObject) {
        state.postsObject = newObject;
    }
}