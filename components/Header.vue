<template>
    <div id="header">
        <h1>Header</h1>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss" scoped>
#header {
    height: 80px;
    top: 0;
    background-color: white;
    position: fixed;
    width: 100%;
    z-index: 1;
}
</style>