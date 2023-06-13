<template>
  <q-page padding>
    <div class="flex justify-center">
      <q-input
        outlined
        rounded
        dense
        class="q-mt-xl"
        :style="$q.platform.is.desktop ? 'width: 50%' : 'width: 70%'"
        debounce="300"
        v-model="filter"
        placeholder="Search Artists By Name"
      >
        <template #append>
          <q-icon name="mdi-magnify" />
        </template>
      </q-input>
    </div>
    <div :class="$q.platform.is.desktop ? 'flex justify-center q-gutter-x-xl':'flex justify-center'">
      <q-card
        v-for="(artist, i) in filteredArtists"
        :key="i"
        class="q-mt-xl bg-grey-2"
        :style="$q.platform.is.desktop ? 'min-width: 200px;height:200px': 'width: 300px;height:200px'"
      >
        <q-card-section class="flex justify-center">
          <q-avatar size="90px">
            <q-img :src="artist.image" />
          </q-avatar>
        </q-card-section>
        <q-card-section class="q-px-sm">
          <div class="text-h6 text-center text-weight-bold">
            {{ artist.name }}
          </div>
          <div class="text-subtitle1 text-center text-grey-8">
            {{ artist.category }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
const filteredArtists = [
  {
    name: "John",
    category: "Painter",
    image: "https://cdn.quasar.dev/img/avatar1.jpg"
  },
  {
    name: "Sarah",
    category: "Sculptor",
    image: "https://cdn.quasar.dev/img/avatar1.jpg"
  },
  {
    name: "Mike",
    category: "Photographer",
    image: "https://cdn.quasar.dev/img/avatar1.jpg"
  },
  {
    name: "Emily",
    category: "Mixed Media Artist",
    image: "https://cdn.quasar.dev/img/avatar1.jpg"
  },
   {
    name: "Keyle",
    category: "Mixed Media Artist",
    image: "https://cdn.quasar.dev/img/avatar1.jpg"
  }
];

</script>

<style lang="scss" scoped></style>
