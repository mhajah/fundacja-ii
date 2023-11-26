<script setup>
import navbar from './navbar.vue';
</script>

<template>
    <navbar />
    <section id="hero-main">
        <h1 class="hero-main-header"><span>Fundacja Absolwentów Informatyki</span> Uniwersytetu Wrocławskiego</h1>

    </section>
</template>

<style scoped>
#hero-main {
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)) ,url("/instytut.jpg");
    background-position: 39% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    color: white;
    padding: 30px;
}

.hero-main-header {
    font-size: 24px;
    width: 100%;
    margin-top: 20vh;
    text-align: center;
    font-weight: 600;
}

span {
    font-size: 24px;;
}

</style>
