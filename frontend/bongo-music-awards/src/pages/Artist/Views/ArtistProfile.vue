<template>
  <q-page padding>
    <div
      class="text-center text-h5"
    >
      This profile will be vissible to your fans....
    </div>
    <q-card v-if="profileInfo">
      <div class="shaddow q-mt-lg q-pa-sm column items-center relative">
        <div class="card bg-grey-2 flex justify-center items-center">
          <q-avatar size="90px" class="avatar">
            <img :src="profile_url + profileInfo.profile_image" />
          </q-avatar>
        </div>
        <div class="q-mt-xl column flex justify-center items-center">
          <p class="text-h6">{{ profileInfo.name }}</p>
        </div>
        <div class="q-mt-xs column flex justify-center items-center">
          <p class="text-subtitle1">
            Genres |
            <template v-if="profileInfo.genres">
              <!-- <span
                v-for="genre in JSON.parse(profileInfo.genres)"
                :key="genre"
                >{{ genre }}</span
              > -->
              {{ JSON.parse(profileInfo.genres).join(", ") }}
            </template>
          </p>
          <p class="text-subtitle2 q-px-xl" style="text-align: center">
            {{ profileInfo.biography }}
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
    <div v-else class="q-card q-mt-lg">
      <div class="row justify-center">
        <q-icon
          size="2em"
          class="q-pa-sm"
          name="mdi-pencil"
          @click="BIO_DIALOG = true"
        >
          <q-tooltip>Edit</q-tooltip>
        </q-icon>
      </div>
      <div class="row shaddow q-mt-sm q-pa-sm justify-center">
        <p>Please click pencil icon to edit your profile</p>
      </div>
    </div>
    <q-card class="q-mt-lg" v-if="profileInfo">
      <div class="row justify-end">
        <q-icon
          size="2em"
          class="q-pa-sm"
          name="mdi-pencil"
          @click="INFO_DIALOG = true"
        >
          <q-tooltip>Edit</q-tooltip></q-icon
        >
      </div>
      <div class="row shaddow q-mt-sm q-pa-sm justify-between">
        <div class="q-pa-sm">
          <p class="text-h6 q-pa-sm">Contacts</p>
          <q-list padding>
            <q-item>
              <q-item-section avatar>
                <q-icon color="green" name="mdi-phone" />
              </q-item-section>
              <q-item-section>Phone</q-item-section>
              <q-item-section side>
                <q-item-label caption>{{ profileInfo.phone }}</q-item-label>
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
                <q-item-label caption>{{ profileInfo.website }}</q-item-label>
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
                <q-item-label caption>{{ profileInfo.email }}</q-item-label>
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
                <q-item-label caption>{{ profileInfo.youtube }}</q-item-label>
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
                <q-item-label caption>{{ profileInfo.twitter }}</q-item-label>
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
                <q-item-label caption>{{ profileInfo.instagram }}</q-item-label>
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
              <div v-if="profileInfo.occupations" class="row flex">
                <q-chip
                  v-for="occupation in JSON.parse(profileInfo.occupations)"
                  :key="occupation"
                  :label="occupation"
                  color="amber"
                />
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
              <div v-if="profileInfo.labels" class="row flex">
                <q-chip
                  v-for="label in JSON.parse(profileInfo.labels)"
                  :key="label"
                  :label="label"
                  color="amber"
                />
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
          <div class="row justify-center items-center">
            <q-avatar size="150px" class="bg-grey">
              <img v-if="imagePreview" :src="imagePreview" />
              <q-icon v-else name="mdi-account" rounded color="grey-3" />
            </q-avatar>
          </div>

          <!-- <q-btn @click="files()">click</q-btn> -->
          <q-file
            class="q-mt-md"
            outlined
            ref="file"
            dense
            :value="model"
            v-model="bioInfo.profile_image"
            label="Upload your profile image"
            @update:model-value="handleFileUpload"
          >
            <template v-slot:append>
              <q-icon name="attachment" />
            </template>
          </q-file>
          <q-input v-model="bioInfo.name" dense outlined label="Name" />
          <q-input v-model="bioInfo.email" dense outlined label="Email" />
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
              v-for="(genre, index) in bioInfo.genres"
              :key="index"
              :label="genre"
              class="chip-margin"
              color="primary"
              outlined
              removable
              @remove="handleRemoveGen(genre)"
            />
          </q-banner>
          <q-input
            v-model="bioInfo.biography"
            dense
            outlined
            label="Biography"
          />
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
const getProfileResponse = ref("");
const newGenre = ref("");
const newLabel = ref("");
const newOccupation = ref("");
const profile_url = process.env.API_URL;
const bioInfo = ref({
  name: "",
  email: "",
  biography: "",
  genres: [],
  profile_image: "",
});
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
const file = ref(null);
const imagePreview = ref(null);

const handleFileUpload = (file) => {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.value = e.target.result;
  };
  reader.readAsDataURL(file);
};

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
  bioInfo.value.genres.push(selected_genre);
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

const form_data = () => {
  const formData = new FormData();
  formData.append("name", bioInfo.value.name);
  formData.append("email", bioInfo.value.email);
  formData.append("biography", bioInfo.value.biography);
  formData.append("genres", JSON.stringify(bioInfo.value.genres));
  formData.append("profile_image", bioInfo.value.profile_image); // Include the file in the FormData
  return formData;
};

const createBio = async () => {
  try {
    const response = await api.post("/artists", form_data());
    profileInfo.value = response.data;
  } catch (error) {}
};

const updateBio = async () => {
  try {
    if (getProfileResponse.value == "not found") {
      createBio();
    } else {
      const response = await api.post(
        `/artist_bio/${user.user_id}`,
        form_data()
      );
      profileInfo.value = response.data;
    }
  } catch (error) {}
};

const createInfo = async () => {
  try {
    const occupationsString = JSON.stringify(occupations.value);
    const labelsString = JSON.stringify(labels.value);
    const response = await api.post("/artists", {
      website: website.value,
      phone: phone.value,
      email: email.value,
      youtube: youtube.value,
      instagram: instagram.value,
      twitter: twitter.value,
      occupations: occupationsString,
      labels: labelsString,
    });
    profileInfo.value = response.data;
  } catch (error) {}
};

const updateInfo = async () => {
  try {
    const occupationsString = JSON.stringify(occupations.value);
    const labelsString = JSON.stringify(labels.value);
    if (getProfileResponse.value == "not found") {
      createInfo();
    } else {
      const response = await api.post(`/artist_info/${user.user_id}`, {
        website: website.value,
        phone: phone.value,
        email: email.value,
        youtube: youtube.value,
        instagram: instagram.value,
        twitter: twitter.value,
        occupations: occupationsString,
        labels: labelsString,
      });
      window.location.reload();
    }
  } catch (error) {}
};

const getProfile = async () => {
  try {
    const response = await api.get(`/artists/${user.user_id}`);
    profileInfo.value = response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // Profile not found
      getProfileResponse.value = "not found";
      // Handle the case when the profile is not found
    } else {
      // Other error occurred
    }
  }
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
