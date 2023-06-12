<template>
  <q-header class="q-pa-xs bg-white row justify-around text-black" bordered>
    <q-toolbar class="col-2">
      <q-toolbar-title>
        <!-- <router-link to="">
          <q-img
            alt="conture logo"
            src="~assets/logo.png"
            style="width: 50px; max-width: 100%; cursor: pointer"
          />
        </router-link> -->
        Bongo Music Awards
      </q-toolbar-title>
    </q-toolbar>

    <div
      :class="
        $q.platform.is.desktop
          ? 'col-9 row'
          : 'col-9 row  justify-end '
      "
    >
      <q-tabs
        v-for="(tab, i) in tabs"
        :key="i"
        active-color="primary"
        class="text-grey-9 col cursor-pointer q-pa-sm"
        dense
        indicator-color="transparent"
        no-caps
        inline-label
      >
        <q-route-tab
          inline
          v-if="$q.platform.is.desktop"
          :label="tab.label"
          :icon="tab.icon"
          :to="tab.path"
          exact
          replace
          class="text-capitalize"
        ></q-route-tab>
      </q-tabs>

      <div v-if="$q.platform.is.desktop" class="col flex justify-end">
        <q-btn icon="mdi-login" flat size="12px" to="/login">
          <q-tooltip>Login</q-tooltip>
        </q-btn>
      </div>
      <q-btn
        flat
        icon="menu"
        padding="12px"
        round
        @click="rightDrawer"
        v-if="$q.platform.is.mobile"
      />
    </div>
  </q-header>

  <q-drawer
    v-model="rightDrawerOpen"
    :width="180"
    behavior="mobile"
    elevated
    side="right"
  >
    <q-list bordered padding separator>
      <q-item
        v-for="(list, i) in tabs"
        :key="i"
        v-ripple
        :to="list.path"
        class="q-my-md q-pa-md text-center"
        clickable
        exact
        indicator-color="transparent"
      >
        <q-item-section padding> {{ list.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
const rightDrawerOpen = ref(false);
const $q = useQuasar();

const tabs = [
  {
    path: "/pochi",
    label: "Voting",
    icon: "mdi-vote",
  },
  // {
  //   path: "/wekeza",
  //   label: "Wekeza",
  //   icon: "mdi-cash",
  // },
  // {
  //   path: "/biashara",
  //   label: "Biashara",
  //   icon: "mdi-handshake-outline",
  // },
  {
    path: "/ajira-kazi",
    label: "Artists",
    icon: "mdi-music-clef-treble",
  },

  {
    path: "/mshauri",
    label: "Awards",
    icon: "mdi-trophy",
  },

  {
    path: "/mnada",
    label: "Tickets",
    icon: "mdi-ticket",
  },

  // {
  //   path: "/mshauri",
  //   label: "Mshauri",
  //      icon: "mdi-account-question-outline",
  // },
];

const rightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>

<style lang="scss" scoped>
.q-item.q-router-link--active,
.q-item--active {
  color: blue;
}

@media (max-width: 768px) {
  .q-tabs {
    display: none;
  }

  .q-drawer {
    width: 173px;
    transform: translateX(0px);
  }
}

@media (min-width: 768px) {
  // .q-btn {
  //   display: none;
  // }
}

.q-tab__label {
  font-size: 17px;
}
</style>
