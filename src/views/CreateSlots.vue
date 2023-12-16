<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="auth-wrapper">
        <div class="auth-inner">
          <div>
            <Error v-if="error" :error="error"></Error>
            <h3>Welcome to Dentist page!</h3>
            <p>Create slots for reservations</p>
            <hr />
          </div>
         
          <form @submit.prevent="onCreate()">
            <div class="form-group">
              <label>Start time</label>
              <input
                type="datetime-local"
                class="form-control"
                prepend-icon="ni ni-hat-3"
                placeholder="Start date"
                v-model.trim="form.start"
                required
              />
            </div>

            <div class="form-group">
              <label>End time </label>
              <input
                type="datetime-local"
                class="form-control"
                placeholder="End Date"
                v-model.trim="form.end"
                required
              />
            </div>

            <div class="form-group">
              <label>Duration</label>
              <input
                type="number"
                class="form-control"
                placeholder="minutes"
                v-model.trim="form.duration"
                required
              />
            </div>

           


            
     
            
             
            
            <!-- <b-form-group label="Clinic" label-for="clinicDropdown" label-cols-md="2">
            <b-dropdown id="clinicDropdown" :text="selectedClinic?selectedClinic.clinicName: 'Select clinic' " block variant="primary" lazy>
              <b-dropdown-item-button v-for="clinic in allClinics" :key="clinic.id" @click="selectedClinic = clinic">{{ clinic.clinicName }}</b-dropdown-item-button>
            </b-dropdown>
          </b-form-group> -->

      
          
            <div class="my-3">
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Error from '../components/Error.vue'
import { getDentistInfo } from '../apis/dentists'
import { createSlots } from '../apis/booking'
export default {
  name: 'create-slots-view ',
  components: {
    Error
  },
  
  async mounted(){
    this.dentistDetails=getDentistInfo()
       
     },
  data() {
    return {
      form: {
        start:"",
        end:"",
        duration:0
        
      },
      error: '',
      dentistDetails:null,
      
    }
  },
  methods: {
    async onCreate() {
      try {
        //   
        // TODO create a field for the theme on the signup form
        const slot = await createSlots(
          this.form.start,
          this.form.end,
          this.form.duration,
          this.dentistDetails._id,
          this.dentistDetails.clinic_id
        )

        this.$router.push('/')
      
      } catch (error) {
        this.error = 'En error occurred.'
      }
    }
  }
}
</script>
<style scoped>
button {
  background-color: var(--bs-success);
  color: var(--button-letter);
  
  
}
</style>
