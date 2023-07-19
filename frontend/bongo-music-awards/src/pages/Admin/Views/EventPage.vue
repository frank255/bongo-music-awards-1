<template>
  <q-page padding>
    <div class="row scroll-on-mobile justify-around q-mt-xl">
      <q-btn
        @click="toggleEventStatus"
        class="text-capitalize"
        flat
        :color="EventActivation === 'active' ? 'negative' : 'primary'"
      >
        {{ EventActivation === "active" ? "Close Event" : "Activate Event" }}
      </q-btn>
      <q-card class="col-xs-12 col-sm-6 col-md-3" flat bordered>
        <q-select
          bg-color="white"
          label="Genres"
          :options="['Bongo Fleva', 'Singeli']"
          borderless
          v-model="genres"
          @update:model-value="updateFilters(genres, 'b')"
        >
        </q-select>
      </q-card>
      <q-card class="col-xs-12 col-sm-6 col-md-3" flat bordered>
        <q-select
          bg-color="white"
          standout
          label="Category"
          :options="['Best song of the year', 'Best artist of the year']"
          borderless
          v-model="category"
          @update:model-value="updateFilters(category, 'd')"
        >
        </q-select>
      </q-card>
    </div>
    <div class="q-pa-">
      <q-banner
        v-if="filter_changes"
        inline-actions
        class="q-ml-xs q-mt-md bordered"
      >
        <div>
          <q-chip
            v-if="events_data != ''"
            removable
            v-model="events_data"
            color="primary"
            text-color="white"
          >
            {{ events_data }}
          </q-chip>
          <q-chip
            v-if="genre_data != ''"
            removable
            v-model="genre_data"
            color="primary"
            text-color="white"
          >
            {{ genre_data }}
          </q-chip>
          <q-chip
            v-if="category_data != ''"
            removable
            v-model="category_data"
            color="primary"
            text-color="white"
          >
            {{ category_data }}
          </q-chip>
        </div>
        <template v-slot:action>
          <q-btn
            class="text-capitalize"
            color="primary"
            label="Apply Filter"
            @click="applyFilter()"
          />
        </template>
      </q-banner>
    </div>

    <div class="q-mt-xl">
      <q-table
        bordered
        flat
        :rows="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
        class="q-mt-md"
      >
        <template #top-right>
          <q-btn
            class="text-capitalize"
            icon="mdi-music-note-plus"
            color="primary"
            @click="
              // approveLoan(props.row.loan_id);
              APPROVAL_DIALOG = true
            "
          >
            Add Nomenees
          </q-btn>
        </template>
        <template #top-left>
          <p class="text-weight-bolder text-capitalize q-pl-md">Nominees</p>
        </template>
      </q-table>
    </div>
    <q-dialog v-model="APPROVAL_DIALOG" position="right">
      <q-card style="width: 500px; max-width: 80vw; height: 100vh">
        <q-card-section>
          <div class="text-h6">Fill the form bellow</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-md">
          <q-input v-model="artwork_name" dense outlined label="Artist Name" />
          <q-input v-model="artwork_name" dense outlined label="Artwork Name" />
          <q-input v-model="artwork_link" dense outlined label="Artwork Link" />
        </q-card-section>

        <q-card-actions>
          <q-btn
            flat
            outline
            color="negative"
            label="Cancel"
            @click="declineLoans()"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
          <q-btn
            color="primary"
            label="Submit"
            @click="approveLoans()"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { api } from "src/boot/axios";
import { useRoute } from "vue-router";
const columns = ref([
  {
    name: "artist_name",
    label: "Artist name",
    align: "left",
    field: (row) => row.artist_name,
    sortable: true,
  },
  {
    name: "genre",
    label: "genre",
    align: "left",
    field: (row) => row.genre,
    sortable: true,
  },
  {
    name: "category",
    label: "category",
    align: "left",
    field: (row) => row.category,
    sortable: true,
  },
  {
    name: "work_name",
    label: "Artwork Name",
    align: "left",
    field: (row) => row.work_name,
    sortable: true,
  },
  {
    name: "link",
    label: "Link",
    align: "left",
    field: (row) => row.link,
    sortable: true,
  },
]);
const rows = [
  {
    category: "Best Artist of the Year",
    artist_name: "Ally kiba",
    genre: "Song of the year",
    work_name: "Utu",
    link: "http://blablablab.com",
  },
  {
    category: "Best Artist of the Year",
    artist_name: "Harmonize",
    genre: "Song of the year",
    work_name: "I'm single",
    link: "http://blablablab.com",
  },
  {
    category: "Best Artist of the Year",
    artist_name: "Marioo",
    genre: "Song of the year",
    work_name: "Raha",
    link: "http://blablablab.com",
  },
  // Add more rows as needed
];
const EventActivation = ref("");
const events = ref("");
const genres = ref("");
const category = ref("");
const filters = ref({});
const APPROVAL_DIALOG = ref(false);
// const filter = ref([]);
const filter_changes = ref(false);
const events_data = ref("");
const genre_data = ref("");
const category_data = ref("");
const route = useRoute();

const toggleEventStatus = async () => {
  const newStatus = EventActivation.value === "active" ? "closed" : "active";
  await sendAPIRequest(newStatus);
};

const sendAPIRequest = async (newStatus) => {
  try {
    const response = await api.post(`/activateEvent/${route.params.event_id}`, {
      status: newStatus,
    });
    console.log(response);
    // Update EventActivation ref with the new status after successful API call
    EventActivation.value = newStatus;
  } catch (error) {
    console.error("Error sending API request:", error);
  }
};

const getEventStatus = async () => {
  try {
    const response = await api.get(`/events/${route.params.event_id}`);
    // console.log(response.data.data.event_status);
    EventActivation.value = response.data.data.event_status;
  } catch (error) {
    console.log(error);
  }
};

const updateFilters = (filter_value, type) => {
  filter_changes.value = true;
  if (type === "l") {
    events_data.value = filter_value;
  } else if (type === "b") {
    genre_data.value = filter_value;
  } else if (type === "d") {
    category_data.value = filter_value;
  }

  filters.value = {
    events_data: events_data.value,
    genre_data: genre_data.value,
    category_data: category_data.value,
  };
};

const applyFilter = () => {
  console.log(filters.value);
};
const removeChips = () => {
  filters.value.length === 0 ? (filter_changes.value = false) : "";
};

onMounted(() => {
  getEventStatus();
});
</script>

<style lang="scss" scoped></style>
