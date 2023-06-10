<template>
  <q-layout view="hHh LpR fFf">
    <NavComponent />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import NavComponent from "src/components/NavComponent.vue";
</script>
