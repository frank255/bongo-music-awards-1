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
            v-model="name"
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
            v-model="email"
          />
          <q-input
            label="Password"
            class="q-ma-lg"
            outlined
            dense
            type="password"
            transition-show="flip-up"
            transition-hide="scale"
            v-model="password"
          />
          <q-input
            label="Repeat Password"
            class="q-ma-lg"
            outlined
            dense
            type="password"
            transition-show="flip-up"
            transition-hide="scale"
            v-model="password_confirmation"/>

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

<script setup>
import {api} from "boot/axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("")
const name = ref("")
const password = ref("")
const password_confirmation = ref("")
const router = useRouter();
const errors = ref([])

const register = async () => {
  const response = await api.post('/register', {
    email: email.value,
    name: name.value,
    password: password.value,
    password_confirmation: password_confirmation.value
  })
  router.push({ name: "Login" });
  console.log(response.data)
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
