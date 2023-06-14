<template>
  <q-page padding>
    <div class="text-h5 text-bold flex justify-center">Bongo Music Awards History</div>
    <div class="flex justify-center">
      <div class="q-mt-md" :style="$q.platform.is.mobile ? 'max-width: 300px;' : 'max-width: 450px;'">
      <q-tabs v-model="tab" outside-arrows mobile-arrows indicator-color="transparent" class="text-white">
        <q-btn size="13px" to="/wekeza" flat class="text-white bg-primary q-mx-xs" label="2022" name="uwekezaji" />
      </q-tabs>
    </div>
    </div>
    <div
      :class="
        $q.platform.is.desktop
          ? 'flex justify-center q-gutter-x-xl'
          : 'flex justify-center'
      "
    >
      <q-card
        v-for="(artist, i) in filteredArtists"
        :key="i"
        class="q-mt-xl"
        :style="
          $q.platform.is.desktop
            ? 'min-width: 200px;height:200px; cursor: pointer'
            : 'width: 300px;height:200px; cursor: pointer;'
        "
      >
          <q-img src="~/src/assets/award2.jpeg"/>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const filteredArtists = [
  {
    id: 1,
    year: "2022",
    image: "https://cdn.quasar.dev/img/avatar1.jpg",
  },
  {
    id: 2,
    year: "2021",
    image: "https://cdn.quasar.dev/img/avatar1.jpg",
  },
  {
    id: 3,
    year: "2019",
    image: "https://cdn.quasar.dev/img/avatar1.jpg",
  },
  {
    id: 4,
    year: "2018",
    image: "https://cdn.quasar.dev/img/avatar1.jpg",
  },
  {
    id: 5,
    year: "2017",
    image: "https://cdn.quasar.dev/img/avatar1.jpg",
  },
];
</script>

<style scoped>

</style>
