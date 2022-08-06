export const state = () => ({
    categoriesObject: null,
})
  
export const mutations = {
    add(state, newObject) {
        state.categoriesObject = newObject;
    }
}