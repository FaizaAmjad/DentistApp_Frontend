<template>
  <div>
    <nav class="wrapper">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  font-size: 1.5rem;
  margin-top: 0;
}
</style>