const artistRoutes = [
  {
    path: '/artist',
    meta:'',
    component:() => import ("layouts/AdminLayout.vue"),
    children: [
      {
        path: '/artist/dashboard',
        component: () => import("pages/Artist/Views/ArtistIndexPage.vue"),
      }
    ],

  }
];
export default artistRoutes
