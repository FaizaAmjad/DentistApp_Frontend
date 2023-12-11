<template>
  <div>
    <div>
      <!--:key" is here to force the calendar to update to show changes without page reload since no connection to backend-->
      <Qalendar :key="calendarKey" :events="events" :config="config" @event-was-dragged="updateEditedEvent"
        @event-was-resized="updateEditedEvent" @delete-event="deleteEvent" @edit-event="storeEvent" />

    </div>

    <b-modal v-model="showModal" id="modal-1" title="Edit event" @ok="editEvent" @hide="resetModal">
      <p>Change the setting you wish to alter</p>
      <b-row>
        <b-col>
          <b-dropdown id="generalType" text="General type of appointment" block variant="outline-primary" lazy>
            <b-dropdown-item-button @click="changeEventType('Cleaning')">Cleaning</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeEventType('Checkup')">Checkup</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeEventType('Emergency appointment')">Emergency appointment
            </b-dropdown-item-button>
            <b-dropdown-item-button @click="changeEventType('Root canal')">Root canal</b-dropdown-item-button>
            <b-dropdown-item-button @click="changeEventType('Other')">Other</b-dropdown-item-button>
          </b-dropdown>
        </b-col>
        <b-col>
          <b-dropdown id="colorSelect" text="Color" block variant="outline-primary" lazy>
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
      <b-row>
        <b-col style="margin-top: 2%; margin-bottom: 2%">
          <label for="eventDescription">Description</label>
          <b-form-input placeholder="Description" id="eventDescription" v-model="this.newEvent.description"
            type="text"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label for="startDate">Start date and time</label>
          <VueDatePicker id="startDate" v-model="this.newEventTime.startTime" class="mb-2"></VueDatePicker>
        </b-col>
        <b-col>
          <label for="endDate">End date and time</label>
          <VueDatePicker class="datepicker" id="endDate" v-model="this.newEventTime.endTime"></VueDatePicker>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { Qalendar } from "qalendar"
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  mounted() {
    document.body.style.backgroundColor = '#989898',
      this.populateEvents()
    this.registerFreeSlots()
  },
  components: {
    Qalendar,
    VueDatePicker
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
          fontFamily: 'Arial',
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
          start: 7,
          end: 18,
        },
        // remove to enable month view
        disableModes: ["month"],
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
      calendarKey: 0,
      newEventTime: {
        startTime: null,
        endTime: null
      }
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
          time: { start: "2023-11-28 12:00", end: "2023-11-28 13:00" },
          colorScheme: "red",
          isEditable: true,
          id: "10f",
          description: "Patient doesn't want their teeth"
        },
        {
          title: "General checkup",
          with: "Jack Sparrow",
          time: { start: "2023-11-29 10:00", end: "2023-11-29 11:00" },
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
      isEditable: false,
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
      */

      const startTime = this.newEventTime.startTime
      const endTime = this.newEventTime.endTime

      // store old times to use if not changed
      var formattedStartTime = oldEvent.time.start
      var formattedEndTime = oldEvent.time.end

      // format dates if changed
      if (this.newEventTime.startTime !== this.newEvent.time.start) {
        formattedStartTime = this.formatDate(startTime)
      }

      if (this.newEventTime.endTime !== this.newEvent.time.end) {
        formattedEndTime = this.formatDate(endTime)
      }

      // alert(`Formatted Start Time: ${formattedStartTime}\nFormatted End Time: ${formattedEndTime}`)

      // update newEvent with new dates
      this.newEvent.time.start = formattedStartTime
      this.newEvent.time.end = formattedEndTime
      /*

      // ADD ROUNDING SO SLOTS STAY WITHIN HOUR BOUNDARIES AND HAVE DURATION OF 1 HOUR
      // saving to DB
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
        this.newEventTime.startTime = new Date()
        this.newEventTime.endTime = new Date()
        this.showModal = !this.showModal
        this.newEvent = this.events.find((event) => event.id === oldEventId)
        this.newEventTime.startTime = this.newEvent.time.start
        this.newEventTime.endTime = this.newEvent.time.end
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
    resetModal() {
      this.newEvent = {
        title: " ",
        with: " ",
        time: { start: " ", end: " " },
        colorScheme: " ",
        isEditable: false,
        id: " ",
        description: " "
      }
      this.newEventTime = {
        start: { date: "", time: "" },
        end: { date: "", time: "" }
      }
    },
    formatDate(date) {
      const year = date.getFullYear();
      const month = (`0${date.getMonth() + 1}`).slice(-2)
      const day = (`0${date.getDate()}`).slice(-2)
      const hours = (`0${date.getHours()}`).slice(-2)
      const minutes = (`0${date.getMinutes()}`).slice(-2)

      return `${year}-${month}-${day} ${hours}:${minutes}`
    },
    createFreeSlot(date) {
      console.log(`Creating free slot for date: ${date}`)
      // TODO post to backend
    },
    registerFreeSlots() {

      const workHours = 9
      const daysAhead = 30
      const startTime = 8
      /*
      1. order slots in array by date and time
      2. Set i to a[0]
      3. Register free slots till cur === i or cur 
      4. If cur === i then i++ to next slot, else keep registering next slot. If cur > today's date + 30 days, stop.
      */
      // events should be slots
      const events = [{
        title: "Root Canal",
        with: "Jane Doe",
        time: { start: new Date('2023-12-28T12:00:00')},
        colorScheme: "red",
        isEditable: false,
        id: "10f",
        description: "Patient doesn't want their teeth"
      },
      {
        title: "General checkup",
        with: "Jack Sparrow",
        time: { start: new Date('2023-12-29T12:00:00')},
        colorScheme: "darkBlue",
        isEditable: false,
        id: "11f",
        description: "Patient wants more teeth"
      }]

      events.sort((a, b) => {
        const dateA = new Date(a.time.start)
        const dateB = new Date(b.time.start)
        return dateA - dateB;
      })

      var eventIndex = 0
      const currentDate = new Date()

      // finds the nearest coming event
      for (eventIndex; eventIndex < events.length; eventIndex++) {
        const eventStartTime = new Date(events[eventIndex].time.start)
        if (eventStartTime > currentDate) {
          break
        }
      }

      currentDate.setHours(8, 0, 0, 0)
      const endDate = new Date(currentDate.getTime() + daysAhead * 24 * 60 * 60 * 1000) // 30 days ahead

      while (currentDate < endDate) {
        console.log('while executes')
        const dayOfWeek = currentDate.getDay()

        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
          const currentHour = currentDate.getHours()

          if (currentHour >= startTime && currentHour < startTime + workHours) {
            let slotAvailable = true
            let eventFound = false

            // Loop through events for each hour slot
            for (let i = eventIndex; i < events.length; i++) {
              const event = events[i]
              const eventStart = event.time.start;
              const eventEnd = new Date(eventStart.getTime() + 60 * 60 * 1000)

              if (currentDate >= eventStart && currentDate < eventEnd) {
                slotAvailable = false
                eventIndex = i + 1// Move to the next event
                eventFound = true
                console.log('slot unavailable')
                break; // No longer need to check through the rest of the events bc one has already been found
              }
            }

            if (!eventFound && slotAvailable) {
              console.log('free slot')
              this.createFreeSlot(new Date(currentDate))
            }
          }
        }

        currentDate.setTime(currentDate.getTime() + 60 * 60 * 1000)
      }
    }

  }
}
</script>
<style>
@import "qalendar/dist/style.css";
</style>

