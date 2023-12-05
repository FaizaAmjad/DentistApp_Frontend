<template>
  <nav class="navtab">

    <div class="left-links">
     <RouterLink class="tab" to="/">Home</RouterLink>
    </div>

    <div class="right-links">
    <b-dropdown >
      <template #button-content>
        <span class="account-button">Account</span>
      </template>
      <b-dropdown-item to="/login">Log In</b-dropdown-item>
      <b-dropdown-item to="/register">Register</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item to="/account">Account</b-dropdown-item>
    </b-dropdown>
    </div>

  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'NavTabs',
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
.navtab {
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin: 10px;
}


.left-links {
  display: flex;
  align-items: center;
}

.right-links {
  display: flex;
  align-items: center;
  position: relative; /* Adjusted to relative positioning */
}

.account-dropdown {
  position: absolute;
  top: 0;
  right: 0;
}

.tab {
  color: rgba(255, 255, 255, 0.831);
  transition: color 0.3s ease; 
  text-decoration: none; 
  padding: 2%; 
}

.tab:hover {
  color: rgb(155, 155, 155); 
}
</style>