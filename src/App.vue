<template>
    <Navbar/>
    <div class="container">
        <!-- <img src ="./assets/logo_TT_transp.png"> -->
        <h1>asihdfijhsAcompanhamento de Vendas</h1>

    </div>
</template>

<script>
 import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
      // Navbar
  }
}
</script>

<style>
<!--
     paleta de cores
     #000
     #21252a
     #808080
     #f2f2f2
     #c0c0c0
     #fff
     #3c59ff
-->
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  visibility: none;
}
</style>
