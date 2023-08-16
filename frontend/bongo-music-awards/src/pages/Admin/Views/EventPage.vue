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
      <q-select
        v-model="filterGenre"
        outlined
        dense
        :options="genreoptions"
        label="Genre"
        :style="$q.platform.is.desktop ? 'width: 150px' : 'width:200px'"
      >
        <template #prepend>
          <q-icon
            name="mdi-close-circle"
            @click="clearFilter('filterGenre')"
            v-if="filterGenre"
            class="q-mr-sm cursor-pointer"
          />
        </template>
      </q-select>

      <q-select
        v-model="filterCategory"
        outlined
        dense
        :options="categoryoptions"
        label="Category"
        :style="$q.platform.is.desktop ? 'width: 150px' : 'width:200px'"
      >
        <template #prepend>
          <q-icon
            name="mdi-close-circle"
            @click="clearFilter('filterCategory')"
            v-if="filterCategory"
            class="q-mr-sm cursor-pointer"
          />
        </template>
      </q-select>
    </div>
    <div class="q-mt-xl">
      <q-table
        bordered
        flat
        :rows="filteredItems"
        :columns="columns"
        row-key="name"
        :filter="filter"
        :filter-method="customFilter"
        class="q-mt-md"
      >
        <template #top-right>
          <q-btn
            class="text-capitalize"
            icon="mdi-music-note-plus"
            color="primary"
            @click="
              // approveLoan(props.row.loan_id);
              newNomineeDialog = true
            "
          >
            Add Nomenees
          </q-btn>
        </template>
        <template #top-left>
          <p class="text-weight-bolder text-capitalize q-pl-md">Nominees</p>
        </template>
        <!-- Template for the "Link" column -->
        <template #body-cell-link="props">
          <q-td>
            <a :href="props.row.link" target="_blank">{{ props.row.link }}</a>
          </q-td>
        </template>
        <template #body-cell-action="props">
          <q-td>
            <q-btn
              icon="mdi-delete"
              flat
              color="primary"
              @click="deleteNominee(props.row.nominee_id)"
            >
              <q-tooltip>delete</q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
    <q-dialog v-model="newNomineeDialog" position="right">
      <q-card style="width: 500px; max-width: 80vw; height: 100vh">
        <q-card-section>
          <div class="text-h6">Fill the form bellow</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-md">
          <q-select
            outlined
            v-model="artist_name"
            use-input
            input-debounce="0"
            label="Artist Name"
            :options="options"
            @filter="filterFn"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-input v-model="artwork_name" dense outlined label="Artwork Name" />
          <q-input v-model="link" dense outlined label="Artwork Link" />
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
            label="Submit"
            @click="addNominees()"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";
import { api } from "src/boot/axios";
import { useRoute } from "vue-router";
import { useQuasar } from "quasar";
const $q = useQuasar();
const categoryoptions = ["Best Song Of The Year", "Best Artist Of The Year"];
const genreoptions = ["Bongo Fleva", "Singeli"];

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
    field: (row) => row.artwork_name,
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
    label: "Action",
    align: "left",
  },
]);
const rows = ref([]);
const EventActivation = ref("");
const artwork_name = ref("");
const link = ref("");
const newNomineeDialog = ref(false);
// const filter = ref([]);
const filter_changes = ref(false);
const filterGenre = ref("");
const filterCategory = ref("");
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
    console.error("Error sending API:", error);
  }
};
const addNominees = async () => {
  try {
    const response = await api.post("/nominees", {
      event_id: route.params.event_id,
      genre: filterGenre.value,
      category: filterCategory.value,
      artist_name: artist_name.value,
      artwork_name: artwork_name.value,
      link: link.value,
    });
    window.location.reload();
    $q.notify({
      message: "Nominee Added Successfully",
      color: "green",
      icon: "check",
      position: "top-right",
    });
  } catch (error) {
    $q.notify({
      message: "Please Select Genre and Category",
      color: "red",
      icon: "warning",
      position: "top-right",
    });
    console.log(error);
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

const filteredItems = computed(() => {
  const genre = filterGenre.value.toLowerCase();
  const category = filterCategory.value.toLowerCase();
  return rows.value.filter((row) => {
    // Combine all the filters with logical AND (&&)
    return (
      // Filter logic based on your specific requirements
      (genre === "" || row.genre.toLowerCase().includes(genre)) &&
      (category === "" || row.category.toLowerCase().includes(category))
    );
  });
});
const customFilter = (rows, terms) => {
  if (terms.filterGenre !== undefined) {
    filterGenre.value = terms.filterGenre;
  }

  if (terms.filterCategory !== undefined) {
    filterCategory.value = terms.filterCategory;
  }
  return filteredRows.value;
};
const clearFilter = (filterType) => {
  if (filterType === "filterGenre") {
    filterGenre.value = "";
  } else if (filterType === "filterCategory") {
    filterCategory.value = "";
  }
};
const getNominees = async () => {
  try {
    const response = await api.get(`/nominees/${route.params.event_id}`);
    rows.value = response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      $q.notify({
        message: "Not Found, Please Add New Nominees",
        color: "red",
        icon: "warning",
        position: "top-right",
      });
    } else {
      // Handle other errors if needed
      console.error("Error fetching patient records:", error);
    }
  }
};

const namesOptions = ref([]);

const options = ref(namesOptions);
const artist_name = ref(null);

const filterFn = (val, update) => {
  if (val === "") {
    update(() => {
      options.value = namesOptions.value;
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    options.value = namesOptions.value.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
};
const fetchArtistNames = async () => {
  try {
    const response = await api.get("/artist_list");
    // Extract the 'name' property from each object in the response data
    const names = response.data.map((item) => item.name);
    // Assign the names array to the 'unitofmeasureoptions' ref object
    namesOptions.value = names;
    console.log(namesOptions.value);
  } catch (error) {
    console.error("Error fetching preferences:", error);
  }
};
const deleteNominee = async (nominee_id) => {
  try {
    // Make the API call to delete the item price
    const response = await api.delete(`/nominees/${nominee_id}`);
    window.location.reload();
    $q.notify({
      message: "Nominee Deleted Successfully",
      color: "green",
      icon: "check",
      position: "top-right",
    });
  } catch (error) {
    console.error("Error deleting item price:", error);
  }
};
onMounted(() => {
  getEventStatus();
  getNominees();
  fetchArtistNames();
});
</script>

<style lang="scss" scoped></style>
