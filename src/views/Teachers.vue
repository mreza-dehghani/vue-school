<template>
  <div>
    <b-table striped hover :items="teachers">
      <template v-slot:cell(name)="data">
        <router-link :to="`single/teachers/${data.index}`">{{ data.value }}</router-link>
      </template>    
    </b-table>
    <p>Count of Tehran Teachers: {{tehranTeachers.length}}</p>
  </div>
</template>

<script>
// import teachers from '@/data/teachers.js'
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'teachers'
    ]),
    ...mapGetters([
      'tehranTeachers'
    ])
  }
}
</script>