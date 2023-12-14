<template>
    <div class="background">
      <div class="container">
  
        <div class="registration-box">
  
          <h1>Register Clinic</h1>
          <h2>Enter the clinic details below for registration.</h2>
  
          <b-form @submit="onRegister">
            <b-form-group label="Clinic Name" label-for="clinicName" label-cols-md="2">
              <b-form-input id="clinicName" v-model="Fname" type="text" placeholder="Tooth Centre" trim required></b-form-input>
            </b-form-group>
  
            <b-form-group label="Address" label-for="clinicAddress" label-cols-md="2">
              <b-form-input id="clinicAddress" v-model="Address" type="address" placeholder="Lindholmen 88, 41756, Gothenburg" trim required></b-form-input>
            </b-form-group>
  
            <b-button :disabled="notValidInput" type="submit" variant="primary">Register</b-button>
          </b-form>
  
        </div>
  
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
        clinicName: '',
        clinicAddress: '',
      }
    },
    computed:{
      notValidInput(){
        return !(this.clinicName && this.clinicAddress)
      }
    },
    methods: {
      
      validateAddress(){
        if (this.clinicAddress.trim() === '') {
      // Empty address
       alert('Please enter a proper address.');
       return false;
       } else {
       // Valid address
       return true;
       }
      },
      async onRegister() {
        if(this.validAddress() ){
          try {
            const response = await axios.post('http://localhost:3000/api/v1/clinics', {
                  clinicName: this.clinicName,
                  clinicAddress: this.clinicAddress,
                  
            })
        // Check the status code to determine if the registration was successful
        if (response.status === 201) {
          console.log('Registration successful');
          alert('Registered');
        } else {
          console.error('Registration failed with status:', response.status);
          alert('Registration unsuccessful');
        }
      } catch (error) {
        console.error('An error occurred during registration:', error);
        alert('Registration unsuccessful');
      }
        }       
      }, 
    }
  }
  </script>
  
  
  <style>
  
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
  .registration-box {
    background-color: white;
    text-align: center;
    margin: center;
    font-style: initial;
    font-weight: 600;
    padding-block: 0;
    padding: 20%;
    border-width: 10px;
    border-style: initial;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    .registration-box {
      padding: 5%;
    }
  }
  
  </style>
  