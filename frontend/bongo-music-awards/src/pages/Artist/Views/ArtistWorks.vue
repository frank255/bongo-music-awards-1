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
        <q-btn @click="ALBUM_DIALOG = true" class="text-capitalize"
          >add new</q-btn
        >
      </p>
    </div>
    <q-table
      bordered
      :rows="albums"
      :columns="columns"
      row-key="name"
      :filter="filter"
      class="q-mt-md"
    >
      <template #body-cell-action="props">
        <q-td>
          <q-btn
            class=""
            icon="mdi-pencil"
            flat
            dense
            color="primary"
            size="10px"
            @click="
              editAlbum(props.row.album_id);
              editAlbumDialog = true;
            "
          >
            <q-tooltip>edit</q-tooltip>
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
      <!-- Template for the "Link" column -->
      <template #body-cell-link="props">
        <q-td>
          <a :href="props.row.album_link" target="_blank">{{
            props.row.album_link
          }}</a>
        </q-td>
      </template>
    </q-table>

    <!--Singles table-->
    <div class="row items-center q-mt-xl">
      <p class="font-body-small q-pl-md col">
        <span class="text-weight-bolder text-capitalize text-h6">Singles</span>
      </p>
      <p class="flex justify-end width col">
        <q-btn @click="SINGLE_DIALOG = true" class="text-capitalize"
          >add new</q-btn
        >
      </p>
    </div>
    <q-table
      bordered
      album="singlerows"
      :columns="singlecolumns"
      :rows="singlerows"
      row-key="name"
      :filter="filter"
      class="q-mt-md"
    >
      <template #body-cell-action="props">
        <q-td>
          <q-btn
            class=""
            icon="mdi-pencil"
            flat
            dense
            color="primary"
            size="10px"
            @click="
              editSingle(props.row.id);
              editSingleDialog = true;
            "
          >
            <q-tooltip>edit</q-tooltip>
          </q-btn>
        </q-td>
      </template>
      <template #top-right>
        <q-input
          outlined
          dense
          debounce="300"
          v-model="filter1"
          placeholder="Search"
        >
          <template #append>
            <q-icon name="mdi-magnify" />
          </template>
        </q-input>
      </template>
      <!-- Template for the "Link" column -->
      <template #body-cell-link="props">
        <q-td>
          <a :href="props.row.single_link" target="_blank">{{
            props.row.single_link
          }}</a>
        </q-td>
      </template>
    </q-table>
    <q-dialog v-model="ALBUM_DIALOG" position="right">
      <q-card style="width: 500px; max-width: 80vw; height: 100vh">
        <q-card-section>
          <div class="text-h6">Fill the form bellow</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-md">
          <q-input v-model="album_name" dense outlined label="Album/Ep Name" />
          <q-input
            v-model="number_of_tracks"
            dense
            outlined
            label="Number of trucks"
          />
          <q-input v-model="album_date" dense outlined label="Release Date" />
          <q-input v-model="album_link" dense outlined label="Link" />
        </q-card-section>

        <q-card-actions>
          <q-btn
            flat
            outline
            color="negative"
            label="Cancel"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
          <q-btn
            color="primary"
            label="Save"
            @click="AddAlbums()"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="editAlbumDialog" position="right">
      <q-card style="width: 500px; max-width: 80vw; height: 100vh">
        <q-card-section>
          <div class="text-h6">Fill the form bellow</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-md">
          <q-input v-model="album_name" dense outlined label="Album/Ep Name" />
          <q-input
            v-model="number_of_tracks"
            dense
            outlined
            label="Number of trucks"
          />
          <q-input v-model="album_date" dense outlined label="Release Date" />
          <q-input v-model="album_link" dense outlined label="Link" />
        </q-card-section>

        <q-card-actions>
          <q-btn
            flat
            outline
            color="negative"
            label="Cancel"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
          <q-btn
            color="primary"
            label="Save"
            @click="saveAlbum()"
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
          <q-input v-model="single_name" dense outlined label="Truck Name" />
          <q-input v-model="single_date" dense outlined label="Release Date" />
          <q-input v-model="single_link" dense outlined label="Link" />
        </q-card-section>

        <q-card-actions>
          <q-btn
            flat
            outline
            color="negative"
            label="Cancel"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
          <q-btn
            color="primary"
            label="Save"
            @click="AddSingles()"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="editSingleDialog" position="right">
      <q-card style="width: 500px; max-width: 80vw; height: 100vh">
        <q-card-section>
          <div class="text-h6">Edit Single</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-md">
          <q-input v-model="single_name" dense outlined label="Truck Name" />
          <q-input v-model="single_date" dense outlined label="Release Date" />
          <q-input v-model="single_link" dense outlined label="Link" />
        </q-card-section>

        <q-card-actions>
          <q-btn
            flat
            outline
            color="negative"
            label="Cancel"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
          <q-btn
            color="primary"
            label="Save"
            @click="saveSingle()"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
