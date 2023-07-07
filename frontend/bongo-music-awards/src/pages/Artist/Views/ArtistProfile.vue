<template>
  <q-page padding>
    <q-card>
      <div class="shaddow q-mt-lg q-pa-sm column items-center relative">
        <div class="card bg-grey-2 flex justify-center items-center">
          <q-avatar size="90px" class="avatar">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
        <div class="q-mt-xl column flex justify-center items-center">
          <p class="text-h6">{{ profileInfo.name }}</p>
        </div>
        <div class="q-mt-xs column flex justify-center items-center">
          <p class="text-subtitle1">Genres | {{ profileInfo.genres }}</p>
          <p class="text-subtitle2 q-px-xl" style="text-align: center">
          {{ profileInfo.biography}}
          </p>
        </div>
      </div>
      <div class="row justify-end">
        <q-icon
          size="2em"
          class="q-pa-sm"
          name="mdi-pencil"
          @click="
            // approveLoan(props.row.loan_id);
            BIO_DIALOG = true
          "
        >
          <q-tooltip>Edit</q-tooltip>
        </q-icon>
      </div>
    </q-card>
    <q-card class="q-mt-lg">
      <div class="row justify-end">
        <q-icon
          size="2em"
          class="q-pa-sm"
          name="mdi-pencil"
          @click="
            // approveLoan(props.row.loan_id);
            INFO_DIALOG = true
          "
        >
          <q-tooltip>Edit</q-tooltip></q-icon
        >
      </div>
      <div class="row shaddow q-mt-sm q-pa-sm justify-between">
        <div class="q-pa-sm">
          <p class="text-h6 q-pa-sm">Informations</p>
          <q-list padding>
            <q-item>
              <q-item-section avatar>
                <q-icon color="green" name="mdi-phone" />
              </q-item-section>
              <q-item-section>Phone</q-item-section>
              <q-item-section side>
                <q-item-label caption>+255766830442</q-item-label>
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
                <q-item-label caption>www.alikiba.com</q-item-label>
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
                <q-item-label caption>alikiba@gmail.com</q-item-label>
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
                <q-item-label caption>Ally Kiba</q-item-label>
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
                <q-item-label caption>@alikiba</q-item-label>
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
                <q-item-label caption>@alikiba</q-item-label>
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
              <div class="row flex">
                <q-chip label="Actor" color="amber" />
                <q-chip label="Singer" color="amber" />
                <q-chip label="Director" color="amber" />
                <q-chip label="Footballer" color="amber" />
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
              <div class="row flex">
                <q-chip label="Rock" color="amber" />
                <q-chip label="Kings Music" color="amber" />
                <q-chip label="Sony Music Entertainment" color="amber" />
              </div>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-card>
    <!--dialogue biography-->
    <q-dialog v-model="BIO_DIALOG" position="right">
      <q-card style="width: 500px; max-width: 80vw; height: 100vh">
        <q-card-section>
          <div class="text-h6">Fill the form bellow</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-md">
          <!-- <q-input v-model="artwork_name" dense outlined label="Profile image" /> -->
          <q-file
            v-model="profile_image"
            class="q-mx-lg"
            counter
            dense
            label="Profile Photo"
            outlined
            type="file"
          >
            <template #prepend>
              <q-icon name="cloud_upload" @click.stop.prevent />
            </template>
            <template #append>
              <q-icon
                class="cursor-pointer"
                name="close"
                @click.stop.prevent="model = null"
              />
            </template>
          </q-file>
          <q-input v-model="name" dense outlined label="Name" />
          <div class="row flex justify-center q-gutter-x-sm">
            <q-input
              v-model="newGenre"
              :style="$q.platform.is.desktop ? 'width: 76%' : 'width: 57%'"
              dense
              label="Add new genres"
              outlined
            />
            <q-btn
              label="Add Genre"
              color="primary"
              class="text-capitalize"
              @click="AddGen"
            ></q-btn>
          </div>
          <q-banner
            inline-actions
            v-if="genres != ''"
            class="q-ml-xs q-mt-md bordered"
          >
            <div class="text-sm text-green text-bold">*your genres</div>
            <q-chip
              v-for="(genre, index) in genres"
              :key="index"
              :label="genre"
              class="chip-margin"
              color="primary"
              outlined
              removable
              @remove="handleRemoveGen(genre)"
            />
          </q-banner>
          <q-input v-model="biography" dense outlined label="Biography" />
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
            @click="updateBio()"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--dialogue other info-->
    <q-dialog v-model="INFO_DIALOG" position="right">
      <q-card style="width: 500px; max-width: 80vw; height: 100vh">
        <q-card-section>
          <div class="text-h6">Fill the form bellow</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-md">
          <q-input v-model="phone" dense outlined label="Phone" />
          <q-input v-model="website" dense outlined label="Website" />
          <q-input v-model="email" dense outlined label="Email" />
          <q-input v-model="youtube" dense outlined label="Youtube" />
          <q-input v-model="instagram" dense outlined label="Instagram" />
          <q-input v-model="twitter" dense outlined label="Twitter" />
          <div class="row flex justify-center q-gutter-x-sm">
            <q-input
              v-model="newOccupation"
              :style="$q.platform.is.desktop ? 'width: 76%' : 'width: 63%'"
              dense
              label="Occupations"
              outlined
            />
            <q-btn
              label="Add"
              :style="$q.platform.is.desktop ? '' : 'width: 30%'"
              color="primary"
              class="text-capitalize"
              @click="AddOcc"
            ></q-btn>
          </div>
          <q-banner
            inline-actions
            v-if="occupations != ''"
            class="q-ml-xs q-mt-md bordered"
          >
            <div class="text-sm text-green text-bold">*your occupations</div>
            <q-chip
              v-for="(occupation, index) in occupations"
              :key="index"
              :label="occupation"
              class="chip-margin"
              color="primary"
              outlined
              removable
              @remove="handleRemoveOcc(occupation)"
            />
          </q-banner>
           <div class="row flex justify-center q-gutter-x-sm">
            <q-input
              v-model="newLabel"
              :style="$q.platform.is.desktop ? 'width: 76%' : 'width: 63%'"
              dense
              label="Labels"
              outlined
            />
            <q-btn
              label="Add"
              :style="$q.platform.is.desktop ? '' : 'width: 30%'"
              color="primary"
              class="text-capitalize"
              @click="AddLabel"
            ></q-btn>
          </div>
          <q-banner
            inline-actions
            v-if="labels != ''"
            class="q-ml-xs q-mt-md bordered"
          >
            <div class="text-sm text-green text-bold">*your labels</div>
            <q-chip
              v-for="(label, index) in labels"
              :key="index"
              :label="label"
              class="chip-margin"
              color="primary"
              outlined
              removable
              @remove="handleRemoveLabel(label)"
            />
          </q-banner>
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
            @click="updateInfo()"
            class="q-mx-sm text-capitalize"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { api } from "src/boot/axios";
