<template>
  <q-page padding>
    <p class="font-body-small text-capitalize q-pl-md">
      <q-breadcrumbs gutter="none">
        <q-breadcrumbs-el
          label="Back to Events"
          icon="mdi-arrow-left-thick"
          to="/admin/eventsandawards"
        />
      </q-breadcrumbs>
    </p>
    <q-stepper
      ref="stepper"
      v-model="STEP"
      :contracted="$q.screen.lt.md"
      animated
      color="primary"
    >
      <q-step :done="STEP > 1" :name="1" prefix="1" title="Event">
        <q-input
          v-model="addEvent.event_title"
          class="q-ma-lg"
          dense
          label="Event name"
          outlined
        />
        <q-input
          v-model="addEvent.event_number"
          class="q-ma-lg"
          dense
          label="Event number"
          outlined
        />
        <q-input
          v-model="addEvent.event_date"
          :rules="['date']"
          class="q-ma-lg"
          dense
          hint="Date of Event"
          mask="date"
          outlined
        >
          <template #append>
            <q-icon class="cursor-pointer" name="event">
              <q-popup-proxy
                cover
                transition-hide="scale"
                transition-show="scale"
              >
                <q-date v-model="addEvent.event_date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup color="primary" flat label="Close" />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-stepper-navigation>
          <q-btn color="primary" label="Continue" @click="eventSubmit()" />
        </q-stepper-navigation>
      </q-step>

      <q-step :done="STEP > 2" :name="2" prefix="2" title="Genre">
        <q-banner
          inline-actions
          v-if="genre_data != ''"
          class="q-ml-xs q-mt-md bordered"
        >
          <div class="text-sm text-green text-bold">
            *Genre suggestions, select all that apply by clicking X
          </div>
          <q-chip
            v-for="(genre, index) in genre_data"
            :key="index"
            :label="genre"
            class="chip-margin"
            color="primary"
            removable
            @remove="handleRemove(genre)"
            outlined
          />

          <!-- <template v-slot:action>
            <q-btn
              class="text-capitalize"
              color="primary"
              label="add genres"
              @click="addGenres()"
            />
          </template> -->
        </q-banner>
        <div class="text-sm text-red q-pa-lg text-bold">
          *If genres are not available you can add them bellow
        </div>
        <div class="row flex justify-center q-gutter-x-sm">
          <q-input
            v-model="newGenre"
            style="width: 85%"
            dense
            label="Add new genres"
            outlined
          />
          <q-btn
            label="Add Genre"
            color="primary"
            class="text-capitalize"
            @click="removeOrAddChip"
          ></q-btn>
        </div>
        <q-banner
          inline-actions
          v-if="selected_genres != ''"
          class="q-ml-xs q-mt-md bordered"
        >
          <div class="text-sm text-green text-bold">*selected genres</div>
          <q-chip
            v-for="(genre, index) in selected_genres"
            :key="index"
            :label="genre"
            class="chip-margin"
            color="primary"
            outlined
          />

          <!-- <template v-slot:action>
            <q-btn
              class="text-capitalize"
              color="primary"
              label="add genres"
              @click="addGenres()"
            />
          </template> -->
        </q-banner>
        <q-stepper-navigation>
          <q-btn color="primary" label="Continue" @click="genresSubmit()" />
          <q-btn
            v-if="STEP > 1"
            class="q-ml-sm"
            color="primary"
            flat
            label="Back"
            @click="$refs.stepper.previous()"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" prefix="3" title="Categories">
        <div class="q-gutter-sm">
          <q-select
            v-model="addEvent.branch_id"
            class="q-ma-lg"
            dense
            emit-value
            map-options
            :options="branches"
            label="Choose Genre"
            outlined
          />
        </div>
        <div class="text-sm text-red text-bold">
          *If categories are not available you can add them bellow
        </div>
        <q-input
          v-model="addEvent.id_number"
          class="q-ma-lg"
          dense
          label="Add new categories"
          outlined
        />
        <div class="text-sm text-green text-bold">
          *You can apply all categories bellow or modify as you need
        </div>

        <q-banner
          inline-actions
          v-if="category_data != ''"
          :categories_data="categoriesData"
          class="q-ml-xs q-mt-md bordered"
        >
          <div>
            <q-chip
              v-for="(category, index) in category_data"
              :key="index"
              :label="categories"
              class="chip-margin"
              color="primary"
              removable
              outlined
            />
          </div>
          <template v-slot:action>
            <q-btn
              class="text-capitalize"
              color="primary"
              label="add genres"
              @click="addCategory()"
            />
          </template>
        </q-banner>
        <template #navigation>
          <q-stepper-navigation>
            <q-btn
              label="Finish"
              color="primary"
              @click="STEP === 3 ? submitCategories() : $refs.stepper.next()"
            />
            <q-btn
              v-if="STEP > 1"
              class="q-ml-sm"
              color="primary"
              flat
              label="Back"
              @click="$refs.stepper.previous()"
            />
          </q-stepper-navigation>
        </template>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script setup>
