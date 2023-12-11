<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      password: '',
      loginError: false,
    };
  },
  methods: {
    async handleSubmit() {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      try {
          const response = await axios.post('http://localhost:3000/api/v1/dentists/login', {
          email: this.email,
          password: this.password
        })
          localStorage.setItem('token', response.data.token);
          this.$store.dispatch('dentist', response.data.dentist);
          this.$router.push('/');
        } catch (error) {
            this.error = 'Invalid email/password.'
        }
    },
  }
}
</script>

<template>  
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<div class="background">
  <div class="container">

    <div class="login-box">
  
      <h1>Log In</h1>
      <h2>Log in to get started with your work!</h2> 
  
      <b-form @submit="handleSubmit">
          <b-form-group label="Email" label-for="email" label-cols-md="2">
            <b-form-input id="email" v-model="email" type="email" required></b-form-input>
          </b-form-group>

          <b-form-group label="Password" label-for="password" label-cols-md="2">
            <b-form-input id="password" v-model="password" type="password" required></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">LOGIN</b-button>
      </b-form>


     <div class="create-account-prompt">
      <p>Don't have an account?   <router-link to="/register" div class="hyperlink"> Create an account.</router-link> </p>
     </div>

    
    </div>
  
  </div>
</div>
</template>

<style scoped>

h1 {
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:rgb(14, 14, 83);
}  

h2{
 font-size: large;
 margin-bottom: 40px;
}
.background{
  background-color: rgba(74, 100, 161, 0.903);
  padding: 3%;
  min-height: 100vh;
  box-sizing: border-box;
}
.container {
  
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 70vh;
  border-radius:10%;
  border-color: black;
}
.login-box{
  background-color: white;
  text-align: center;
  margin: center;
  font-style:initial;
  font-weight: 600;
  padding-block: 0;
  padding: 20%;
  border-width: 10px;
  border-style:initial;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.create-account-prompt{
  font-size: small;
  margin-top: 20px;
}

.hyperlink{
  color: rgb(51, 12, 226);
}

@media (max-width: 768px) {
  .login-box {
    padding: 5%;
  }
}

</style>