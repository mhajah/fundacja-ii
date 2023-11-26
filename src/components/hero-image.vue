<script setup>
import navbar from './navbar.vue';
</script>

<template>
    <navbar />
    <section id="hero-main">
        <h1 class="hero-main-header">Fundacja Absolwentów Informatyki Uniwersytetu Wrocławskiego</h1>
        <a href="#contact-anch" class="hero-main-button" >NAPISZ DO NAS</a>
    </section>
    
</template>

<style scoped>
#hero-main {
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)) ,url("/instytut.jpg");
    background-position: 85% 60%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 30px;
    align-items: center;
}

.hero-main-header {
    font-size: 28px;
    font-family: 'Exo 2';
    width: 100%;
    margin-top: 20vh;
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
    top: 40vh;
    text-align: center;
}




</style>
