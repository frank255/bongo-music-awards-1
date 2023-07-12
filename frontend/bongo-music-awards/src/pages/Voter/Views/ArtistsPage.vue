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
    <div
      :class="
        $q.platform.is.desktop
          ? 'flex justify-center q-gutter-x-xl'
          : 'flex justify-center'
      "
    >
      <q-card
        v-for="(artist, i) in artistList"
        :key="i"
        class="q-mt-xl bg-grey-2"
        :style="
          $q.platform.is.desktop
            ? 'min-width: 200px;height:200px; cursor: pointer'
            : 'width: 300px;height:200px; cursor: pointer'
        "
        @click="artistDetails(artist.user_id)"
      >
        <q-card-section class="flex justify-center">
          <q-avatar size="90px">
            <img :src="profile_url + artist.profile_image" />
          </q-avatar>
        </q-card-section>
        <q-card-section class="q-px-sm">
          <div class="text-h6 text-center text-weight-bold">
            {{ artist.name }}
          </div>
          <div class="text-subtitle1 text-center text-grey-8">
            <template v-if="artist.genres">
              <!-- <span
                v-for="genre in JSON.parse(artist.genres)"
                :key="genre"
                >{{ genre }}</span
              > -->
              {{ JSON.parse(artist.genres).join(", ") }}
            </template>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "src/boot/axios";
import { useRouter } from "vue-router";
const artistList = ref([]);
const profile_url = process.env.API_URL;
const getartists = async () => {
  try {
    const response = await api.get("/artist_list");
    artistList.value = response.data;
  } catch (error) {}
};
const router = useRouter();
const artistDetails = (user_id) => {
  console.log(user_id);
  router.push(`/artists/${user_id}`);
};
onMounted(() => {
  getartists();
});
</script>

<style lang="scss" scoped></style>
