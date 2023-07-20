<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white q-pa-sm">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> Bongo Music Awards </q-toolbar-title>
        <div class="q-pa-md">
          <q-btn-dropdown
            class="glossy text-capitalize bg-primary"
            icon="mdi-account-circle"
            :label="user.name"
            rounded
            flat
            @click="onMainClick"
          >
            <q-list separator>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar
                    icon="mdi-account-circle"
                    color="primary"
                    text-color="white"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-capitalize">
                    {{ role }}
                  </q-item-label>
                  <q-item-label class="text-capitalize" caption>{{
                    user.name
                  }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="changePassword = true">
                <q-item-section>
                  <q-item-label>Change Password</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="mdi-key" color="primary" />
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="changeProfile = true">
                <q-item-section>
                  <q-item-label>Change Profile Image</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="mdi-image" color="primary" />
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="logout()">
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="mdi-logout" color="primary" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <!-- <q-btn
          flat
          no-caps
          dense
          icon="mdi-logout"
          @click="logout()"
          label="logout"
        /> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="row justify-center"
      width="250"
    >
      <!-- drawer content -->
      <div class="q-pa-md q-mt-md q-gutter-sm">
        <q-avatar size="80px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <!-- <div class="text-h6">{{ user.name }}</div>
        <div class="text-subtitle2 text-capitalize row justify-center">
          {{ role }}
        </div> -->
      </div>
      <AdminMenu />
    </q-drawer>
    <!--change password dialogue-->
    <q-dialog v-model="changePassword" persistent>
      <q-card class="bg-grey-3 q-pa-md" style="width: 500px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6 text-center">Change Your Password...</div>
        </q-card-section>
        <q-card-section class="row justify-center items-center q-gutter-x-xl">
          <q-input
            v-model="old_password"
            dense
            label="Old Password"
            :type="isPwd ? 'password' : 'text'"
            outlined
          >
            <template #append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            v-model="new_password"
            class="q-ma-md"
            dense
            label="New Password"
            :type="isPwd ? 'password' : 'text'"
            outlined
          >
            <template #append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn label="Cancel" @click="changePassword = false" />
          <q-btn
            label="Update"
            color="primary"
            @click="updatePassword()"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import AdminMenu from "src/components/AdminMenu.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { api } from "src/boot/axios";
import { useAuthStore } from "stores/auth";
import { useQuasar } from "quasar";

const userString = sessionStorage.getItem("user");
const user = JSON.parse(userString);
const role = sessionStorage.getItem("role");
const leftDrawerOpen = ref(false);
let changePassword = ref(false);
const $q = useQuasar();
const isPwd = ref(true);
const old_password = ref("");
const new_password = ref("");

const updatePassword = async () => {
  const response = await api.post("/updatePassword", {
    user_id: user.user_id,
    old_password: old_password.value,
    new_password: new_password.value,
  });
  // console.log(response.data.data);
  $q.notify({
    message: response.data.data,
    color: "green",
    icon: "check",
    position: "top-right",
  });
};

const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
const logout = async () => {
  api.post("/logout");
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("role");
  sessionStorage.removeItem("auth");
  sessionStorage.removeItem("user");
  window.location.href = "/login";
};
onMounted(() => {
  // auth();
  if (useAuthStore().$state.role == "admin") {
  } else {
    window.location.href = "/login";
  }
});
</script>
