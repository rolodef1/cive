<template>
  <div class="d-flex" id="wrapper">
    <Sidenav/>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- Page Content -->
    <div id="page-content-wrapper">
      <Nav/>
      <div class="container-fluid">
        <router-view/>
      </div>
    </div>
    <!-- Page Content -->    
  </div>
</template>

<style scoped>
  .container-fluid{
    padding-top: 10px;
  }
</style>

<script>
// @ is an alias to /src
import Sidenav from '@/components/Sidenav.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Sidenav,
    Nav
  }
}
</script>