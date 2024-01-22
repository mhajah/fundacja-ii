<script setup>
import burgerMenu from './burgerMenu.vue'
</script>

<template>
    <Transition name="fade" appear>
    <section class="navbar-main">
        <div class="navbar-main-logo">
            <router-link class="link" to="/">Fundacja Absolwentów Informatyki UWr</router-link>
        </div>
        <ul class="list-menu">
          <li class="list-menu-el"><router-link class="link" to="/raport">RAPORT</router-link></li>
		  <li class="list-menu-el"><router-link class="link" :to="{ path:'/', hash:'#founders'}">POSTACIE</router-link></li>
		  <li class="list-menu-el"><router-link class="link" :to="{ path:'/', hash:'#donate'}">WSPOMÓŻ FUNDACJĘ</router-link></li>
		  <li class="list-menu-el"><router-link class="link" to="/statut">STATUT</router-link></li>
		  <li class="list-menu-el"><router-link class="link" to="/kontakt">KONTAKT</router-link></li>
        </ul>
        
        <burgerMenu color="black" fontColor="white" class="burger-menu"/>
    </section>
</Transition>

</template>

<script>
export default {
  data() {
    return {
      ref: null
    };
  },
  methods: {
    handleClickHelp() {
      this.$parent.$parent.$refs.helpRef.scrollIntoView({ behavior: 'smooth' });
    },
    handleClickFounders() {
      this.$parent.$parent.$refs.foundersRef.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>

.navbar-main {
    position: fixed;
    top: 0;
    left: 0;
    height: 8vh;
    width: 100%;
    z-index: 99;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar-main-logo {
    margin-left: 15px;
}

.burger-menu {
    margin-right: 15px;
}
.list-menu {
     visibility: hidden;
}

@media (max-width: 337px) {
    .navbar-main {
        width: 100vw;
    }
    .list-menu {
     position: absolute;
    }
}

@media (min-width: 950px) {
    .burger-menu {
        visibility: hidden;
        position: absolute;
        margin:0;
    }
    .list-menu {
        visibility:visible;
        display: flex;
        margin-right: 15px;
    }
    .list-menu-el {
        margin-left: 30px;

    }
    .navbar-main-logo::after {
        content: '';
    display: block;
    width: 0;
    padding-bottom: 20px;
    height: 1px;
    border-bottom: 1px solid #B60D18;
    transition: all .3s;
    }

    .list-menu-el::after {
    content: '';
    display: block;
    width: 0;
    padding-bottom: 20px;
    height: 1px;
    border-bottom: 1px solid #B60D18;
    transition: all .3s;
    }

    .list-menu-el:hover::after {
        width: 100%;
        border-bottom: 1px solid #B60D18;
        transition: all .3s;
    }

    /* .list-menu-el:hover {
        transition: 0.5s;
        box-shadow: inset 0 -30px 0 0 cyan; 
        color: #B60D18;
    } */

    .navbar-main {
        /*background: rgb(2,0,36);*/
        /*background: linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,0,0.7469188358937324) 100%);*/
        position: absolute;
        background: inherit;
        text-shadow: #000 2px 0 20px;
        justify-content: space-around;
        font-size: 20px;
        margin-top: 30px;
    }
    @media (min-width: 3000px) {
        .navbar-main {
            font-size: 36px;
        }
    }
}
</style>