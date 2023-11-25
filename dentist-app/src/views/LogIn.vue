<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission here- will connect it to dentist data and account
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    },
  },
};

</script>

<template>  
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
body {
  padding: 0;
  margin: 0;
}
h1 {
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: brown;
}  

h2{
 font-size: larger;
 margin-bottom: 40px;
}
.background{
  background-color: rgba(73, 181, 235, 0.903);
  margin-top: 0px;
  margin-bottom: 0px;
}
.container {
  
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
  border-radius:10%;
  border-color: black;
}
.login-box{
  background-color: white;
  margin: 0;
  padding: 150px;
  border-width: 10px;
  border-style:initial;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.create-account-prompt{
  font-size: small;
  margin-top: 20px;
}

</style>