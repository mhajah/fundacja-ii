<script setup>
import navbar from './components/navbar_white.vue'
import Footer from './components/footer.vue'
import { useNewsStore } from './store.js';
const newsStore = useNewsStore();
</script>

<template>
    <navbar kontakt1="1" class=".navbar"/>

    <div class="status-wrapper">
      <h4>{{ newsStore.getNewsById($route.params.id).title }}</h4>
      
      <section v-if="newsStore.getNewsById($route.params.id).img" class="mini_hero">
        <img :src="newsStore.getNewsById($route.params.id).img" alt="news cover">
      </section>
      <section class="date">{{ newsStore.getNewsById($route.params.id).date }}</section>
      <section class="statut">
        <div class="chapter">
          <div class="news-content" v-html="newsStore.getNewsById($route.params.id).content">
            
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

h4 {
  margin-top: 8vh;
  padding: 40px 0;
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
  background-color: #f5f5f5;
  font-weight: 900;
}

.date {
  padding: 30px 20px;
  margin: 10px;
  background-color: #B60D18;
  width: 95vw;
  color: white;
  text-align: center;
}

.mini_hero {
  height: 25vh;
  margin: 0 15px;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8));
  width: 95vw;
}

.mini_hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mini_hero > h4 {
  color: white;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 3px;
}

.statut {
  padding: 40px 20px;
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
    background-color: #f5f5f5;
    height: 40vh;
    width: 700px;
  }

  h4 {
    font-size: 40px;
  }

  .date {
    width: 700px;
    text-align: right;
    margin: 0;
  }

  .statut {
    display: flex;
    border-top: 3px solid #B60D18;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    margin-bottom: 40px;
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
    width: 60vw;
  }

  h4 {
    font-size: 48px;
  }

  .mini_hero {
    width: 60vw;
  }

  .date {
    width: 60vw;
  }

  .status-wrapper > h5 {
    font-size: 28px;
    width: 700px;
  }

  .news-content {
    padding: 20px 100px;
    font-size: 16px;
  }
}

@media (min-width: 2100px ){
  .mini_hero > h4 {
    font-size: 44px;
  }
}


</style>
