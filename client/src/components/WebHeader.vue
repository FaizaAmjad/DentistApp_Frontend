<template>
  <header class="header-container">
    <div class="logo">
      <!--<img src="logo.png" alt="Logo">-->
    </div>
    <div class="header-content">
      HEADER
    </div>
    <NavTabs />
  </header>
</template>

<script>
import NavTabs from './NavTabs.vue'

export default {
  components: {
    NavTabs
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #336699;
  color: white;
  padding: 10px; /* Adjust padding as needed */
  width: 100%; /* Take up the entire width */
  box-sizing: border-box; /* Include padding in width calculation */
}

.logo {
  /* Add styles for the logo if needed */
}

.header-content {
  margin-right: auto; /* Pushes HEADER to the right */
}

/* Your component-specific styles go here */
</style>
