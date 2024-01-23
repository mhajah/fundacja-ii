<script setup>
import navbar from './navbar.vue';
</script>

<template>
    <navbar id="nav" class="navbar" />
    <section id="hero-main">
        <Transition name="fade" appear>
            <h1 class="hero-main-header">Fundacja Absolwentów Informatyki Uniwersytetu Wrocławskiego</h1>
        </Transition>

        <button ref="aboutus" @click="handleClick" class="awesome"><font-awesome-icon icon="arrow-down"/></button>
    </section>
    
</template>

<script>
export default {
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll(event) {
        const header = document.getElementById("nav");
        const sticky = header.offsetTop + 200; 

        if (window.scrollY > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    },
    },
}
</script>

<!-- <script>
document.addEventListener("DOMContentLoaded", function() {
  var header = document.getElementById("nav");
  var sticky = header.offsetTop + 200; 

  function stickyHeader() {
    if (window.scrollY > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  window.onscroll = function() {
    stickyHeader();
  };
});
</script> -->

<style scoped>

@keyframes slideInDown {
    0% 
    {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% 
    {
        transform: translateY(0);
        opacity: 1;
    }
}

#nav.sticky {
    position: fixed;
    top: 0;
    background-color: black;
    margin: 0;
    padding-top: 20px;
    height: 70px;
    animation: slideInDown 0.5s ease-in-out;
}

#hero-main {
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)) ,url("/instytut.jpg");
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
    font-size: 24px;
    font-family: 'Exo 2';
    width: 100%;
    text-align: center;
    line-height: 36px;
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

.awesome {
    position: absolute;
    top: 85vh;
    font-size: 32px;
}


@media (max-width: 1100px) {
  .hero-main-header {
    text-transform: uppercase;
  }
}

@media (max-width: 336px) {
    #hero-main {
        padding: 15px;
    }
    .hero-main-header {
        font-size: 24px;
    }
}

@media (min-width: 650px) {
    .hero-main-header {
        font-size: 30px;
        line-height: 40px;
    }
}

@media (min-width: 850px) {
    .hero-main-header {
        font-size: 40px;
        line-height: 50px;
    }
}


@media (min-width: 1100px) {
    .awesome {
        display: none;
    }
    .hero-main-header {
        font-size: 60px;
        line-height: normal;
        padding: 30px 100px 30px 100px;
        font-weight: 600;
    }
}
@media (min-width: 1600px) {
    .hero-main-header {
        font-size: 70px;
        padding: 30px 100px 30px 100px;
    }
}

@media (min-width: 1825px) {
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

@media (min-width: 3000px) {
    .hero-main-header {
        font-size: 100px;
        width: 70vw;
    }
}


</style>
