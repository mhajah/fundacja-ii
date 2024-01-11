<script setup>
import navbar from './components/navbar_white.vue'
import Footer from './components/footer.vue'

</script>

<template>
    <navbar kontakt3="1" class=".navbar"/>
    <section class="mini_hero">
      <h4>WSPOMÓŻ FUNDACJĘ</h4>
    </section>
    <div class="status-wrapper">
      <h5>DZIĘKUJEMY ZA KAŻDE WSPARCIE</h5>
      <section class="statut">
        <div class="chapter">
        <h6>Nasze działania możesz wesprzeć dokonując datek na jedno z poniższych kont:</h6>
        <p class="account_number"><span>PLN</span> 88 1240 1473 1111 0011 2847 0067</p>
        <p class="account_number"><span>CHF</span> 97 1240 1473 1797 0011 2847 1107</p>
        <p class="account_number"><span>EUR</span> 65 1240 1473 1978 0011 2847 0878</p>
        <p class="account_number"><span>USD</span> 94 1240 1473 1787 0011 2847 0982</p>
        <p class="account_number"><span>GBP</span> 98 1240 1473 1789 0011 2847 1295</p>
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
  margin: 15px 0 10px 0;
  font-weight: 600;
}

.chapter {
  font-size: 16px;
  font-weight: 300;
  text-align: justify;
}

p > span {
    color: white;
    font-weight: 900;
    background-color: #B60D18;
    padding: 5px;
    border-radius: 25%;   
}

.account_number {
    margin: 15px 0;
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
  .account_number {
    font-size: 18px;;
  }
  .chapter > h6 {
    font-size: 20px;
  }
}


</style>
