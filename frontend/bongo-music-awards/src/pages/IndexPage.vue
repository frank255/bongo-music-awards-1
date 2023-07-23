<template>
  <q-page class="">
    <div class="flex justify-center">
      <div class="full-width">
        <q-carousel
          height="350px"
          swipeable
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="~assets/vote1copy.png" />
          <!-- <q-carousel-slide :name="2" img-src="~assets/vote1copy.png" /> -->
        </q-carousel>
      </div>
    </div>
    <div class="text-h6 q-ma-lg">Select any category to vote..</div>
    <div class="column q-gutter-y-md q-px-xs">
      <q-expansion-item
        v-for="category in nominees"
        :key="category.genre"
        expand-separator
        icon="mdi-trophy-award"
        :label="category.genre"
        :class="{
          'shadow-2 q-mx-xl rounded-borders': $q.platform.is.desktop,
          'shadow-2  rounded-borders': !$q.platform.is.desktop,
        }"
        header-class="text-h6"
      >
        <q-card>
          <q-card-section
            v-for="cat in category.categories"
            :key="cat.category"
            class="q-pa-md"
          >
            <div class="q-mb-md text-h6">{{ cat.category }}</div>
            <div class="flex q-gutter-md flex-center justify-evenly">
              <div
                v-for="nominee in cat.options"
                :key="nominee.id"
                class="col-auto"
              >
                <q-card class="q-pa-md" :style="$q.platform.is.desktop?'width: 180px; height: 250px':'width: 280px; height: 250px'">
                  <q-img
                    :src="`https://cdn.quasar.dev/img/${nominee.avatar}`"
                    class=""
                    style="width: 100%; height: 120px; object-fit: cover"
                  />
                  <q-item-label class="text-h6 text-bold">{{
                    nominee.name
                  }}</q-item-label>
                  <q-item-label caption lines="2">{{
                    nominee.description
                  }}</q-item-label>
                  <div class="q-mt-md">
                    <q-radio
                      v-model="votes[category.genre][cat.category]"
                      label="Vote"
                      :val="nominee.name"
                      :name="`${category.genre}-${cat.category}`"
                      checked-icon="task_alt"
                      unchecked-icon="panorama_fish_eye"
                      @click="showSubmit = true"
                    />
                  </div>
                </q-card>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
    <!--dialogue-->
    <q-dialog v-model="showDialog" persistent>
      <q-card style="width: 500px; max-width: 80vw; height: 50vh">
        <q-card-section>
          <div class="text-h6">Please enter your details bellow</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="voter_name" label="Name" required />
          <q-input v-model="voter_email" label="Email" />
          <q-input v-model="voter_phone" label="Phone" />
        </q-card-section>

        <q-card-actions align="center">
          <q-btn label="Cancel" @click="showDialog = false" />
          <q-btn
            label="Vote"
            color="primary"
            @click="sendVote()"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--send vote btn-->
    <div>
      <q-page-sticky :offset="[18, 18]" position="bottom-right">
        <q-btn
          round
          size="2em"
          icon="mdi-vote"
          color="primary"
          v-if="showSubmit"
          class="text-capitalize text-sm"
          @click="showDialog = true"
        >
          <q-tooltip>Send Your Vote</q-tooltip>
        </q-btn>
      </q-page-sticky>
    </div>
    <!--send vote btn-->
  </q-page>
</template>
<script setup>
import { ref } from "vue";
// import VueCarousel from "vue3-carousel"; // Add this import

// import { Carousel, Navigation, Slide } from 'vue3-carousel';
const slide = ref(1);
const autoplay = ref(true);
const voter_name = ref("");
const voter_email = ref("");
const voter_phone = ref("");
let showDialog = ref(false);
let showSubmit = ref(false);
const nominees = [
  {
    genre: "Best Artist of The Year",
    categories: [
      {
        category: "Singeli",
        options: [
          {
            id: 1,
            name: "Nominee A",
            description: "Talented singer known for energetic performances.",
            avatar: "avatar1.jpg",
          },
          {
            id: 2,
            name: "Nominee B",
            description: "Versatile artist with a unique vocal style.",
            avatar: "avatar2.jpg",
          },
          {
            id: 3,
            name: "Nominee C",
            description: "Rising star with a massive fan following.",
            avatar: "avatar3.jpg",
          },
          {
            id: 4,
            name: "Nominee D",
            description: "Rising star with a massive fan following.",
            avatar: "avatar3.jpg",
          },
          {
            id: 5,
            name: "Nominee E",
            description: "Rising star with a massive fan following.",
            avatar: "avatar3.jpg",
          },
          // Add more nominees for Singeli category...
        ],
      },
      {
        category: "Bongo Fleva",
        options: [
          {
            id: 1,
            name: "Nominee D",
            description: "Legendary artist with numerous hit songs.",
            avatar: "avatar4.jpg",
          },
          {
            id: 2,
            name: "Nominee E",
            description: "Singer-songwriter known for soulful ballads.",
            avatar: "avatar5.jpg",
          },
          {
            id: 3,
            name: "Nominee F",
            description: "Talented rapper with thought-provoking lyrics.",
            avatar: "avatar6.jpg",
          },
          {
            id: 4,
            name: "Nominee D",
            description: "Rising star with a massive fan following.",
            avatar: "avatar3.jpg",
          },
          {
            id: 5,
            name: "Nominee E",
            description: "Rising star with a massive fan following.",
            avatar: "avatar3.jpg",
          },
          // Add more nominees for Bongo Fleva category...
        ],
      },
    ],
  },
  {
    genre: "Best Song of The Year",
    categories: [
      {
        category: "Singeli",
        options: [
          {
            id: 4,
            name: "Nominee G",
            description: "Catchy song with a danceable beat.",
            avatar: "avatar7.jpg",
          },
          {
            id: 5,
            name: "Nominee H",
            description: "Emotional ballad that touched millions of hearts.",
            avatar: "avatar8.jpg",
          },
          {
            id: 6,
            name: "Nominee I",
            description: "Infectious track that became an instant hit.",
            avatar: "avatar9.jpg",
          },
          // Add more nominees for Singeli category...
        ],
      },
      {
        category: "Bongo Fleva",
        options: [
          {
            id: 4,
            name: "Nominee J",
            description: "Upbeat song that dominated the charts.",
            avatar: "avatar10.jpg",
          },
          {
            id: 5,
            name: "Nominee K",
            description: "Collaborative track featuring top artists.",
            avatar: "avatar11.jpg",
          },
          {
            id: 6,
            name: "Nominee L",
            description: "Powerful anthem that resonated with the audience.",
            avatar: "avatar12.jpg",
          },
          // Add more nominees for Bongo Fleva category...
        ],
      },
    ],
  },
];

const votes = ref({});
for (const category of nominees) {
  votes.value[category.genre] = {};
}
const sendVote = () => {
  console.log("voter name", voter_name.value);
  console.log("voter email", voter_email.value);
  console.log("voter phone", voter_phone.value);
  console.log(votes.value);
};
</script>
<style>
</style>
