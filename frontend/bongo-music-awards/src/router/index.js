import { route } from "quasar/wrappers";
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import routes from "./routes";
import { useAuthStore } from "stores/auth";
import { api } from "src/boot/axios";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

// const authStore = useAuthStore();

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });
  // const userRole = useAuthStore().$state.role;
  // const isAuthorized = (to, userRole) => {
  //   switch (userRole) {
  //     case "artist":
  //       return ["Artist"].includes(to.meta.isArtist);
  //     case "admin":
  //       return ["Admin"].includes(to.meta.isAdmin);
  //     default:
  //       return false;
  //   }
  // };

  Router.beforeEach((to, from, next) => {
    const isAuthenticated = sessionStorage.getItem("auth") === "true";
    const userRole = sessionStorage.getItem("role");

    if (to.meta.requiresAuth && !isAuthenticated) {
      // Redirect to login page if user is not authenticated
      next({ name: "Login" });
      return; // Exit the function immediately after calling next()
    }

    if (to.name === "Login" && isAuthenticated) {
      const auth = async () => {
        try {
          const res = await api.post("authenticated");
          if (res.status === 200) {
            switch (userRole) {
              case "artist":
                next({ name: "Artist" });
                break;
              case "admin":
                next({ name: "Admin" });
                break;
              default:
                next({ name: "Login" });
                break;
            }
          }
        } catch (error) {
          if (error.response.status === 401) {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("role");
            sessionStorage.removeItem("auth");
            window.location.href = "/login";
          }
        }
      };
      auth();
      return; // Exit the function immediately after calling auth()
    }

    if (to.name !== "Login" && isAuthenticated) {
      const auth = async () => {
        try {
          const res = await api.post("authenticated");
          if (res.status === 200) {
            next();
          }
        } catch (error) {
          if (error.response.status === 401) {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("role");
            sessionStorage.removeItem("auth");
            window.location.href = "/login";
          }
        }
      };
      auth();
      return; // Exit the function immediately after calling auth()
    }

    // Default case
    next();
  });


  return Router;
});
