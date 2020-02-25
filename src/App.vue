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

<style>
body {
  overflow-x: hidden;
  font-family: 'Oswald';
}
#page-content-wrapper {
  min-width: 100vw;
}

@media (min-width: 768px) {
  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }
}
.container-fluid{
  padding-top: 10px;
}
.bg-black{
  background-color: #000000;
}
.bg-orange {
  background-color: #F19700;
}
.btn-orange {
  background-color: #F19700;
  color: white;
  border-radius: 75px 75px 75px 75px;
  -moz-border-radius: 75px 75px 75px 75px;
  -webkit-border-radius: 75px 75px 75px 75px;
  border: 1px solid #F19700;
}
.btn-orange:hover {
  background-color: white;
  color: #F19700;
  border-radius: 75px 75px 75px 75px;
  -moz-border-radius: 75px 75px 75px 75px;
  -webkit-border-radius: 75px 75px 75px 75px;
  border: 1px solid #F19700;
}
span.required {
  color: red;
}
.card-header {
  background-color: #CC6632;
  color: white;
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