import { onMounted, reactive, ref } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
const BIO_DIALOG = ref(false);
const INFO_DIALOG = ref(false);
const profileInfo = ref("");

const newGenre = ref("");
const newLabel = ref("");
const newOccupation = ref("");

const name = ref("");
const biography = ref("");
const genres = ref([]);
const profile_image = ref("");
const website = ref("");
const phone = ref("");
const email = ref("");
const youtube = ref("");
const instagram = ref("");
const twitter = ref("");
const occupations = ref([]);
const labels = ref([]);
const userString = sessionStorage.getItem("user");
const user = JSON.parse(userString);

const handleRemoveGen = (genre) => {
  // remove genre from genres array
  const index = genres.value.indexOf(genre);
  if (index !== -1) {
    genres.value.splice(index, 1);
  }
};

const AddGen = () => {
  // create new genre object and add it to  selected_genres array
  const selected_genre = newGenre.value;
  genres.value.push(selected_genre);
  // clear input field after removing/adding chip
  newGenre.value = "";
};

const handleRemoveOcc = (occupation) => {
  // remove occupation from occupations array
  const index = occupations.value.indexOf(occupation);
  if (index !== -1) {
    occupations.value.splice(index, 1);
  }
};

const AddOcc = () => {
  // create new occupation object and add it to  selected_occupations array
  const selected_occupation = newOccupation.value;
  occupations.value.push(selected_occupation);
  // clear input field after removing/adding chip
  newOccupation.value = "";
};

const handleRemoveLabel = (label) => {
  // remove genre from genres array
  const index = labels.value.indexOf(label);
  if (index !== -1) {
    labels.value.splice(index, 1);
  }
};

const AddLabel = () => {
  // create new genre object and add it to  selected_genres array
  const selected_label = newLabel.value;
  labels.value.push(selected_label);
  // clear input field after removing/adding chip
  newLabel.value = "";
};

const updateBio = async () => {
  try {
    const genreString = JSON.stringify(genres.value);
    const response = await api.put(`/artist_bio/${user.user_id}`, {
      name: name.value,
      biography: biography.value,
      genres: genreString,
    });
    window.location.reload();
  } catch (error) {}
};

const updateInfo = async () => {
  try {
    const occupationsString = JSON.stringify(occupations.value);
    const labelsString = JSON.stringify(labels.value);
    const response = await api.put(`/artist_info/${user.user_id}`, {
      website: website.value,
      phone: phone.value,
      email: email.value,
      youtube: youtube.value,
      instagram: instagram.value,
      twitter: twitter.value,
      occupations: occupationsString,
      labels: labelsString,
    });
    console.log(response.data);
    window.location.reload();
  } catch (error) {}
};
const getProfile = async () => {
  try {
    const response = await api.get(`/artist_profile/${user.user_id}`);
    profileInfo.value = response.data;
    console.log(profileInfo.value);
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
