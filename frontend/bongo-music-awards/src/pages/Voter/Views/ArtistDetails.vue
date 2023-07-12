<template>
  <q-page padding>
    <q-card>
      <div class="shaddow q-mt-lg q-pa-sm column items-center relative">
        <div class="card bg-grey-2 flex justify-center items-center">
          <q-avatar size="90px" class="avatar">
            <img :src="profile_url + artistProfile.profile_image" />
          </q-avatar>
        </div>
        <div class="q-mt-xl column flex justify-center items-center">
          <p class="text-h6">{{ artistProfile.name }}</p>
        </div>
        <div class="q-mt-xs column flex justify-center items-center">
          <p class="text-subtitle1">
            Genres |
            <template v-if="artistProfile.genres">
              <!-- <span
                v-for="genre in JSON.parse(artistProfile.genres)"
                :key="genre"
                >{{ genre }}</span
              > -->
              {{ JSON.parse(artistProfile.genres).join(", ") }}
            </template>
          </p>
          <p class="text-subtitle2 q-px-xl" style="text-align: center">
            {{ artistProfile.biography }}
          </p>
        </div>
      </div>
    </q-card>
    <q-card class="q-mt-lg">
      <div class="row shaddow q-mt-sm q-pa-sm justify-between">
        <div class="q-pa-sm">
          <p class="text-h6 q-pa-sm">Contacts</p>
          <q-list padding>
            <q-item>
              <q-item-section avatar>
                <q-icon color="green" name="mdi-phone" />
              </q-item-section>
              <q-item-section>Phone</q-item-section>
              <q-item-section side>
                <q-item-label caption>{{ artistProfile.phone }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list padding>
            <q-item>
              <q-item-section avatar>
                <q-icon color="green" name="mdi-web" />
              </q-item-section>
              <q-item-section>Website</q-item-section>
              <q-item-section side>
                <q-item-label caption>{{ artistProfile.website }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list padding>
            <q-item>
              <q-item-section avatar>
                <q-icon color="green" name="mdi-gmail" />
              </q-item-section>
              <q-item-section>Email</q-item-section>
              <q-item-section side>
                <q-item-label caption>{{ artistProfile.email }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="q-pa-sm">
          <p class="text-h6 q-pa-sm">Social Media</p>
          <q-list padding>
            <q-item>
              <q-item-section avatar>
                <q-icon color="green" name="mdi-youtube" />
              </q-item-section>
              <q-item-section>Youtube</q-item-section>
              <q-item-section side>
                <q-item-label caption>{{ artistProfile.youtube }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list padding>
            <q-item>
              <q-item-section avatar>
                <q-icon color="green" name="mdi-twitter" />
              </q-item-section>
              <q-item-section>Twitter</q-item-section>
              <q-item-section side>
                <q-item-label caption>{{ artistProfile.twitter }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list padding>
            <q-item>
              <q-item-section avatar>
                <q-icon color="green" name="mdi-instagram" />
              </q-item-section>
              <q-item-section>Instagram</q-item-section>
              <q-item-section side>
                <q-item-label caption
                  >@{{ artistProfile.instagram }}</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="q-pa-sm">
          <p class="text-h6 q-pa-sm">Other Info</p>
          <q-list padding>
            <q-item class="column flex">
              <q-item-section avatar>
                <div class="row flex">
                  <q-icon
                    color="green"
                    size="25px"
                    class="q-ma-xs"
                    name="mdi-account-hard-hat"
                  />
                  <p class="text-h6">Occupations</p>
                </div>
              </q-item-section>
              <div v-if="artistProfile.occupations" class="row flex">
                <q-chip
                  v-for="occupation in JSON.parse(artistProfile.occupations)"
                  :key="occupation"
                  :label="occupation"
                  color="amber"
                />
              </div>
            </q-item>
            <q-item class="column flex">
              <q-item-section avatar>
                <div class="row flex">
                  <q-icon
                    color="green"
                    size="35px"
                    class=""
                    name="mdi-record-rec"
                  />
                  <p class="text-h6">Labels</p>
                </div>
              </q-item-section>
              <div v-if="artistProfile.labels" class="row flex">
                <q-chip
                  v-for="label in JSON.parse(artistProfile.labels)"
                  :key="label"
                  :label="label"
                  color="amber"
                />
              </div>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { api } from "src/boot/axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const artistProfile = ref("");
const profile_url = process.env.API_URL;
const getProfile = async () => {
  try {
    console.log(route.params)
    const response = await api.get(`/artist_list/${route.params.id}`);
    artistProfile.value = response.data;
  } catch (error) {}
};

onMounted(() => {
  getProfile();
});
</script>

<style>
.card {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.avatar {
  bottom: -30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
