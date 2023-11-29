<script setup>
import navbar from './components/navbar_white.vue'
import Footer from './components/footer.vue'

</script>

<template>
    <navbar class=".navbar"/>
    <section class="mini_hero">
      <h4>STATUT</h4>
    </section>
    <section class="statut">
      <h5>STATUT FUNDACJI ABSOLWENTÓW INFORMATYKI UNIWERSYTETU WROCŁAWSKIEGO</h5>
      <div class="chapter">
        <h6>Rozdział 1</h6>
        <p>§ 1.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p>§ 2.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div class="chapter">
        <h6>Rozdział 2</h6>
        <p>§ 3.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p>§ 4.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
    </section>
    <Footer />

</template>

<style scoped lang="scss">
* {
  font-family: 'Exo 2';
}

.navbar {
  display: block;
  position: relative;
}

.mini_hero {
  margin-top: 8vh;
  width: 100%;
  height: 30vh;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)) ,url("/instytut.jpg");
  background-repeat: no-repeat;
  background-size: cover; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #B60D18;
}

.mini_hero > h4 {
  color: white;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 3px;
}

.statut {
  padding: 40px 30px 40px 30px;
  font-size: 20px;
  font-weight: 600;
}



.chapter > h6 {
  font-size: 18px;
  text-align: center;
  margin: 15px 0 10px 0;
}

.chapter {
  font-size: 16px;
  font-weight: 300;
  text-align: justify;
}

</style>
