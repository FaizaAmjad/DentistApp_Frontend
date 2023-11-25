<script>
</script>

<template>  
<div class="background">
  <div class="container">

    <div class="login-box">
  
      <div class="login-headline">
      <h1>Log In</h1>
      </div>

      <div class="login-headline-extra">
      <h2 style="font-size: larger;">Log in to get started with your work!</h2> 
      </div>

     <div class="login-form">
      <p>Email:                  email section</p>
      <p>Password:               Password section</p>
     </div>
     
     <div class="login-button">
      <p>LOGIN BUTTON</p>
     </div>
    
     <div class="create-account-prompt">
      <p>Don't have an account? Create an account.</p>
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
.background{
  background-color: rgb(85, 180, 243);
}
.container {
  
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 100px;
  height: 80vh;
  border-radius:10%;
  border-color: black;
}
.login-box{
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border-color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-headline{
  margin: 0;
padding: 0;
  font-weight:900;
  font-family:Georgia, 'Times New Roman', Times, serif;
  color: brown;

}  
.login-headline-extra{
  font-weight: bolder;
  margin-bottom: 50px;
  padding-bottom: 50px;
}  
.login-form{
  margin-top: 50px;
}
.login-button{
  margin-top: 10px;
}
.create-account-prompt{
  font-size: small;
}

</style>