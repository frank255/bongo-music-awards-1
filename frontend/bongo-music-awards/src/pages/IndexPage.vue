<template>
  <q-page padding class="">
    <div class="text-h6 q-mb-lg">Select any category to vote..</div>
    <div class="column q-gutter-y-md">
      <q-expansion-item
        v-for="category in nominees"
        :key="category.category"
        expand-separator
        icon="mdi-trophy-award"
        :label="category.category"
        :class="$q.platform.is.desktop ? 'shadow-2 q-mx-xl rounded-borders':'shadow-2 q-mx-sm rounded-borders'"
        header-class="text-h6"
      >
        <q-card>
          <q-card-section>
            <q-list>
              <q-item
                v-for="nominee in category.options"
                :key="nominee.id"
                class="q-mb-sm"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-avatar size="5em">
                    <img
                      :src="`https://cdn.quasar.dev/img/${nominee.avatar}`"
                    />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ nominee.name }}</q-item-label>
                  <q-item-label caption lines="1">{{
                    nominee.description
                  }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-radio
                    v-model="votes[category.category]"
                    :val="nominee.name"
                    :name="category.category"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    @click="showSubmit = true"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- <q-expansion-item
        v-for="category in nominees"
        :key="category.category"
        expand-separator
        icon="mdi-trophy-award"
        :label="category.category"
        class="shadow-2 q-mx-xl rounded-borders"
        header-class="text-h6"
      >
        <q-card>
          <q-card-section>
            <q-list>
              <q-item
                v-for="nominee in category.options"
                :key="nominee.id"
                class="q-mb-sm"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-avatar>
                    <img
                      :src="`https://cdn.quasar.dev/img/${nominee.avatar}`"
                    />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ nominee.name }}</q-item-label>
                  <q-item-label caption lines="1">{{
                    nominee.description
                  }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-radio
                    v-model="votes[category.category]"
                    :val="nominee.id"
                    :name="category.category"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item> -->
    </div>
    <!--dialogue-->
    <q-dialog v-model="showDialog" persistent>
      <q-card style="width: 500px; max-width: 80vw; height: 50vh">
        <q-card-section>
          <div class="text-h6">Please enter your details bellow</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="voter_name" label="Name" />
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
const voter_name = ref("");
const voter_email = ref("");
const voter_phone = ref("");
let showDialog = ref(false);
let showSubmit = ref(false);
const nominees = [
  {
    category: "Best Artist of The Year",
    options: [
      {
        id: 1,
        name: "Nominee A",
        description: "bla bla bla",
        avatar: "avatar1.jpg",
      },
      {
        id: 2,
        name: "Nominee B",
        description: "bla bla bla",
        avatar: "avatar2.jpg",
      },
      {
        id: 3,
        name: "Nominee C",
        description: "bla bla bla",
        avatar: "avatar3.jpg",
      },
      {
        id: 4,
        name: "Nominee D",
        description: "bla bla bla",
        avatar: "avatar4.jpg",
      },
      {
        id: 5,
        name: "Nominee E",
        description: "bla bla bla",
        avatar: "avatar5.jpg",
      },
    ],
  },
  {
    category: "Best Song of The Year",
    options: [
      {
        id: 6,
        name: "Nominee F",
        description: "bla bla bla",
        avatar: "avatar6.jpg",
      },
      {
        id: 7,
        name: "Nominee G",
        description: "bla bla bla",
        avatar: "avatar7.jpg",
      },
      {
        id: 8,
        name: "Nominee H",
        description: "bla bla bla",
        avatar: "avatar8.jpg",
      },
      {
        id: 9,
        name: "Nominee I",
        description: "bla bla bla",
        avatar: "avatar9.jpg",
      },
      {
        id: 10,
        name: "Nominee J",
        description: "bla bla bla",
        avatar: "avatar10.jpg",
      },
    ],
  },
  {
    category: "Best Video of The Year",
    options: [
      {
        id: 6,
        name: "Nominee F",
        description: "bla bla bla",
        avatar: "avatar6.jpg",
      },
      {
        id: 7,
        name: "Nominee G",
        description: "bla bla bla",
        avatar: "avatar7.jpg",
      },
      {
        id: 8,
        name: "Nominee H",
        description: "bla bla bla",
        avatar: "avatar8.jpg",
      },
      {
        id: 9,
        name: "Nominee I",
        description: "bla bla bla",
        avatar: "avatar9.jpg",
      },
      {
        id: 10,
        name: "Nominee J",
        description: "bla bla bla",
        avatar: "avatar10.jpg",
      },
    ],
  },
  // Add additional categories and options here...
];
const votes = ref([]);
for (const category of nominees) {
  votes.value[category.category] = null;
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
