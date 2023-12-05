<template>
  <div class="background">
    <div class="container">

      <div class="registration-box">

        <h1>Register</h1>
        <h2>Enter your details below to get started.</h2>

        <b-form @submit="onRegister">
          <b-form-group label="Name" label-for="dentist-name" label-cols-md="2">
            <b-form-input id="dentist-name" v-model="name" type="text" placeholder="Jane Doe" trim required></b-form-input>
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

          <b-form-group label="Clinic" label-for="clinicDropdown" label-cols-md="2">
            <b-dropdown id="clinicDropdown" text="Select clinic" block variant="primary" lazy>
              <b-dropdown-item-button v-for="clinic in clinics" :key="clinic.id" @click="clinic = clinic">{{ clinic.name }}</b-dropdown-item-button>
            </b-dropdown>
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
    this.connectMQTT()
  },
  data() {
    return {
      name: '',
      emailAddress: '',
      password: '',
      repeatedPassword: '',
      clinic: null, // type may be incorrect.
      clinics: [],
      mqttClient: null
    }
  },
  computed:{
    notValidInput(){
      return !(this.name && this.emailAddress && this.password && this.repeatedPassword)
    }
  },
  methods: {
    connectMQTT(){
      // accessing global varibles/libraries defined in main.js
      const mqtt = this.$mqtt
      const broker = this.$broker

      // mkaing broker instance
      this.mqttClient = mqtt.connect(broker)

      //log on connection
      this.mqttClient.on('connect', () => {
        console.log('MQTT connected');
      })

      //log errors
      this.mqttClient.on('error', (err) => {
        console.error('MQTT connection error:', err);
      })
    },
    disconnectMQTT() {
      if (this.mqttClient) {
        this.mqttClient.end()
        console.log('Disconnected from broker')
      }
    },
    onRegister() {
      if(this.validPassword() && this.validateEmail()){
        try {
          const userData = {
            name: this.name,
            email: this.emailAddress,
            password: this.password
            // clinic: this.clinic
          }
          const jsonUserData = JSON.stringify(userData)

          this.mqttClient.publish('user/register-dentist', jsonUserData, { qos: 1})
          /*
          this.name = ''
          this.emailAddress = ''
          this.password = ''
          this.repeatedPassword = ''
          */
          alert('Registered')
          this.disconnectMQTT()
          // change to main page for dentist
          // $this.router.push('abc')
          window.location.reload()
        } catch (error) {
          alert('Register unsuccessful')
        }
        
      }       
      
    }, validPassword(){
    if (this.password == this.repeatedPassword){
      return true
    } else {
      alert('Passwords need to match')
      this.password = ''
      this.repeatedPassword = ''
      return false
    }
  },
    validateEmail(){
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if(emailPattern.test(this.emailAddress)){
        return true
      } else {  
        alert('Invalid email')
        this.emailAddress = ''
        return false
      }
    }
  }
  // TODO: get all clinics function
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
