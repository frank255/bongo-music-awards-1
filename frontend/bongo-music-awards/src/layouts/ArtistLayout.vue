<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white q-pa-sm">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          Bongo Music Awards
        </q-toolbar-title>
        <q-btn flat no-caps dense icon="mdi-logout" label="logout"/>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered class="row justify-center" width="250">
      <!-- drawer content -->
      <div class="q-pa-md q-mt-md q-gutter-sm">
        <q-avatar size="80px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="text-h6">Ally Kiba</div>
        <div class="text-subtitle2 row justify-center">Artist</div>
      </div>
      <ArtistMenu />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import ArtistMenu from "src/components/ArtistMenu.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "src/stores/auth";
const router = useRouter();

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
onMounted(() => {
  // auth();
  if (useAuthStore().$state.isAuthorized) {
  } else {
    window.location.href = "/login";
  }
});
</script>
