<template>
    <div>
        <Navbar />
        <b-container>
            <b-row>
              <img class="w-50 mx-auto" src ="./assets/logo_TT_transp.png">
            </b-row>
            <b-row>
              <h1 class="mx-auto text-grey br-font">Acompanhamento de Vendas</h1>
            </b-row>
            <b-row>
                <TabelaVendas />
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
*/
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

    border: 1px solid red;
}

html,
body {
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  visibility: none;
}

@font-face {
  font-family: BrothersRegular;
  src: url(./assets/Brothers Regular.otf);
}
.br-font {
  font-family: BrothersRegular !important;
}

.text-grey {
  color: #21252a;
}

.bg-grey {
  background-color: #21252a;
}
</style>
