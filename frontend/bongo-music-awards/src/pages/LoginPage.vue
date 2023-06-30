<template>
  <q-page class="bg-grey-2 bg-images" padding>
    <div class="full-width q-pa-md">
      <q-btn
        label="home"
        class="text-capitalize"
        to="/"
        icon="arrow_back"
        flat
        color="primary"
      />
    </div>
    <div class="row justify-center items-center" style="height: 85vh">
      <q-card class="q-pa-lg col-xs-12 col-sm-12 col-md-5 column items-center">
        <div
          class="absolute bg-white flex justify-center items-center"
          style="top: -92px; width: 125px; height: 125px; border-radius: 50%"
        >
          <q-img
            spinner-color="primary"
            src="~assets/logo.png"
            style="height: 50%; width: 90%; border-radius: 40%"
          />
        </div>
        <div class="full-width">
          <q-input
            v-model="email"
            class="q-ma-md"
            dense
            label="Email"
            outlined
          />
          <q-input
            v-model="password"
            class="q-ma-md"
            dense
            label="Password"
            :type="isPwd ? 'password' : 'text'"
            outlined
          >
            <template #append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div class="">
          Forgot password?
          <span class="text-blue cursor-pointer" @click="forgotPassword"
            >Reset Here</span
          >
        </div>
        <q-btn color="primary" @click="loginUser()" label="Login"> </q-btn>
        <div class="text-subtitle1 q-mt-sm">
          Don't have an account?
          <span class="text-blue cursor-pointer" @click="register"
            >Register Here</span
          >
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "stores/auth";
import { useRouter } from "vue-router";
import { api } from "src/boot/axios";

const useAuth = useAuthStore();

const isPwd = ref(true);
const router = useRouter();
const email = ref("");
const password = ref("");
const loginUser = async () => {
  const { data } = await api.post("/login", {
    email: email.value,
    password: password.value,
  });
  if (sessionStorage.getItem("token") === null) {
    useAuth.setUserData(data);
  } else {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
  }
  window.location.reload();
};
const register = () => {
  router.push({ name: "Register" });
};
const forgotPassword = () => {
  router.push({ name: "Forgot-password" });
};
/*
 *
 * Password::min(8)->mixedCase()->numbers()->symbols()
 * */
onMounted(() => {
});
</script>
<style></style>
