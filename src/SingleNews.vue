<script setup>
import navbar from './components/navbar_white.vue'
import Footer from './components/footer.vue'
import { useNewsStore } from './store.js';
const newsStore = useNewsStore();
</script>

<template>
    <navbar kontakt1="1" class=".navbar"/>
    <section class="mini_hero">
      <h4>News</h4>
    </section>
    <div class="status-wrapper">
      <section class="statut">
        <div class="chapter">
          <h6>Lorem ipsum</h6>
          <div>
            <h2>{{ newsStore.getNewsById($route.params.id).content }}</h2>
          </div>
        </div>
      </section>
    </div>
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

.status-wrapper {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background-color: #f5f5f5;
}

.status-wrapper > h5 {
  text-align: center;
  padding: 40px 30px 0 30px;
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

@media (min-width: 768px) {
  .mini_hero > h4 {
    font-size: 36px;
  }
  .contact {
    font-size: 24px;
  }
  .contact-sec > a {
    font-size: 18px;
    width: 250px;
  }
}
@media (min-width: 950px) {
  .mini_hero {
    background: none;
    border: none;
    background-color: #f5f5f5;
    height: 16vh;
  }
  .mini_hero > h4 {
    color: #222;
    letter-spacing: normal;
  }

  .statut {
    display: flex;
    border-top: 3px solid #B60D18;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    margin: 40px 0;
    padding-top: 20px;
  }

  .status-wrapper > h5 {
    padding: 0;
    font-size: 24px;
    width: 550px;
  }

  h6 {
    color:#B60D18;
  }

  .paragraph {
    margin: 20px 0 10px 0;
  }
}

@media (min-width: 1750px) { 
  .statut {
    width: 50vw;
  }
  .status-wrapper > h5 {
    font-size: 28px;
    width: 700px;
  }
}

@media (min-width: 2100px ){
  .mini_hero > h4 {
    font-size: 44px;
  }
}


</style>