const $q = useQuasar();
const filter1 = ref("");
const filter = ref("");
const SINGLE_DIALOG = ref(false);
const ALBUM_DIALOG = ref(false);
const editSingleDialog = ref(false);
const editAlbumDialog = ref(false);
const single_name = ref("");
const single_date = ref("");
const single_link = ref("");
const album_name = ref("");
const album_link = ref("");
const album_date = ref("");
const number_of_tracks = ref("");
const userString = sessionStorage.getItem("user");
const user = JSON.parse(userString);

const columns = ref([
  {
    name: "album_name",
    label: "Album/Ep Name",
    align: "left",
    field: (row) => row.album_name,
    sortable: true,
  },
  {
    name: "number_of_tracks",
    label: "Number of Tracks",
    align: "left",
    field: (row) => row.number_of_tracks,
    sortable: true,
  },
  {
    name: "date",
    label: "Release Date",
    align: "left",
    field: (row) => row.album_date,
    sortable: true,
  },
  {
    name: "link",
    label: "Link",
    align: "left",
    field: (row) => row.album_link,
    sortable: true,
  },
  {
    name: "action",
    label: "action",
    align: "left",
  },
]);
const albums = ref([]);
const singlecolumns = ref([
  {
    name: "track_name",
    label: "Track Name",
    align: "left",
    field: (row) => row.single_name,
    sortable: true,
  },

  {
    name: "date",
    label: "Release Date",
    align: "left",
    field: (row) => row.single_date,
    sortable: true,
  },
  {
    name: "link",
    label: "Link",
    align: "left",
    field: (row) => row.single_link,
    sortable: true,
  },
  {
    name: "action",
    label: "action",
    align: "left",
  },
]);
const singlerows = ref([]);

const AddSingles = async () => {
  try {
    const response = await api.post("/single", {
      single_name: single_name.value,
      single_date: single_date.value,
      single_link: single_link.value,
    });
    singlerows.value = response.data;
    console.log(response.data);
  } catch (error) {}
};
const AddAlbums = async () => {
  try {
    const response = await api.post("/albums", {
      album_name: album_name.value,
      album_date: album_date.value,
      album_link: album_link.value,
      number_of_tracks: number_of_tracks.value,
    });
    albums.value = response.data;

    console.log(response.data);
  } catch (error) {}
};

const editSingle = (id) => {
  // Assuming 'rows' is the array containing your table data
  single_id.value = id;
  const selectedRow = singlerows.value.find((row) => row.id === id);
  if (selectedRow) {
    single_name.value = selectedRow.single_name;
    single_date.value = selectedRow.single_date;
    single_link.value = selectedRow.single_link;
  }
};
const editAlbum = (album_id) => {
  // Assuming 'rows' is the array containing your table data
  albumId.value = album_id;
  const selectedRow = albums.value.find((row) => row.album_id === album_id);
  if (selectedRow) {
    album_name.value = selectedRow.album_name;
    album_date.value = selectedRow.album_date;
    album_link.value = selectedRow.album_link;
    number_of_tracks.value = selectedRow.number_of_tracks;
  }
};
const single_id = ref();
const saveSingle = async () => {
  try {
    // Create a data object with the modified unit of measure data
    const modifiedSingle = {
      single_name: single_name.value,
      single_date: single_date.value,
      single_link: single_link.value,
    };

    // Send a PUT request to the Laravel API to update the unit of measure with the given ID
    const response = await api.put(
      `/single/${single_id.value}`,
      modifiedSingle
    );
    singlerows.value = response.data;
    // Show a success notification
    $q.notify({
      message: "single updated successfully",
      color: "green",
      icon: "check",
      position: "top-right",
    });
    // Close the edit dialog after saving
    editSingleDialog.value = false;
  } catch (error) {
    console.error("Error saving single:", error);

    // Show an error notification if the request fails
    $q.notify({
      message: "Failed to save. Please try again.",
      color: "red",
      icon: "error",
      position: "top-right",
    });
  }
};
const albumId = ref();
const saveAlbum = async () => {
  try {
    // Create a data object with the modified unit of measure data
    const modifiedAlbum = {
      album_name: album_name.value,
      album_date: album_date.value,
      album_link: album_link.value,
      number_of_tracks: number_of_tracks.value,
    };

    // Send a PUT request to the Laravel API to update the unit of measure with the given ID
    const response = await api.put(`/albums/${albumId.value}`, modifiedAlbum);
    albums.value = response.data;
    // Show a success notification
    $q.notify({
      message: "Album updated successfully",
      color: "green",
      icon: "check",
      position: "top-right",
    });
    // Close the edit dialog after saving
    editAlbumDialog.value = false;
  } catch (error) {
    console.error("Error saving Album:", error);

    // Show an error notification if the request fails
    $q.notify({
      message: "Failed to save. Please try again.",
      color: "red",
      icon: "error",
      position: "top-right",
    });
  }
};
const getSingles = async () => {
  try {
    const response = await api.get(`/single/${user.user_id}`);
    singlerows.value = response.data;
    console.log(response.data);
  } catch (error) {}
};
const getAlbums = async () => {
  try {
    const response = await api.get(`/albums/${user.user_id}`);
    console.log(response.data);
    albums.value = response.data;
  } catch (error) {}
};
onMounted(() => {
  getSingles();
  getAlbums();
});
</script>

<style lang="scss" scoped></style>
