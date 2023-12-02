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
            <a href="" class="founder-link"><div class="founder-box"><img src="/sponsor1.png" alt=""></div></a>
            <a href="" class="founder-link"><div class="founder-box"><img src="https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png" alt=""></div></a>
            <a href="" class="founder-link"><div class="founder-box"><img src="https://download.logo.wine/logo/PKN_Orlen/PKN_Orlen-Logo.wine.png" alt=""></div></a>
            <a href="" class="founder-link"><div class="founder-box"><img src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png" alt=""></div></a>
            <a href="" class="founder-link"><div class="founder-box"><img src="https://purepng.com/public/uploads/large/purepng.com-intel-logologobrand-logoiconslogos-251519939644r68ft.png" alt=""></div></a>
            <a href="" class="founder-link"><div class="founder-box"><img src="https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png" alt=""></div></a>
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

.founder-box {
    width: 45vw;
    height: 40vw;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.founder-box > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.founder-link {
    border-bottom: 1px solid lightgray;
}

.founder-link:nth-child(2n+1) {
    border-right: 1px solid lightgray;
}

.founder-link:nth-last-child(-n + 2) {
    border-bottom: none;
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
