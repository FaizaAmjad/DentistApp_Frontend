<template>
  <div>
    <div class="register-text">
      <p style="font-size: x-large">Register</p>
      <p style="font-size: larger">Enter your details below to get started.</p>
    </div>
    <div class="register">
      <b-col  lg="8">
        <b-row class="justify-content-center">
          <b-form-group id="input-group-1"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          label="Name"
          label-for="dentist-name">
            <b-form-input id="dentist-name" v-model="name" type="text" placeholder="Jane Doe" trim required></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-1"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          label="Email Address"
          label-for="dentist-email">
            <b-form-input id="dentist-email" v-model="emailAddress" type="email" placeholder="Jane.doe@gmail.com" trim required></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-1"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          label="Password"
          label-for="password">
            <b-form-input id="password" v-model="password" type="password" trim required></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-1"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          label="Confirm Password"
          label-for="repeatedPassword">
            <b-form-input id="repeatedPassword" v-model="repeatedPassword" type="password" trim required></b-form-input>
        </b-form-group>  

        <b-form-group id="input-group-1"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          label="Clinc"
          label-for="clinicDropdown">
            <b-dropdown id="clinicDropdown" text="Select clinic" block variant="primary" lazy>
              <b-dropdown-item-button v-for="clinic in this.clinics" :key="clinic.id" @click="this.clinic = clinic">{{clinic.name}}</b-dropdown-item-button>
              <!--currently lacking get clinics function because of lack of connection to database-->
            </b-dropdown>
        </b-form-group> 
        </b-row> 
      </b-col>
      <b-row class="justify-content-center mt-3">
          <b-col>
            <b-button :disabled="notValidInput" type="submit" variant="primary" @click="onRegister">Register</b-button>
          </b-col>
        </b-row>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.style.backgroundColor = '#989898'
  },
  data() {
    return {
      name: '',
      emailAddress: '',
      password: '',
      repeatedPassword: '',
      clinic: null, // type may be incorrect.
      clinics: []
    }
  },
  computed:{
    notValidInput(){
      return !(this.name && this.emailAddress && this.password && this.repeatedPassword)
    }
  },
  methods: {
    onRegister() {
      if(this.validPassword && this.validateEmail()){
        // replace with hashing password and post function and this.$router.push('abc')
        alert('Registered')
      } else {
        this.name = ''
        this.emailAddress = ''
        this.password = ''
        this.repeatedPassword = ''
      }
      
      
    }, validPassword(){
    if (this.password == this.repeatedPassword){
      return true
    } else {
      alert('Passwords need to match')
      return false
    }
  },
    validateEmail(){
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if(emailPattern.test(this.emailAddress)){
        return true
      } else {
        alert('Invalid email')
        return false
      }
    },
    alertInput(){
      if (!this.name){
        alert('Name cannot be empty')
      }
    }
  }
  // TODO: get all clinics function
}
</script>


<style>
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3%
}

.register-text {
  text-align: center;
  padding-top: 2%
}

.form-container {
  display: flex;
  flex-direction: column;
}

.form-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.format {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  min-height: 100vh; 
  background-color: #989898;
}
</style>
