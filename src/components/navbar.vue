<script setup>
import burgerMenu from './burgerMenu.vue'
</script>

<template>
    <Transition name="fade" appear>
    <section class="navbar-main">
        <div class="navbar-main-logo">
            <router-link class="link" to="/">Fundacja Absolwentów Instytutu Informatyki UWr</router-link>
        </div>
        <ul class="list-menu">
          <li class="">

            <div class="socials">
                <a href="https://www.instagram.com/fundacja.ii.uwr"><font-awesome-icon class="awesome" icon="fa-brands fa-instagram" /></a>
                <a href="https://www.facebook.com/profile.php?id=61558673312467"><font-awesome-icon class="awesome" icon="fa-brands fa-facebook" /></a>
                <a href="https://www.tiktok.com/@fundacja.ii.uwr"><font-awesome-icon class="awesome" icon="fa-brands fa-tiktok" /></a>
                <a href="https://x.com/fundacja_ii_uwr"><font-awesome-icon class="awesome" icon="fa-brands fa-x-twitter" /></a>
            </div>            
          </li>  
          <!-- <li class="list-menu-el"><router-link class="link" to="/raport">RAPORT</router-link></li> -->
		  <li class="list-menu-el"><router-link class="link" :to="{ path:'/', hash:'#founders'}">POSTACIE</router-link></li>
		  <li class="list-menu-el"><router-link class="link" :to="{ path:'/', hash:'#donate'}">WSPOMÓŻ FUNDACJĘ</router-link></li>
		  <!-- <li class="list-menu-el"><router-link class="link" to="/statut">STATUT</router-link></li> -->
		  <li class="list-menu-el"><router-link class="link" to="/kontakt">KONTAKT</router-link></li>
        </ul>
        
        <burgerMenu color="black" fontColor="white" class="burger-menu"/>
    </section>
</Transition>

</template>


<style scoped>

.awesome {
    padding: 0 8px 0 8px;
    font-size: 21px;
    transition: ease-in-out 0.3s;
}

.awesome:hover {
    color: #B60D18;
    font-size: 24px;
}


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

.list-menu-el {
    margin-left: 30px;

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
        font-size: 20px;
    }
    .navbar-main-logo::after {
        content: '';
    display: block;
    width: 0;
    padding-bottom: 20px;
    height: 1px;
    border-bottom: 1px solid red;
    transition: all .3s;
    }

    .list-menu-el::after {
    content: '';
    display: block;
    width: 0;
    padding-bottom: 20px;
    height: 1px;
    border-bottom: 1px solid red;
    transition: all .3s;
    }

    .list-menu-el:hover::after {
        width: 100%;
        border-bottom: 1px solid red;
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
    @media (max-width: 1500px) {
        .list-menu-el {
            font-size: 16px;
        }
    }
    @media (max-width: 1300px) {
        .list-menu-el {
            font-size: 14px;
        }
    }
    @media (min-width: 3000px) {
        .navbar-main {
            font-size: 36px;
        }
    }
}
</style>