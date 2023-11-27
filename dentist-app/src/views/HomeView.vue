<template>
  <div>
    <h1>
      Welcome dentist!
    </h1>
    <!--:key="events.length" is here to force the calendar to update to show changes without page reload since to connection to backend-->
    <Qalendar 
    :key="events.length" 
    :events="events" 
    :config="config" 
    @event-was-dragged="updateEditedEvent"
    @event-was-resized="updateEditedEvent" 
    @delete-event="deleteEvent" />
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
          fontFamily: 'Nunito'
        },
        defaultMode: 'week',
        isSilent: true,
        showCurrentTime: true,
        dayBoundaries: {
          start: 8,
          end: 17,
        }
      },
      events: []
    }
  },
  methods: {
    updateEditedEvent(updatedEvent) {

      const index = this.events.findIndex(event => event.id === updatedEvent.id)
      if (index !== -1) {
        this.events.splice(index, 1, updatedEvent)
        alert(`Event was dragged and updated: ${JSON.stringify(updatedEvent)}`)
      }
      // TODO: send updated events back to DB
    },
    populateEvents() {

      this.events = [
        {
          title: "Root Canal",
          with: "Jane Doe",
          time: { start: "2023-11-28 12:05", end: "2023-11-28 13:35" },
          color: "yellow",
          isEditable: true,
          id: "10f",
          description: "Patient doesn't want their teeth"
        },
        {
          title: "General checkup",
          with: "Jack Sparrow",
          time: { start: "2023-11-29 10:05", end: "2023-11-29 12:35" },
          color: "blue",
          isEditable: true,
          id: "11f",
          description: "Patient wants more teeth"
        }
      ]
      /*
      ^^^ replace with API call to populate events, possibly with for loop to populate events in the correct format

      for (appointment in appointments) {
      title: General type of appointment (Cleaning, root canal, etc.)so appointment.type,
      with: appointment.patient.name,
      time: { start: appointment.startTime, end: appointment.endTime },
      color: "green", <-- possibly dependent on general type of appointment
      isEditable: true,
      id: UUID,
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
        alert(`Event was deleted: ${JSON.stringify(eventId)}`)
        alert(`${JSON.stringify(this.events)}`)
      }
      // TODO: send updated events back to DB
    }
  }

}
</script>
<style>
@import "qalendar/dist/style.css";
</style>
