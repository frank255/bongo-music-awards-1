<template>
  <q-layout view="hHh LpR fFf" class="bg-images">
    <NavComponent />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import NavComponent from "src/components/NavComponent.vue";
</script>
<style>
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
  opacity: 0.2; /* Change the opacity value as desired */
}
</style>
