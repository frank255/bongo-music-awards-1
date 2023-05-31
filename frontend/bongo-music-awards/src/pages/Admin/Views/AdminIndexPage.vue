<template>
  <q-page padding class="q-mt-xl">
    <div class="row q-gutter-sm justify-around">
      <!--card 1-->
      <ArtistCard class="col-xs-12 col-sm-6 col-md-2" />
      <EventsCard class="col-xs-12 col-sm-6 col-md-2" />
      <GenresCard class="col-xs-12 col-sm-6 col-md-2" />
      <NomineesCard class="col-xs-12 col-sm-6 col-md-2" />
    </div>
    <!--information-->
    <div class="row scroll-on-mobile justify-around q-mt-xl">
      <q-card
        class="col-xs-12 col-sm-6 col-md-3 q-pa-xs"

        flat
        bordered
      >
        <q-select
          bg-color="white"
          label="Events"
          :options="[
            'All',
            'Paid today',
            'Borrowed today',
            'Underpaid loans',
            'Paid more',
          ]"
          borderless
          v-model="loans"
          @update:model-value="updateFilters(loans, 'l')"
        >
        </q-select>
      </q-card>
      <q-card
        class="col-xs-12 col-sm-6 col-md-3 q-pa-xs"

        flat
        bordered
      >
        <q-select
          bg-color="white"
          label="Genres"
          :options="['INGUNGA', 'KATORO']"
          borderless
          v-model="branches"
          @update:model-value="updateFilters(branches, 'b')"
        >
        </q-select>
      </q-card>
      <q-card
        class="col-xs-12 col-sm-6 col-md-3 q-pa-xs"

        flat
        bordered
      >
        <q-select
          bg-color="white"
          standout
          label="Categories"
          :options="[
            'Today',
            '7 days ago',
            '28 days ago',
            '90 days ago',
            'Custom',
          ]"
          borderless
          v-model="date"
          @update:model-value="updateFilters(date, 'd')"
        >
        </q-select>
      </q-card>
    </div>
    <div class="row">
      <q-banner
        v-if="filter_changes"
        inline-actions
        class="q-ml-xs q-mt-md bordered"
      >
        <div>
          <q-chip
            v-if="loans_data != ''"
            removable
            v-model="loans_data"
            color="grey-7"
            text-color="white"
          >
            {{ loans_data }}
          </q-chip>
          <q-chip
            v-if="branch_data != ''"
            removable
            v-model="branch_data"
            color="grey-7"
            text-color="white"
          >
            {{ branch_data }}
          </q-chip>
          <q-chip
            v-if="date_data != ''"
            removable
            v-model="date_data"
            color="grey-7"
            text-color="white"
          >
            {{ date_data }}
          </q-chip>
        </div>
        <template v-slot:action>
          <q-btn
            flat
            color="grey-7"
            label="Apply filter"
            @click="applyFilter()"
          />
        </template>
      </q-banner>
    </div>
    <div class="q-mt-xl q-gutter-y-lg">
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
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ArtistCard from "src/pages/Admin/components/ArtistCard.vue";
import NomineesCard from "../components/NomineesCard.vue";
import EventsCard from "../components/EventsCard.vue";
import GenresCard from "../components/GenresCard.vue";
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
    artist_name: "Ally Salehe kiba",
    genre: "Award of the year",
    votes: "200",
  },
  {
    category: "Best Artist of the Year",
    artist_name: "Ally Salehe kiba",
    genre: "Award of the year",
    votes: "200",
  },
  {
    category: "Best Artist of the Year",
    artist_name: "Ally Salehe kiba",
    genre: "Award of the year",
    votes: "200",
  },
  // Add more rows as needed
];
</script>

<style lang="scss" scoped></style>
