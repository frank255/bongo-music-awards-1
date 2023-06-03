<template>
  <q-page padding>
    <div class="row scroll-on-mobile justify-around q-mt-xl">
      <q-card class="col-xs-12 col-sm-6 col-md-3 q-pa-xs" flat bordered>
        <q-select
          bg-color="white"
          label="Events"
          :options="['Bongo Music Awards']"
          borderless
          v-model="events"
          @update:model-value="updateFilters(events, 'l')"
        >
        </q-select>
      </q-card>
      <q-card class="col-xs-12 col-sm-6 col-md-3 q-pa-xs" flat bordered>
        <q-select
          bg-color="white"
          label="Genres"
          :options="['Bongo Fleva', 'Taarabu', 'Singeli']"
          borderless
          v-model="genres"
          @update:model-value="updateFilters(genres, 'b')"
        >
        </q-select>
      </q-card>
      <q-card class="col-xs-12 col-sm-6 col-md-3 q-pa-xs" flat bordered>
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
            label="View Votes"
            @click="applyFilter()"
          />
        </template>
      </q-banner>
    </div>
    <div class="row q-mt-xl q-gutter-x-sm">
      <div class="col-xs-12 col-sm-12 col-md-7">
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
          <q-input
            outlined
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template #append>
              <q-icon name="mdi-magnify" />
            </template>
          </q-input>
        </template>
        <template #top-left>
          <p class="text-weight-bolder text-capitalize q-pl-md">
            Nominees and votes
          </p>
        </template>
      </q-table>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4" >
        <apexchart height="330" :options="chartOptions" :series="chartData"></apexchart>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
const chartOptions = {
  chart: {
    type: 'bar',
  },
  xaxis: {
    categories: ['Marioo','Harmonize','Ally Kiba']
  }
}

const chartData = [{
  name: 'votes',
  data: [50, 150, 200]
}]


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
    name: "votes",
    label: "votes",
    align: "left",
    field: (row) => row.votes,
    sortable: true,
  },
]);
const rows = [
  {
    category: "Best Artist of the Year",
    artist_name: "Ally kiba",
    genre: "Award of the year",
    votes: "200",
  },
  {
    category: "Best Artist of the Year",
    artist_name: "Harmonize",
    genre: "Award of the year",
    votes: "150",
  },
  {
    category: "Best Artist of the Year",
    artist_name: "Marioo",
    genre: "Award of the year",
    votes: "50",
  },
  // Add more rows as needed
];
const events = ref("");
const genres = ref("");
const category = ref("");
const filters = ref({});
// const filter = ref([]);
const filter_changes = ref(false);

const events_data = ref("");
const genre_data = ref("");
const category_data = ref("");
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
</script>

<style lang="scss" scoped></style>
