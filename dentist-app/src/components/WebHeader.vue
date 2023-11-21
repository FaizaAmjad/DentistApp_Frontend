<template>
  <header class="header">
    <b-row>
      <b-col cols="1">
        <img src="../assets/toothFerry.png" alt="Logo" class="img-fluid; height: auto" />
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
    background: #025b7e69;
}

.navtab{
  display: flex;
  align-items: center;
}

</style>