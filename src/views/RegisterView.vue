<template>
  <div class="background">
    <div class="container">

      <div class="registration-box">
        <Error v-if="error" :error="error"></Error>
        <h1>Register</h1>
        <h2>Enter your details below to get started.</h2>
        
       

        <b-form @submit="onRegister()">
          <b-form-group label="First Name" label-for="dentist-Fname" label-cols-md="2">
            <b-form-input id="dentist-Fname" v-model="Fname" type="text" placeholder="Jane" trim required></b-form-input>
          </b-form-group>

          <b-form-group label="Last Name" label-for="dentist-Lname" label-cols-md="2">
            <b-form-input id="dentist-Lname" v-model="Lname" type="text" placeholder="Doe" trim required></b-form-input>
          </b-form-group>

          <b-form-group label="socialNumber" label-for="dentist-socialNumber" label-cols-md="2">
            <b-form-input id="dentist-socialNumber" v-model="socialNumber" type="text" placeholder="123456789-1234" trim required></b-form-input>
          </b-form-group>

          <b-form-group label="Email Address" label-for="dentist-email" label-cols-md="2">
            <b-form-input id="dentist-email" v-model="emailAddress" type="email" placeholder="Jane.doe@gmail.com" trim required></b-form-input>
          </b-form-group>

          <b-form-group label="Password" label-for="password" label-cols-md="2">
            <b-form-input id="password" v-model="password" type="password" trim required></b-form-input>
          </b-form-group>

          <b-form-group label="Confirm Password" label-for="repeatedPassword" label-cols-md="2">
            <b-form-input id="repeatedPassword" v-model="repeatedPassword" type="password" trim required></b-form-input>
          </b-form-group>

         <!--  <b-form-group label="Clinic" label-for="clinicDropdown" label-cols-md="2">
            <b-dropdown id="clinicDropdown" text="Select clinic" block variant="primary" lazy>
              <b-dropdown-item-button v-for="clinic in clinics" :key="allClinics" @click="clinic = clinic">{{ clinic.name }}</b-dropdown-item-button>
            </b-dropdown>
          </b-form-group>  -->

          <b-button  type="submit" class="btn btn-primary">Register</b-button>
        </b-form> 

      </div>

    </div>
  </div>
</template>

<script>
import Error from '../components/Error.vue'
import { createDentist } from '../apis/dentists'
import { getClinics } from '../apis/booking'
export default {
  mounted() {
    document.body.style.backgroundColor = '#989898'
    
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      socialNumber: '',
      emailAddress: '',
      password: '',
      repeatedPassword: '',
      /* clinic: null, // type may be incorrect.
      clinics: [], */
    }
  },
  computed:{
    notValidInput(){
      return !(this.form.firstName && this.form.socialNumber && this.form.emailAddress && this.form.password && this.form.repeatedPassword)
    }
  },
  methods: {
    validPassword(){
     if (this.form.password == this.form.repeatedPassword){
      return true
     } else {
      alert('Passwords need to match')
      this.form.password = ''
      this.form.repeatedPassword = ''
      return false}
    },
    validateEmail(){
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if(emailPattern.test(this.form.emailAddress)){
        return true
      } else {  
        alert('Invalid email')
        this.emailAddress = ''
        return false }
    },
    async onRegister() {
      if(this.validPassword() && this.validateEmail()){
        try {
          const dentist = await createDentist(
          this.form.firstName,
          this.form.lastName,
          this.form.socialNumber,
          this.form.email,
          this.form.password  
        )
        const allClinics = await getClinics()
      // Check the status code to determine if the registration was successful
      /* if (response.status === 201) {
        console.log('Registration successful');
        alert('Registered');
      } else {
        console.error('Registration failed with status:', response.status);
        alert('Registration unsuccessful');
      } */
    } catch (error) {
      console.error('An error occurred during registration:', error);
      alert('Registration unsuccessful');
    }
      }      
      
     
    }, 
   
  }
  
}
</script>


</style>
