<template>
  <div>
    <b-row>
      <b-col>
        <div class="wrapper">
          <nav >
            <RouterLink class="tab" to="/">Home</RouterLink>
            <RouterLink class="tab" to="/about">About</RouterLink>
            <RouterLink class="tab" to="/register">Register</RouterLink>
          </nav>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.wrapper {
  gap: 5%;
  font-size: 1.5rem;
  margin-top: 0;
}

.tab {
  color: rgba(11, 11, 199, 0.831);
  transition: color 0.3s ease; 
  text-decoration: none; 
  padding: 2%; 
}

.tab:hover {
  color: rgb(8, 8, 136); 
}
</style>