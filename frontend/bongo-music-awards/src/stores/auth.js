import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    id: null,
    users: null,
    role: sessionStorage.getItem("role"),
    token: sessionStorage.getItem("token"),
    isAuthorized: null,
    user_id: sessionStorage.getItem("user_id"),
    // user: sessionStorage.getItem("user"),
    //
  }),
  getters: {
    getUsers: (state) => state.users,
    getToken: (state) => state.token,
  },
  actions: {
    setUserData(res) {
      sessionStorage.setItem("token", res.token);
      sessionStorage.setItem("role", res.role);
      this.user_id = res.user_id;
    },

    logout() {
      this.users = null;
      this.token = null;
    },
  },
});
