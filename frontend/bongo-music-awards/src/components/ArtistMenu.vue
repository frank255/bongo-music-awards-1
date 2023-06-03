<template>
  <q-scroll-area class="fit">
    <q-list padding >
      <template v-for="(menuItem, index) in menu.artist" :key="index">
        <q-item
          v-ripple
          clickable
          :to="menuItem.path"
          :active="route.path === menuItem.path"
        >
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ menuItem.text }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-scroll-area>
</template>

<script setup>
import { useArtistStore } from "src/stores/menu/artist";
import { useRoute } from "vue-router";
const route = useRoute();
const menu = useArtistStore();
</script>
