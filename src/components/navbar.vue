<script setup>
import burgerMenu from './burgerMenu.vue'
</script>

<template>
    <section class="navbar-main">
        <div class="navbar-main-logo">
            #/STRONA_GŁÓWNA
        </div>
        <burgerMenu class="burger-menu"/>
    </section>

</template>

<style scoped>
.navbar-main {
    position: fixed;
    top: 0;
    left: 0;
    height: 8vh;
    width: 100vw;
    z-index: 99;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar-main-logo {
    margin-left: 15px;
}

.burger-menu {
    margin-right: 15px;
}



</style>