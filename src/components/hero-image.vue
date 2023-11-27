<script setup>
import navbar from './navbar.vue';
</script>

<template>
    <navbar class="navbar" />
    <section id="hero-main">
        <h1 class="hero-main-header">Fundacja Absolwentów Informatyki Uniwersytetu Wrocławskiego</h1>
    </section>
    
</template>

<style scoped>
#hero-main {
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)) ,url("/instytut.jpg");
    background-position: 85% 60%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    padding: 30px;
    align-items: center;
}

.hero-main-header {
    font-size: 36px;
    font-family: 'Exo 2';
    width: 100%;
    text-align: center;
    line-height: 48px;
    font-weight: 600;
}

.hero-main-button {
    color: white;
    background-color: rgb(181, 13, 24, 0.8);
    width: 50vw;
    border-radius: 15px;
    padding: 10px 5px 10px 5px;
    position: relative;
    font-size: 18px;
    top: 35vh;
    text-align: center;
}

@media (min-width: 1200px) {
    .hero-main-header {
        font-size: 60px;
        line-height: normal;
        padding: 30px 100px 30px 100px;
    }
}
@media (min-width: 1600px) {
    .hero-main-header {
        font-size: 70px;
        padding: 30px 100px 30px 100px;
    }
}

@media (min-width: 1860px) {
    .hero-main-header {
        font-size: 80px;
        padding: 30px 100px 30px 100px;
    }
}

@media (min-width: 2050px) {
    .hero-main-header {
        font-size: 90px;
        padding: 30px 250px 30px 250px;
    }
}


</style>
