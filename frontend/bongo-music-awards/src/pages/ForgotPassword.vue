<template>
  <q-page padding class="column items-center">
    <div class="full-width q-pa-md">
      <q-btn label="home" class="text-capitalize" to="/" icon="arrow_back" flat color="primary" />
    </div>
    <q-form class="q-pa-md column justify-center bg-white" style="width: 400px;" @submit.prevent="onSubmit">
      <q-avatar class="q-mx-auto" size="100px">
        <img src="~assets/logo.png" />
      </q-avatar>
      <p class="text-capitalize q-mx-auto text-h6" to="forgot-password">Enter Registered Email</p>
      <q-input v-model="login_data.email" :error="email_error" :error-message="email_error_message" label="Email" outlined
        dense class="q-mx-lg">
        <template #prepend>
          <q-icon name="mdi-account" />
        </template>
      </q-input>
      <div>
        <div class="q-mx-auto text-center q-my-md">
          <q-btn color="primary" label="Send email" style="width: 150px; font-size: 15px" type="submit" dense />
        </div>

      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue';

const login_data = reactive({
  email: "",
});

let password_error = ref(false);
let password_error_message = ref("");
let email_error = ref(false);
let email_error_message = ref("");
</script>
