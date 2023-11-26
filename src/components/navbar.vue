<script setup>
import burgerMenu from './burgerMenu.vue'
</script>

<template>
    <section class="navbar-main">
        <div class="navbar-main-logo">
            LOGO
        </div>
    <burgerMenu/>
    </section>

</template>

<style scoped>
.navbar-main {
    position: fixed;
    top: 0;
    left: 0;
    height: 8vh;
    width: 100%;
    z-index: 99;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
}
.navbar-main-logo {
    margin-left: 15px;
}
</style>