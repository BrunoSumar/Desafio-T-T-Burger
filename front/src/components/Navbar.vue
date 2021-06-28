<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="black">
        <b-navbar-brand href="#" class="br-font font-weight-bold">
            T.T. Burger
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Início</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item right>
              Logout
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: 'Navbar',
}
</script>

<style>
 .black {
     background-color: #000;
 }
</style>
