<script setup>
import navbar from './components/navbar_white.vue'
import Footer from './components/footer.vue'

</script>

<template>
    <navbar kontakt2="1" class="navbar"/>
    <section class="mini_hero">
      <h4>DARCZYŃCY</h4>
    </section>
    <section class="founders">
        <h5>DZIĘKUJEMY ZA WSPARCIE</h5>
        <div class="logos">
            <div class="founder">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="">
              <h6>Jan Kowalski</h6>
              <p>(jakiś tytuł) / opis</p>
            </div>
            <div class="founder">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="">
              <h6>Jan Kowalski</h6>
              <p>(jakiś tytuł) / opis</p>
            </div>
            <div class="founder">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="">
              <h6>Jan Kowalski</h6>
              <p>(jakiś tytuł) / opis</p>
            </div>
            <div class="founder">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="">
              <h6>Jan Kowalski</h6>
              <p>(jakiś tytuł) / opis</p>
            </div>
            <div class="founder">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="">
              <h6>Jan Kowalski</h6>
              <p>(jakiś tytuł) / opis</p>
            </div>
            <div class="founder">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="">
              <h6>Jan Kowalski</h6>
              <p>(jakiś tytuł) / opis</p>
            </div>
        </div>

    </section>

    <Footer />
</template>

<style scoped lang="scss">
* {
  font-family: 'Exo 2';
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

.founders {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.founders > h5 {
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    padding: 40px 30px 0 30px;
}

.logos {
    padding: 30px 10px 40px 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.founder > img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.founder {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px;
}

.founder > h6 {
  font-weight: 900;
  font-size: 18px;
  padding: 5px 0;
}


@media (min-width: 768px) {

  .mini_hero > h4 {
    font-size: 36px;
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

  .founders {
    background-color: #f5f5f5;
  }

  .founders > h5 {
    font-size: 24px;
    padding: 0;
  }

  .founder-box {
    width: 25vw;
    height: 25vw;
  }


  .logos {
    width: 60vw;
    background-color: #fff;
    border-top: 3px solid #B60D18;
    padding: 40px 30px;
    margin: 40px 0;
  }

}

@media (min-width: 1500px) {
    .logos {
        width: 50vw;
    }
    .founder-box {
        width: 15vw;
        height: 15vw;
    }
    .founder-link {
        border: none;
    }
    .founder-link:nth-child(2n+1) {
        border-right: none;
    }

    .founder-link:nth-child(-n+3) {
        border-bottom: 1px solid lightgray;
    }

    .founder-link:nth-child(2),
    .founder-link:nth-child(5) {
        border-right: 1px solid lightgray;
        border-left: 1px solid lightgray;
    }
    
    .founders > h5 {
        font-size: 28px;
    }   

    .founder > img {
      width: 125px;
      height: 125px;
    }

    .founder {
      margin: 20px 40px;
    }

    .founder > h6 {
      font-size: 24px;
    }
}

@media (min-width: 2100px) {
  .mini_hero > h4 {
    font-size: 44px;
  }

  .logos {
    width: 40vw;
  }
  .founder-box {
    width: 12vw;
    height: 12vw;
  }

}

</style>