import { api } from "src/boot/axios";
import { onMounted, reactive, ref } from "vue";
import { Notify, useQuasar } from "quasar";

import { useRouter } from "vue-router";
const router = useRouter();
const $q = useQuasar();
const STEP = ref(1);
const rol = ref([]);
const branches = ref([]);
const addEvent = ref({
  event_title: "",
  event_number: "",
  event_date: "",
  event_status: "closed",
});
const newGenre = ref("");
const genre_data = ref([]);
const selected_genres = ref([]);
const handleRemove = (genre) => {
  // remove genre from genres array
  const index = genre_data.value.indexOf(genre);
  if (index !== -1) {
    genre_data.value.splice(index, 1);
  }
  // add removed chip to removedChips array
  selected_genres.value.push(genre);
  console.log(selected_genres);
};
const removeOrAddChip = () => {
  // find chip with matching name and remove it from chips array
  const index = genre_data.value.findIndex((genre) => genre === newGenre.value);
  if (index !== -1) {
    const selected_genre = genre_data.value.splice(index, 1)[0];
    // add removed chip to selected_genres array
    selected_genres.value.push(selected_genre);
  } else {
    // create new genre object and add it to  selected_genres array
    const selected_genre = newGenre.value;
    selected_genres.value.push(selected_genre);
  }
  newGenre.value = ""; // clear input field after removing/adding chip
};
const category_data = ref([
  "Best artist of the year",
  "Best album of the year",
  "Best video of the year",
]);
const form_data = () => {
  const formData = new FormData();
  formData.append("event_title", addEvent.value.event_title);
  formData.append("event_number", addEvent.value.event_number);
  formData.append("event_date", addEvent.value.event_date);
  formData.append("event_status", addEvent.value.event_status);
  // formData.append("event_genres", selected_genres.value.event_genres);
  return formData;
};
const continueBtn = ref(null);
// const addStep = ()=> {
//   STEP.value = 2;
// };
const eventSubmit = async () => {
  // try {
  //   const { data } = await api.post("/events", form_data());
  //   console.log(data);
  // } catch (err) {}

  try {
    const { status, data } = await api.post("/events", form_data());
    console.log(data);
    sessionStorage.removeItem("event_id");
    sessionStorage.setItem("event_id", data.data.event_id);
    if (status === 200) {
      STEP.value = 2;
    }
  } catch (error) {
    // Notify.create({
    //   type: "negative",
    //   message: error.response.data.message,
    // });
  }
};
const genresSubmit = async () => {

  try {
    const { status, data } = await api.post("/events", form_data());
    console.log(data);
    sessionStorage.removeItem("event_id");
    sessionStorage.setItem("event_id", data.data.event_id);
    if (status === 200) {
      STEP.value = 2;
    }
  } catch (error) {
  
  }
};

const roles = async () => {
  try {
    const roles = await api.get("/roles");
    rol.value = roles.data.data;
  } catch (error) {}
};

const getGenres = async () => {
  try {
    const response = await api.get("/genres");
    const { data } = response;
    // Extract just the genre names using map() and array destructuring
    const names = data.data.map(({ genre_name }) => genre_name);
    genre_data.value = names;
  } catch (error) {}
};

onMounted(() => {
  // roles();
  getGenres();
});
</script>
<style lang="scss" scoped></style>
