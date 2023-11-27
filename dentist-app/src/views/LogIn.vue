<script>
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
      // Handle form submission here- will connect it to dentist data and account

      console.log('Email:', this.email);
      console.log('Password:', this.password);
      try {
        // Call your authentication API gateway here 
        // For simplicity, let's assume a successful login
        const response = await this.authenticateUser();
        
        // Check if the authentication is successful
        if (response.success) {
          console.log('Login successful');
          // Redirect to the user page which has to be created or homepage for THAT dentist
          // this.$router.push('/dashboard');
        } else {
          console.log('Login failed');
          this.loginError = true;
        }
      } catch (error) {
        console.error('Error during authentication', error);
        this.loginError = true;
      }
    },

    async authenticateUser() {
      // Simulating an asynchronous authentication process
      return new Promise((resolve) => {
        // actual authentication logic here- checking with api gateway if database contains this user
        // For simplicity, returning a simulated response
        setTimeout(() => {
          // Simulated response (replace with actual response from server)
          resolve({ success: true });
        }, 1000);
      });
    },
  

  },
};

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
  color: rgb(13, 29, 148);
}  

h2{
 font-size: large;
 margin-bottom: 40px;
}
.background{
  background-color: rgba(73, 181, 235, 0.903);
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
  color: rgb(76, 13, 148);
}

@media (max-width: 768px) {
  .login-box {
    padding: 5%;
  }
}

</style>