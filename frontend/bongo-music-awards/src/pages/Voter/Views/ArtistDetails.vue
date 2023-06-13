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
          <p class="text-h6">Ally Kiba</p>
        </div>
        <div class="q-mt-xs column flex justify-center items-center">
          <p class="text-subtitle1">Genres | Afropop,R&B,Bongo Flava</p>
          <p class="text-subtitle2 q-px-xl" style="text-align: center">
            Ali Saleh Kiba (26 November 1986), best known as Ali Kiba or
            sometimes King Kiba, is a Tanzanian musician and songwriter. He is
            from Kigoma and the owner of Kings Music label. According to BASATA
            Alikiba is one of the most successful Bongo Flava singers and
            considered the greatest of all time having often been referred to by
            many contemporaries as the "King of Bongo flava".His musical style
            has been defined as polyhedric, with his style being characterized
            by several influences from other genres, mainly Afro pop, R&B and
            Rhumba. His lyrics develop predominantly over themes of romance,
            fast life, desire, regret, and emotional conflict. He also
            collaborated with R. Kelly and other African musicians on the One8
            project.In 2017 he became the director of Rockstar4000.
          </p>
        </div>
      </div>
    </q-card>
    <q-card class="q-mt-lg">
      <div class="row shaddow q-mt-sm q-pa-sm justify-between">
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

  </q-page>
</template>

<script setup>
import { api } from "src/boot/axios";
import { onMounted, reactive, ref } from "vue";

const getProfile = async () => {
  try {
    const response = await api.get("/artist_profile");
    console.log(response);
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
