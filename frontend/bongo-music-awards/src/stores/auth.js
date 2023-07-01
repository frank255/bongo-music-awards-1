import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    id: null,
    users: null,
    role: sessionStorage.getItem("role"),
    token: sessionStorage.getItem("token"),
    auth: sessionStorage.getItem("auth"),
    // isAuthorized: null,
    user_id: sessionStorage.getItem("user_id"),
    user: sessionStorage.getItem("user"),
    //
  }),
  getters: {
    getUsers: (state) => state.users,
    getToken: (state) => state.token,
    getAuth:(state) => state.auth,
  },
  actions: {
    setUserData(res) {
      sessionStorage.setItem("token", res.token);
      sessionStorage.setItem("role", res.role);
      sessionStorage.setItem("auth", "true");
      sessionStorage.setItem("user", JSON.stringify(res.user)); // Store the user object as a JSON string
      // sessionStorage.setItem("user", JSON.stringify(res.user)); // Store the user object as a JSON string
      this.user_id = res.user.user_id;
    },

    logout() {
      this.users = null;
      this.token = null;
    },
  },
});
