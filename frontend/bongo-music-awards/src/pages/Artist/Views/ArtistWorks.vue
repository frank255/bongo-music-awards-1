<template>
  <q-page padding>
    <!--Albums/EPs table-->
    <div class="row items-center q-mt-xl">
      <p class="font-body-small q-pl-md col">
        <span class="text-weight-bolder text-capitalize text-h6"
          >Albums and EPs</span
        >
      </p>
      <p class="flex justify-end width col">
        <q-btn
          @click="
            // approveLoan(props.row.loan_id);
            ALBUM_DIALOG = true
          "
          class="text-capitalize"
          >add new</q-btn
        >
      </p>
    </div>
    <q-table
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      class="q-mt-md"
    >
      <template #body-cell-action="">
        <q-td>
          <q-btn
            class=""
            icon="mdi-pencil"
            flat
            dense
            color="primary"
            size="10px"
          >
            <q-tooltip>edit</q-tooltip>
            <!-- <q-menu>
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <q-select
                    class="q-ma-xs"
                    dense
                    v-model="customer_date"
                    :options="['active', 'blocked']"
                  >
                  </q-select>
                  <q-btn
                    class="q-ma-xs"
                    v-close-popup
                    color="primary"
                    label="Save"
                    push
                    size="sm"
                    @click="blockCustomer(props.row.customer_id)"
                  />
                </div>
              </div>
            </q-menu> -->
          </q-btn>
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
    </q-table>
    <!--Singles table-->
    <div class="row items-center q-mt-xl">
      <p class="font-body-small q-pl-md col">
        <span class="text-weight-bolder text-capitalize text-h6">Singles</span>
      </p>
      <p class="flex justify-end width col">
        <q-btn
          @click="
            // approveLoan(props.row.loan_id);
            SINGLE_DIALOG = true
          "
          class="text-capitalize"
          >add new</q-btn
        >
      </p>
    </div>
    <q-table
      bordered
      :rows="singlerows"
      :columns="singlecolumns"
      row-key="name"
      :filter="filter"
      class="q-mt-md"
    >
      <template #body-cell-action="">
        <q-td>
          <q-btn
            class=""
            icon="mdi-pencil"
            flat
            dense
            color="primary"
            size="10px"
          >
            <q-tooltip>edit</q-tooltip>
            <!-- <q-menu>
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <q-select
                    class="q-ma-xs"
                    dense
                    v-model="customer_date"
                    :options="['active', 'blocked']"
                  >
                  </q-select>
                  <q-btn
                    class="q-ma-xs"
                    v-close-popup
                    color="primary"
                    label="Save"
                    push
                    size="sm"
                    @click="blockCustomer(props.row.customer_id)"
                  />
                </div>
              </div>
            </q-menu> -->
          </q-btn>
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
    </q-table>
    <q-dialog v-model="ALBUM_DIALOG" position="right">
      <q-card style="width: 500px; max-width: 80vw; height: 100vh">
        <q-card-section>
          <div class="text-h6">Fill the form bellow</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-md">
          <q-input v-model="artwork_name" dense outlined label="Album/Ep Name" />
          <q-input v-model="artwork_link" dense outlined label="Number of trucks" />
          <q-input v-model="artwork_link" dense outlined label="Release Date" />
          <q-input v-model="artwork_link" dense outlined label="Link" />
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
            label="Save"
            @click="approveLoans()"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="SINGLE_DIALOG" position="right">
      <q-card style="width: 500px; max-width: 80vw; height: 100vh">
        <q-card-section>
          <div class="text-h6">Fill the form bellow</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-md">
          <q-input v-model="artwork_name" dense outlined label="Truck Name" />
          <q-input v-model="artwork_link" dense outlined label="Release Date" />
          <q-input v-model="artwork_link" dense outlined label="Link" />
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
            label="Save"
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
import { ref } from "vue";
const SINGLE_DIALOG = ref(false);
const ALBUM_DIALOG = ref(false);
const columns = ref([
  {
    name: "album_name",
    label: "Album/Ep Name",
    align: "left",
    field: (row) => row.album_name,
    sortable: true,
  },
  {
    name: "number_of_trucks",
    label: "Number of Tracks",
    align: "left",
    field: (row) => row.number_of_trucks,
    sortable: true,
  },
  {
    name: "date",
    label: "Release Date",
    align: "left",
    field: (row) => row.date,
    sortable: true,
  },
  {
    name: "link",
    label: "Link",
    align: "left",
    field: (row) => row.link,
    sortable: true,
  },
  {
    name: "action",
    label: "action",
    align: "left",
  },
]);
const rows = [
  {
    link: "https://www.boomplay.com/songs/72411661",
    album_name: "Bongo Music Awards 2022",
    number_of_trucks: "BM22",
    date: "20/2/2019",
  },
  {
    link: "https://www.boomplay.com/songs/72411661",
    album_name: "Bongo Music Awards 2022",
    number_of_trucks: "BM22",
    date: "20/2/2019",
  },
  {
    link: "https://www.boomplay.com/songs/72411661",
    album_name: "Bongo Music Awards 2022",
    number_of_trucks: "BM22",
    date: "20/2/2019",
  },
  // Add more rows as needed
];
const singlecolumns = ref([
  {
    name: "track_name",
    label: "Track Name",
    align: "left",
    field: (row) => row.track_name,
    sortable: true,
  },

  {
    name: "date",
    label: "Release Date",
    align: "left",
    field: (row) => row.date,
    sortable: true,
  },
  {
    name: "link",
    label: "Link",
    align: "left",
    field: (row) => row.link,
    sortable: true,
  },
  {
    name: "action",
    label: "action",
    align: "left",
  },
]);
const singlerows = [
  {
    link: "https://www.boomplay.com/songs/72411661",
    track_name: "Bongo Music Awards 2022",
    date: "20/2/2019",
  },
  {
    link: "https://www.boomplay.com/songs/72411661",
    track_name: "Bongo Music Awards 2022",
    date: "20/2/2019",
  },
  {
    link: "https://www.boomplay.com/songs/72411661",
    track_name: "Bongo Music Awards 2022",
    date: "20/2/2019",
  },
  // Add more rows as needed
];
</script>

<style lang="scss" scoped></style>
