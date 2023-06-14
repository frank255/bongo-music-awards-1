<template>
  <q-page padding>
    <div class="flex justify-center">
      <div class="full-width">
        <q-carousel height="300px" swipeable animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
          transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true">
          <q-carousel-slide :name="1" img-src="~assets/vote1copy.png" />
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const slide = ref(1);
const autoplay = ref(true);
</script>

<style lang="scss" scoped></style>
