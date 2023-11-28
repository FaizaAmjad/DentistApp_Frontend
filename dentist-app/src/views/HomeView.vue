<template>
  <div>
    <!--:key" is here to force the calendar to update to show changes without page reload since no connection to backend-->
    <Qalendar :key="calendarKey" :events="events" :config="config" @event-was-dragged="updateEditedEvent"
      @event-was-resized="updateEditedEvent" @delete-event="deleteEvent" @edit-event="storeEvent" />

    <b-modal v-model="showModal" id="modal-1" title="Edit event" @ok="editEvent">
      <p>Change the setting you wish to alter</p>
      <b-row>
        <b-col>
          <b-dropdown id="generalType" text="General type of appointment" block variant="primary" lazy>
            <b-dropdown-item-button @click="changeEventType('Cleaning')">Cleaning</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeEventType('Checkup')">Checkup</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeEventType('Emergency appointment')">Emergency appointment
            </b-dropdown-item-button>
            <b-dropdown-item-button @click="changeEventType('Root canal')">Root canal</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeEventType('Other')">Other</b-dropdown-item-button>
          </b-dropdown>
        </b-col>
        <b-col>
          <b-dropdown id="colorSelect" text="Color" block variant="primary" lazy>
            <b-dropdown-item-button @click="changeColorScheme('lightBlue')">Light Blue </b-dropdown-item-button>
            <b-dropdown-item-button @click="changeColorScheme('darkBlue')">Dark Blue</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeColorScheme('lightGreen')">Light Green</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeColorScheme('darkGreen')">Dark Green</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeColorScheme('yellow')">Yellow</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeColorScheme('pink')">Pink</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeColorScheme('burgundy')">Burgundy</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeColorScheme('red')">Red</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeColorScheme('purple')">Purple</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeColorScheme('black')">Black</b-dropdown-item-button>
          </b-dropdown>
        </b-col>
      </b-row>
      <b-form-input placeholder="Description" id="eventDescription" v-model="this.newEvent.description"
        type="text"></b-form-input>
      <!--
      <b-row>
        <b-col>
          <label for="startDate">Start date</label>
          <b-form-datepicker id="startDate" v-model="value" class="mb-2"></b-form-datepicker>
        </b-col>
        <b-col>
          <label for="endDate">End date</label>
          <b-form-datepicker class="datepicker" id="endDate" v-model="value"></b-form-datepicker>
        </b-col>
      </b-row>-->
    </b-modal>
  </div>
</template>

<script>
import { Qalendar } from "qalendar"

export default {
  mounted() {
    document.body.style.backgroundColor = '#989898',
      this.populateEvents()
  },
  components: {
    Qalendar,
  },
  data() {
    return {
      // Qalendar documentation: https://tomosterlund.github.io/qalendar/guide.html

      config: {
        week: {
          startsOn: 'monday',
          nDays: 5,
        },
        month: {
          showTrailingAndLeadingDates: false,
        },
        locale: 'en-US',
        style: {
          fontFamily: 'Nunito',
          colorSchemes: {
            lightBlue: {
              color: "#fff",
              backgroundColor: "#66fdff",
            },
            darkBlue: {
              color: "#fff",
              backgroundColor: "#0500ba",
            },
            lightGreen: {
              color: "#fff",
              backgroundColor: "#1fe800",
            },
            darkGreen: {
              color: "#fff",
              backgroundColor: "#0e6700",
            },
            yellow: {
              color: "#fff",
              backgroundColor: "#ffd966",
            },
            pink: {
              color: "#fff",
              backgroundColor: "#c90076",
            },
            burgundy: {
              color: "#fff",
              backgroundColor: "#800020",
            },
            red: {
              color: "#fff",
              backgroundColor: "#FF0000",
            },
            purple: {
              color: "#fff",
              backgroundColor: "#800080",
            },
            black: {
              color: "#fff",
              backgroundColor: "#000000"
            }
          }
        },
        defaultMode: 'week',
        isSilent: true,
        showCurrentTime: true,
        dayBoundaries: {
          start: 8,
          end: 17,
        }
      },
      events: [],
      showModal: false,
      newEvent: {
        title: " ",
        with: " ",
        time: { start: " ", end: " " },
        colorScheme: " ",
        isEditable: true,
        id: " ",
        description: " "
      },
      calendarKey: 0
    }
  },
  methods: {
    updateEditedEvent(updatedEvent) {

      const index = this.events.findIndex(event => event.id === updatedEvent.id)
      if (index !== -1) {
        this.events.splice(index, 1, updatedEvent)
        this.calendarKey += 1
      }

      // TODO: send updated events back to DB
    },
    populateEvents() {

      this.events = [
        {
          title: "Root Canal",
          with: "Jane Doe",
          time: { start: "2023-11-28 12:05", end: "2023-11-28 13:35" },
          colorScheme: "lightBlue",
          isEditable: true,
          id: "10f",
          description: "Patient doesn't want their teeth"
        },
        {
          title: "General checkup",
          with: "Jack Sparrow",
          time: { start: "2023-11-29 10:05", end: "2023-11-29 12:35" },
          colorScheme: "darkBlue",
          isEditable: true,
          id: "11f",
          description: "Patient wants more teeth"
        }
      ]
      /*
      ^^^ replace with API call to populate events, possibly with for loop to populate events in the correct format
      // send notification to patient

      for (appointment in appointments) {
      title: General type of appointment (Cleaning, root canal, etc.)so appointment.type,
      with: appointment.patient.name,
      time: { start: appointment.startTime, end: appointment.endTime },
      color: "green", <-- possibly dependent on general type of appointment
      isEditable: true,
      id: string of ObjectId of document in Schema?,
      description: appointment.issue
      }

      Assumed format 

      appointment: {
        type:
        patient: {
          name:
        }
        startTime:
        endTime:
        issue:
      }
      */
    },
    deleteEvent(eventId) {
      const index = this.events.findIndex(event => event.id === eventId)
      if (index !== -1) {
        this.events.splice(index, 1)
        this.calendarKey += 1
      }
      // TODO: send updated events back to DB
      // send notification to patient
    },
    editEvent() {
      const oldEvent = this.newEvent
      this.deleteEvent(oldEvent.id)
      /*
      // not allowing the changing of patient here
      // same id so same document in the DB

      // date and time is the same now but should be able to be 
      // changed later after figuring out how to get datepick to show in the modal
      // clear newEvent after saving to DB
      // send notification to patient
      */
      this.events.push(this.newEvent)
      this.newEvent = {
        title: " ",
        with: " ",
        time: { start: " ", end: " " },
        colorScheme: " ",
        isEditable: true,
        id: " ",
        description: " "
      }
      this.calendarKey += 1
    },
    storeEvent(oldEventId) {
      try {
        this.showModal = !this.showModal
        this.newEvent = this.events.find((event) => event.id === oldEventId)
      } catch (err) {
        console.log(err)
      }

    },
    changeEventType(type) {
      this.newEvent.title = type;
    },
    changeColorScheme(colorScheme) {
      this.newEvent.colorScheme = colorScheme;
    },
  }

}
</script>
<style>
@import "qalendar/dist/style.css";
</style>
