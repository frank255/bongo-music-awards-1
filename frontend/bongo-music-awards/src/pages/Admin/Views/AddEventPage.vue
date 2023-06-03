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
          v-model="addEvent.event_name"
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
      </q-step>

      <q-step :done="STEP > 2" :name="2" prefix="2" title="Genre">
        <div class="text-sm text-red text-bold">*If genres are not available you can add them bellow</div>
        <q-input
          v-model="addEvent.id_number"
          class="q-ma-lg"
          dense
          label="Add new genres"
          outlined
        />
        <div class="text-sm text-green text-bold">*You can apply all genres bellow or modify as you need</div>

        <q-banner inline-actions  v-if="genre_data != ''" :genres_data="genresData" class="q-ml-xs q-mt-md bordered">
          <div>
            <q-chip
              v-for="(genre, index) in genre_data"
              :key="index"
              :label="genre"
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
              @click="addGenres()"
            />
          </template>
        </q-banner>
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
        <div class="text-sm text-red text-bold">*If categories are not available you can add them bellow</div>
        <q-input
          v-model="addEvent.id_number"
          class="q-ma-lg"
          dense
          label="Add new categories"
          outlined
        />
        <div class="text-sm text-green text-bold">*You can apply all categories bellow or modify as you need</div>

        <q-banner inline-actions  v-if="category_data != ''" :categories_data="categoriesData" class="q-ml-xs q-mt-md bordered">
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
      </q-step>

      <template #navigation>
        <q-stepper-navigation>
          <q-btn
            ref="continueBtn"
            :label="STEP === 3 ? 'Finish' : 'Continue'"
            color="primary"
            @click="
              $refs.stepper.next();
              submitUser();
            "
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
    </q-stepper>
  </q-page>
</template>

<script setup>
import { api } from "src/boot/axios";
import { onMounted, reactive, ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
const router = useRouter();
const $q = useQuasar();
const STEP = ref(1);
const rol = ref([]);
const branches = ref([]);
const addEvent = ref({
  event_name: "",
  event_number: "",
  profile_image: null,
  id_type: "",
  id_img: null,
  id_number: "",
  event_date: "2019/02/01",
  permission: "",
  branch_id: "",
});
const genre_data = ref(['award of the year', 'album of the year','singeli','bongo fleva'])
const category_data = ref(['Best artist of the year', 'Best album of the year','Best video of the year'])
const form_data = () => {
  const formData = new FormData();
  formData.append("event_name", addEvent.value.event_name);
  formData.append("event_number", addEvent.value.event_number);
  formData.append("profile_image", addEvent.value.profile_image);
  formData.append("id_type", addEvent.value.id_type);
  formData.append("id_img", addEvent.value.id_img);
  formData.append("id_number", addEvent.value.id_number);
  formData.append("event_date", addEvent.value.event_date);
  formData.append("branch_id", addEvent.value.branch_id);
  formData.append("permission", addEvent.value.permission);
  return formData;
};
const continueBtn = ref(null);
const submitUser = async () => {
  if (continueBtn.value.label === "Finish") {
    try {
      const { data } = await api.post("a/users", form_data());
      router.push("/a/users");
    } catch (err) {}
  }
};

const roles = async () => {
  try {
    const roles = await api.get("a/roles");
    rol.value = roles.data.data;
  } catch (error) {}
};

const getBranches = async () => {
  try {
    const data = await api.get("a/branches");

    data.data.data.forEach((element) => {
      branches.value.push({
        label: element.branch_name,
        value: element.branch_id,
      });
    });
  } catch (error) {}
};

onMounted(() => {
  roles();
  getBranches();
});
</script>
<style lang="scss" scoped></style>
