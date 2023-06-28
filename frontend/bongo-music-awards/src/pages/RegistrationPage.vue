<template>
  <q-page padding class="bg-images">
    <div class="full-width q-pa-md">
      <q-btn
        label="home"
        class="text-capitalize"
        flat
        to="/"
        icon="arrow_back"
        color="primary"
      />
    </div>
    <div
      :class="
        $q.platform.is.desktop
          ? 'flex justify-center text-h4'
          : 'flex justify-center text-h5'
      "
    >
      Artists Registration Form
    </div>
    <div class="flex justify-center">
      <q-form @submit.prevent="register()" style="width: 80%">
        <div>
          <q-input
            label="Full Name"
            class="q-ma-lg"
            outlined
            dense
            transition-show="flip-up"
            transition-hide="scale"
            v-model="form.name"
            :options="options"
          />
<!--          <q-input
            label="Enter Phone Number"
            class="q-ma-lg"
            outlined
            dense
            transition-show="flip-up"
            transition-hide="scale"
            v-model="form.phone_number"
            :options="options"
          />-->
          <q-input
            label="Enter Email"
            class="q-ma-lg"
            outlined
            dense
            transition-show="flip-up"
            transition-hide="scale"
            v-model="form.email"
            :options="options"
          />
          <q-input
            label="Password"
            class="q-ma-lg"
            outlined
            dense
            type="password"
            transition-show="flip-up"
            transition-hide="scale"
            v-model="form.password"
            :options="options"
          />
          <q-input
            label="Repeat Password"
            class="q-ma-lg"
            outlined
            dense
            type="password"
            transition-show="flip-up"
            transition-hide="scale"
            v-model="form.password_confirmation"
            :options="options"/>
          <div class="flex justify-end q-ma-lg">
            <q-btn
              class="text-capitalize"
              color="primary"
              label="Register"
              type="submit"
              @click.prevent="register()"
            />
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import {api} from "boot/axios";

export default {
  data(){
    return {
      form: {
        name: '',
//        phone_number: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },

  methods: {
    register(){
      //console.log(this.form)
      //Implementing loader, or progress indicator here
      return api.post('/register',this.form)
    }
  }
}



</script>

<style lang="scss" scoped>
.bg-images {
  position: relative;
}
.bg-images::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/background2.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.1; /* Change the opacity value as desired */
}
</style>
