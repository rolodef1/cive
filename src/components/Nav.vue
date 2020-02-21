<template>
  	<nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
        <button class="btn btn-orange" id="menu-toggle" @click="toggleNav()">
        	<i class="material-icons">menu</i>
        </button>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
     </nav>
</template>

<style scoped>
#menu-toggle i{
	font-size: 1.5em;
}
</style>

<script>
export default {
  name: 'Nav',
  methods: {
    toggleNav: function(){
    	document.querySelector('#wrapper').classList.toggle("toggled");
    }
  }
}
</script>