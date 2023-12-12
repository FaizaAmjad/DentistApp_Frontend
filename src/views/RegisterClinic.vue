<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="auth-wrapper">
        <div class="auth-inner">
          <div>
            <Error v-if="error" :error="error"></Error>
            <h3>Add a Clinic</h3>
            <p>Welcome to Clinic registration page!</p>
            <hr />
          </div>
         
          <form @submit.prevent="onSignUp()">
            <div class="form-group">
              <label>¨Clinic Name</label>
              <input
                type="text"
                class="form-control"
                prepend-icon="ni ni-hat-3"
                placeholder="Tooth Centre"
                v-model.trim="form.clinicName"
                required
              />
            </div>

            <div class="form-group">
              <label>Address</label>
              <input
                type="Address"
                class="form-control"
                placeholder="Lindholmen 88, 41755"
                v-model.trim="form.address"
                required
              />
            </div>
             
          
            <div class="my-3">
              <button type="submit" class="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Error from '../components/Error.vue'
import { createClinics } from '../apis/booking'
export default {
  name: 'registerClinic',
  components: {
    Error
  },
  data() {
    return {
      form: {
        clinicName: '',
        address: ''        
      },
      error: ''
    }
  },
  methods: {
    async onRegister() {
      try {
        //   console.log(' submitted ' + this.form.email)
        // TODO create a field for the theme on the signup form
          const clinic = await createClinic(
          this.form.clinicName,
          this.form.address
        )

    
      
      } catch (error) {
        this.error = 'En error occurred.'
      }
    },
  }
}
</script>
<style scoped>
button {
  background-color: var(--button);
  color: var(--button-letter);
  border: none;
}
</style>
