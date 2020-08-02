<template>
  <div>
    <h2>Add new Teacher/Student</h2>
    <p>{{ usersCount }}</p>
    <button @click="toggleForm">Open/Close Insert Form</button>
    <div class="row"  v-if="toggleData">
      <div class="col-12 col-lg-6 mx-auto">
        <b-form @submit.prevent="submitHandler" @reset="onReset">

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="formData.name" required placeholder="Enter name"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Family:" label-for="family">
            <b-form-input id="family" v-model="formData.family" required placeholder="Enter Familyname"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Age:" label-for="age">
            <b-form-input id="age" v-model="formData.age" required placeholder="Enter Age"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Categoury:" label-for="input-3">
            <b-form-select id="input-3" v-model="formData.cat" :options="['teachers', 'students']" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-3" label="Country:" label-for="country">
            <b-form-select id="country" v-model="formData.country" :options="['Iran']" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-3" label="City:" label-for="city">
            <b-form-select id="city" v-model="formData.city" :options="['Tehran', 'Shiraz', 'Mashhad', 'Arak']" required></b-form-select>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>

        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      toggleData: false,
      formData: {
        name:'',
        family: '',
        age: 0,
        cat: null,
        country: null,
        city: null
      }
    };
  },
  computed: {
    ...mapGetters([
      'usersCount'
    ])
  },
  methods: {
    ...mapActions([
      'addUser'
    ]),
    toggleForm() {
      this.toggleData = !this.toggleData;
    },
    submitHandler() {
      const { cat,age, name, family, country, city } = this.formData;
      // const cat = this.formData.cat;
      console.log(cat)
      const payload  = {
        cat,
        user: {
          name,
          family,
          age,
          country,
          city
        }
      };
      this.addUser(payload)
    },
    onReset() {
      console.log('reset')
    }
  }
};
</script>
