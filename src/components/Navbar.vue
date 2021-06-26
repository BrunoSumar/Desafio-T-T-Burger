<template>
    <div>
        asdf
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">T.T. Burger</b-navbar-brand>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Início</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#" disabled>Logout</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>


<script>
export default {
  name: 'Navbar',
  components: {
      // Navbar
  }
}
</script>

<style>
</style>
