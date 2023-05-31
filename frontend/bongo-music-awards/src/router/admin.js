const adminRoutes = [
  {
    path: '/admin',
    meta: '',
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: '/admin/dashboard',
        component: () => import("pages/Admin/Views/AdminIndexPage.vue"),
      },
      {
        path: '/admin',
        component: () => import("pages/Admin/Views/AdminIndexPage.vue"),
      },
      {
        path: '/admin/eventsandawards',
        component: () => import("pages/Admin/Views/EventsandAwards.vue"),
      }
    ],

  }
];
export default adminRoutes
