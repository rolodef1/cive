<template>
  <div class="bg-black border-right" id="sidebar-wrapper">
    <div class="sidebar-heading"><router-link tag="div" to="/"><img src="@/assets/logo.png"/></router-link></div>
    <div class="list-group list-group-flush">
      <a href="#" class="list-group-item list-group-item-action bg-ligth" id="forms" @click="toggleSubmenu">Formularios</a>
      <div class="collapse" id="forms-submenu">
        <router-link to="/formularios/contacto" class="list-group-item list-group-item-action bg-ligth">Contacto</router-link>
        <router-link to="/formularios/registro" class="list-group-item list-group-item-action bg-ligth">Registro</router-link>
        <router-link to="/formularios/login" class="list-group-item list-group-item-action bg-ligth">Inicio de sesión</router-link>
        <router-link to="/formularios/forgot" class="list-group-item list-group-item-action bg-ligth">Recuperar contraseña o usuario</router-link>
        <router-link to="/formularios/busqueda" class="list-group-item list-group-item-action bg-ligth">Búsqueda</router-link>
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
#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

#sidebar-wrapper a:hover{
  background-color: #F19700;
  color: white;
}
#sidebar-wrapper .collapse{
  padding-left: 5px;
}
a.router-link-active {
  background-color: #CC6632;
  color: white;
}
</style>
