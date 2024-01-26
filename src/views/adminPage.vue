<template>
    <div class="row" id="specialPage">
      <div class="col-md-6 offset-md-3">
        <div class="auth-wrapper">
          <div class="auth-inner">
            <div>
              <Error v-if="error" :error="error"></Error>
              <div v-if="successMessage" class="alert alert-success"> {{ successMessage }} </div>
              <h3>Emergency Booking System Settings</h3>
              <small>Please modify the setting of the emergency booking system. You as an admin may change the barrier settings of the system.</small>
              <hr />
            </div>
          </div>
        </div>
        <div class="my-5"></div>
        <div class="reservations">
        <div>
        <h6>Change barrier settings</h6>
        <b-row class="my-1">
            <b-col sm="3">
            <label for="newLowInput">Low:</label>
            </b-col>
        <b-col sm="9">
            <b-form-input id="newLowInput" type="number" v-model="newLow"></b-form-input>
        </b-col>
        </b-row>
    <b-row class="my-1">
      <b-col sm="3">
        <label for="newMediumInput">Medium:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="newMediumInput" type="number" v-model="newMedium"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="3">
        <label for="newHighInput">High:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="newHighInput" type="number" v-model="newHigh"></b-form-input>
      </b-col>
    </b-row>
    <b-button @click="sendData">Save Settings</b-button>
  </div>
  
        </div>
        <div class="reservations">
    <div>
      <div class="my-5"></div>
      <h6>Change availability setting</h6>
      <b-row class="my-1 align-items-center">
        <b-col sm="3">
          <label for="newAvailability">Availability:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="newAvailability"
            type="number"
            v-model="newAvailability"
            :min="0"
            :max="1"
            step="0.01"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-button @click="sendAvailability">Save Settings</b-button>
    </div>
  </div>
        
      </div>
    </div>
  </template>
  
  <script>
  import Error from '../components/Error.vue'
  import {
    modifyBarrierScore,
    modifyAvailability
  } from '../apis/emergencyBooking'
  export default {
    name: 'create-slots-view ',
    components: {
      Error
    },

    data() {
      return {
        error: '',
        successMessage: '',
        newLow: 0,
        newMedium: 0,
        newHigh: 0,
        newAvailability: 0,
      }
    },
    methods: {
    async sendData() {
      try {
        const response = await modifyBarrierScore(this.newLow, this.newMedium, this.newHigh);
        console.log(response);
      } catch (error) {
        console.error('Error sending data:', error);
      }
    },

    async sendAvailability() {
        try {
            const response = await modifyAvailability(this.newAvailability);
            console.log(response)
        } catch (error) {
            console.error('Error sending data:', error)
        }
    }
  },
  }
  </script>
  <style scoped>
  button {
    background-color: var(--bs-success);
    color: var(--button-letter);
  }
  
  #specialPage {
    height: 200%;
    background-color: rgba(74, 100, 161, 0.903);
  }
  
  .reservations {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .slots-container {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 15px;
    margin-top: 20px;
  }
  
  .slot-item {
    margin-bottom: 10px;
  }
  </style>
  