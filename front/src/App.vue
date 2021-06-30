<template>
    <div>
        <Navbar />
        <b-container>
            <b-row>
              <img id="logo" class="mx-auto" src ="./assets/logo_TT_transp.png">
            </b-row>
            <b-row>
              <h1 class="mx-auto mb-2 text-grey br-font">Acompanhamento de Vendas</h1>
            </b-row>
            <b-row>
                <TabelaVendas class="overflow-auto mx-auto"/>
            </b-row>
        </b-container>
    </div>
</template>

<script>
 import Navbar from './components/Navbar.vue'
 import TabelaVendas from './components/TabelaVendas.vue'

export default {
  name: 'App',
  components: {
      Navbar,
      TabelaVendas,
  }
}
</script>

<style>
/*
    paleta de cores
    #000
    #21252a
    #808080
    #f2f2f2
    #c0c0c0
    #fff
    #3c59ff
    #3c59ff
*/
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }

html,
body {
  font-family: Arial, Helvetica, sans-serif;
    font-size: 1.15em;
 }

@font-face {
  font-family: BrothersRegular;
  src: url(./assets/Brothers Regular.otf);
}
.br-font {
  font-family: BrothersRegular !important;
}

h1 {
  text-align: center !important;
}

.text-grey {
  color: #21252a;
}

.bg-grey {
  background-color: #21252a;
}

#logo {
  width: 40%;
  margin: -6% 0;
}
</style>
