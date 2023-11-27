<script setup>
import burgerMenu from './burgerMenu.vue'
</script>

<template>
    <section class="navbar-main">
        <div class="navbar-main-logo">
            #/STRONA_GŁÓWNA
        </div>
        <ul class="list-menu">
          <li class="list-menu-el"><router-link class="link" to="">RAPORT</router-link></li>
		  <li class="list-menu-el"><router-link class="link" to="">DARCZYŃCY</router-link></li>
		  <li class="list-menu-el"><router-link class="link" to="">WSPOMÓŻ FUNDACJĘ</router-link></li>
		  <li class="list-menu-el"><router-link class="link" to="">STATUS</router-link></li>
		  <li class="list-menu-el"><router-link class="link" to="/kontakt">KONTAKT</router-link></li>
        </ul>
        <burgerMenu class="burger-menu"/>
    </section>

</template>

<style scoped>
.pbar {
    z-index: 999;
}
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
    justify-content: space-between;
}
.navbar-main-logo {
    margin-left: 15px;
}

.burger-menu {
    margin-right: 15px;
}
.list-menu {
     visibility: hidden;
}
@media (min-width: 600px) {
    
}
@media (min-width: 768px) {
    .burger-menu {
        visibility: hidden;
        position: absolute;
        margin:0;
    }
    .list-menu {
        visibility:visible;
        display: flex;
        margin-right: 15px;
    }
    .list-menu-el {
        margin-left: 15px;
    }
}
</style>