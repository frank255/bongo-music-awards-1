<template>
  <q-page padding class="q-mt-xl">
    <div class="row q-gutter-md justify-between">
      <!--card 1-->
      <ArtistCard class="col-xs-12 col-sm-6 col-md-2" />
      <EventsCard class="col-xs-12 col-sm-6 col-md-2" />
      <GenresCard class="col-xs-12 col-sm-6 col-md-2" />
      <NomineesCard class="col-xs-12 col-sm-6 col-md-2" />
    </div>
    <!--information-->
    <!-- <div class="row scroll-on-mobile justify-around q-mt-xl">
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
          :options="['Best song of the year', '20/10/2022']"
          borderless
          v-model="category"
          @update:model-value="updateFilters(category, 'd')"
        >
        </q-select>
      </q-card>
    </div> -->
    <!-- <div class="q-pa-">
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
    </div> -->
    <div class="q-mt-xl q-gutter-y-lg">
      <q-table
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      class="q-mt-md"
    >
    <template #body-cell-status="props">
        <q-td>
          <q-badge
            v-if="props.row.status === 'closed'"
            dense
            color="red"
            size="10px"
            label="closed"
            class="q-ma-xs"
          >
          </q-badge>

          <q-badge
            v-if="props.row.status === 'active'"
            dense
            color="green"
            size="10px"
            label="Active"
            class="q-ma-xs"
          >
          </q-badge>
        </q-td>
      </template>
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
            Recent Events
          </p>
        </template>
    </q-table>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ArtistCard from "src/pages/Admin/components/ArtistCard.vue";
import NomineesCard from "src/pages/Admin/components/NomineesCard.vue";
import EventsCard from "src/pages/Admin/components/EventsCard.vue";
import GenresCard from "src/pages/Admin/components/GenresCard.vue";
const columns = ref([
  {
    name: "event_name",
    label: "Event Name",
    align: "left",
    field: (row) => row.event_name,
    sortable: true,
  },
  {
    name: "event_number",
    label: "Event Number",
    align: "left",
    field: (row) => row.event_number,
    sortable: true,
  },
  {
    name: "date",
    label: "Date",
    align: "left",
    field: (row) => row.date,
    sortable: true,
  },
  {
    name: "status",
    label: "Status",
    align: "left",
  },
]);
const rows = [
  {
    date: "20/10/2022",
    event_name: "Bongo Music Awards 2022",
    event_number: "BM22",
    status: "active",
  },
  {
    date: "20/10/2019",
    event_name: "Bongo Music Awards 2019",
    event_number: "BM19",
    status: "closed",
  },
  {
    date: "20/10/2022",
    event_name: "Bongo Music Awards 2022",
    event_number: "BM22",
    status: "active",
  },
  // Add more rows as needed
];
</script>

<style lang="scss" scoped></style>
