
<script setup>
import { ref } from 'vue'

const props = defineProps({
	color: String,
	fontColor: String
})

const navOpen = ref(false)
</script>

<script>
export default {
	props: {
	  color: String,
	  fontColor: String
	}
}
</script>
<template>
	<div id="sidemenu">
  <button class="sidemenu__btn" @click="navOpen = !navOpen" v-bind:class="{active:navOpen}">
			  <span class="top"></span>
			  <span class="mid"></span>
			  <span class="bottom"></span>
		  </button>
  <transition name="translateX">
	<nav v-if="navOpen">
	  <div class="sidemenu__wrapper">
		<ul class="sidemenu__list">
		  <li class="sidemenu__item"><router-link class="link" to="playground">RAPORT</router-link></li>
		  <li class="sidemenu__item"><router-link class="link" to="playground">DARCZYŃCY</router-link></li>
		  <li class="sidemenu__item"><router-link class="link" to="playground">WSPOMÓŻ FUNDACJĘ</router-link></li>
		  <li class="sidemenu__item"><router-link class="link" to="playground">STATUT</router-link></li>
		  <li class="sidemenu__item"><router-link class="link" to="kontakt">KONTAKT</router-link></li>
		</ul>
	  </div>
	</nav>
  </transition>
</div>
</template>

<style scoped lang="scss">
#sidemenu {
  nav {
	  width: 100vw;
	  height: 92vh;
	  background: v-bind(color);

	  position: fixed;
	  margin-top: 8vh;
	  top: 0;
	  left: 0;
	  z-index: 999;
	  text-align: center;
	  // box-shadow: 2px 0 3px$grey-6;
	  // overflow-y: scroll;
  }

  .sidemenu {
	  &__btn {
		  display: block;
		  width: 50px;
		  height: 50px;
		  background: v-bind(color);
		  border: none;
		  position: relative;
		  z-index: 100;
		  appearance: none;
		  cursor: pointer;
		  outline: none;

		  span {
			  display: block;
			  width: 20px;
			  height: 2px;
			  margin: auto;
			  background: v-bind(fontColor);
			  position: absolute;
			  top: 0;
			  bottom: 0;
			  left: 0;
			  right: 0;
			  transition: all .4s ease;

			  &.top {
				  transform: translateY(-8px);
			  }

			  &.bottom {
				  transform: translateY(8px);
			  }
		  }
		  &.active{
			  .top {
				  transform: rotate(-45deg);
			  }
			  .mid{
				  transform: translateX(-20px) rotate(360deg);
				  opacity: 0;
			  }
			  .bottom {
				  transform: rotate(45deg);
			  }
		  }

	  }

	  &__wrapper {
	padding-top: 5px;
  }

	  &__list {
		  padding-top: 50px;
	list-style:none;
	padding: 0;
	margin: 0;
	  }

	  &__item {
	.link {
	  text-decoration: none;
			line-height: 1.6em;
			padding: .5em;
			display: block;
			color: v-bind(fontColor);
			transition: .4s ease;
			font-family: 'Exo 2';
			font-weight: 600;
			font-size: 21px;	
			  &:hover {
				  background: black;
				  color: #B60D18;
			  }
		  }
	  }
  }
}

.translateX-enter{
  transform:translateX(-200px);
  opacity: 0;
}

.translateX-enter-active,.translateX-leave-active{
  transform-origin: top left 0;
  transition:.2s ease;
}

.translateX-leave-to{
  transform: translateX(-200px);
  opacity: 0;
}

</style>
