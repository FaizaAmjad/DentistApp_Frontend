<template>
  <div>
    <WebHeaderVue/>
    <div class="format">
      <div class="register">
        <div class="form-container">
          <div class="form-row">
            <label for="dentist-fullname">Name</label>
            <input type="text" id="dentist-fullname" class="form-control" v-model="name" required>
          </div>
          <div class="form-row">
            <label for="email-address">Email address</label>
            <input type="email" id="email-address" class="form-control" v-model="emailAddress" required>
          </div>
          <div class="form-row">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model="password" required>
          </div>
          <div class="form-row">
            <label for="repeat-password"> Confirm Password</label>
            <input type="password" id="repeat-password" class="form-control" v-model="repeatedPassword" required>
          </div>
          <div class="form-row">
            <label for="clinic"> Clinic</label>
            <Dropdown v-model="clinic" :options="clinics" optionLabel="name" placeholder="Select your clinic" id="clinic" required/>
            <!-- Broken because lacked server endpoints during development -->
          </div>
          <div class="form-row">
            <button type="submit" class="btn btn-primary" @click="onRegister">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebHeaderVue from '../components/WebHeader.vue'
export default {
  components: {
    WebHeaderVue
  },
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
  methods: {
    onRegister() {
      if(this.password !== this.repeatedPassword) {
        this.name = ''
        this.emailAddress = ''
        this.password = ''
        this.repeatedPassword = ''
      } // TODO: else hash password and post function and this.$router.push('abc')
    }
  }
  // TODO: get all clinics function
}
</script>


<style>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
