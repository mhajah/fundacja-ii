<script setup>
import navbar from './components/navbar_white.vue'
import Footer from './components/footer.vue'

</script>

<template>
    <navbar class=".navbar"/>
    <main>
        <h1>404</h1>
        <h2>Taka strona nie istnieje.</h2>
    </main>
    <Footer />
</template>

<style scoped lang="scss">
* {
  font-family: 'Exo 2';
}

main {
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

h1 {
    font-size: max(10vw, 11vh);
    color: #B60D18;
    font-weight: 600;
}

h2 {
    font-size: max(2vw, 3vh);
}


</style>
