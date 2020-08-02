<template>
  <div>
    <b-table striped hover :items="students">
      <template v-slot:cell(name)="data">
        <router-link :to="`single/students/${data.index}`">{{ data.value }}</router-link>
      </template>    
    </b-table>
    <p>Count of Tehran Teachers: {{tehranStudents.length}}</p>
  </div>
</template>

<script>
// import students from '@/data/students.js'
import { mapState, mapGetters } from 'vuex'

export default {
    data() {
        return {
            // items: students
        }
    },
    computed: {
      ...mapState([
        'students'
      ]),
      ...mapGetters([
        'tehranStudents'
      ])
    }
}
</script>