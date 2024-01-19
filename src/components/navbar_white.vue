<script setup>
import burgerMenu from './burgerMenu.vue'
import { ref } from 'vue'

const props = defineProps({
    kontakt1: String,
    kontakt2: String,
    kontakt3: String,
    kontakt4: String,
	kontakt5: String,
})
</script>
<script>
export default {
	props: {
        kontakt1: String,
        kontakt2: String,
        kontakt3: String,
        kontakt4: String,
        kontakt5: String,
	},
};


</script>

<template>
    <section class="navbar-main">
        <div class="navbar-main-logo">
            <router-link class="link" to="/">Fundacja Absolwentów Informatyki UWr</router-link>
        </div>
        <ul class="list-menu">
          <li class="list-menu-el"><router-link v-bind:class="(kontakt1)?'k5':''" class="link" to="/raport">RAPORT</router-link></li>
		  <li class="list-menu-el"><router-link v-bind:class="(kontakt2)?'k5':''" class="link" :to="{ path:'/', hash:'#founders'}">POSTACIE</router-link></li>
		  <li class="list-menu-el"><router-link v-bind:class="(kontakt3)?'k5':''" class="link" :to="{ path:'/', hash:'#donate'}">WSPOMÓŻ FUNDACJĘ</router-link></li>
		  <li class="list-menu-el"><router-link v-bind:class="(kontakt4)?'k5':''" class="link" to="/statut">STATUT</router-link></li>
		  <li class="list-menu-el"><router-link v-bind:class="(kontakt5)?'k5':''" class="link" to="/kontakt">KONTAKT</router-link></li>
        </ul>
        <burgerMenu color="#ebebeb" fontColor="#222222" class="burger-menu"/>
    </section>

</template>


<style scoped lang="scss">

$color-child: v-bind(child);

.navbar-main {
    position: fixed;
    top: 0;
    left: 0;
    height: 8vh;
    width: 100%;
    z-index: 99;
    background-color: #ebebeb;
    color: black;
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

@media (min-width: 750px) {
    .navbar-main {
        font-size: 21px;
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

    .navbar-main-logo {
        margin: 0;
    }

    .list-menu-el,
    .navbar-main-logo {
        display: inline-block;
        line-height: 8vh;
        transition: 250ms;
    }

    .navbar-main-logo:after,
    .list-menu-el:after {
        display:block;
        content: '';
        border-bottom: solid 1px #B60D18;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }

    .list-menu-el:hover:after,
    .navbar-main-logo:hover:after {
        transform: scaleX(1);
    }

    .list-menu-el:hover, .navbar-main-logo:hover {
        color: #B60D18;
    }

    /* .list-menu-el:hover {
        transition: 0.5s;
        box-shadow: inset 0 -30px 0 0 cyan; 
        color: #B60D18;
    } */

    .navbar-main {
        /*background: rgb(2,0,36);*/
        /*background: linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,0,0.7469188358937324) 100%);*/
        position: fixed;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        font-size: 20px;
        box-shadow: 0px 16px 31px -30px rgba(66, 68, 90, 1);
    }

    .k5 {
        color: #B60D18;
    }

    @media (min-width: 3000px) {
        .navbar-main {
            font-size: 36px;
        }
        .list-menu-el {
            margin-left: 60px;
        }
    }


}
</style>