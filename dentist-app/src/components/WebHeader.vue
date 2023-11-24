<template>
  <header class="header">
    <b-row>
      <b-col cols="1">
        <img src="../assets/dentist-logo.png" alt="Logo" class="logo" />
      </b-col>
      <b-col class="navtab">
        <NavTabs/>
      </b-col>
    </b-row>
  </header>
  
</template>

<script>
import NavTabs from '/src/components/NavTabs.vue'
export default {
  components: {
    NavTabs
  }

}
</script>

<style>
.header{
  position: sticky;
    top: 0;
    z-index: 1000;
    background: #0a57ca;
}

.navtab{
  display: flex;
  align-items: center;
}

.logo{
  height: 100%;
  width: 100%
}

</style>