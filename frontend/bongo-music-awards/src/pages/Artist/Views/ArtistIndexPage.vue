<template>
  <q-page padding>
    <div class="full-width">
      <q-carousel height="300px" swipeable animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
          transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true">
          <q-carousel-slide :name="1" img-src="http://localhost:9000/src/assets/vote1copy.png" />
          <q-carousel-slide :name="2" img-src="http://localhost:9000/src/assets/vote1.png" />
        </q-carousel>
    </div>
    <div class="row q-gutter-sm q-mt-xl  justify-between">
    <EventsCard class="col-xs-12 col-sm-6 col-md-2"/>
    <AlbumsCard class="col-xs-12 col-sm-6 col-md-2"/>
    <SinglesCard class="col-xs-12 col-sm-6 col-md-2"/>
    <NominationsCard class="col-xs-12 col-sm-6 col-md-2"/>
    </div>
  </q-page>
</template>

<script setup>
import AlbumsCard from "src/pages/Artist/components/AlbumsCard.vue";
import EventsCard from "src/pages/Artist/components/EventsCard.vue";
import SinglesCard from "src/pages/Artist/components/SinglesCard.vue";
import NominationsCard from "src/pages/Artist/components/NominationsCard.vue";
import { ref } from "vue";
const slide = ref(1);
const autoplay = ref(true);
</script>

<style lang="scss" scoped></style>
