<template>
  	<div class="bg-black border-right" id="sidebar-wrapper">
      	<div class="sidebar-heading"><img src="../assets/logo.png"/></div>
      	<div class="list-group list-group-flush">
	        <a href="#" class="list-group-item list-group-item-action bg-ligth" id="forms" @click="toggleSubmenu">Formularios</a>
	        <div class="collapse" id="forms-submenu">
	        	<router-link to="/formularios/comentarios" class="list-group-item list-group-item-action bg-ligth">Comentarios</router-link>
			</div>
      	</div>
    </div>
</template>

<script>

export default {
  name: 'Sidenav',
  methods: {
  	toggleSubmenu: function(event){
  		document.querySelector('#'+event.target.id+'-submenu').classList.toggle("show");
  	}
  },
}

</script>

<style scoped>
#sidebar-wrapper a:hover{
	background-color: #F19700;
}
#sidebar-wrapper a:active{
	background-color: #F19700;
}
#sidebar-wrapper .collapse{
	padding-left: 5px;
}
.bg-black{
	background-color: #000000;
}
</style>
