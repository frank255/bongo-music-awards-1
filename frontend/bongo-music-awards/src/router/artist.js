const artistRoutes = [
  {
    path: '/artist',
    component:() => import ("layouts/ArtistLayout.vue"),
    meta: { requiresAuth: true, isArtist: "artist" },
    children: [
      {
        path: '/artist',
        component: () => import("pages/Artist/Views/ArtistIndexPage.vue"),
        name: "Artist",
      } ,{
        path: '/artist/dashboard',
        component: () => import("pages/Artist/Views/ArtistIndexPage.vue"),

      }, {
        path: '/artist/eventsandawards',
        component: () => import("pages/Artist/Views/ArtistEventsandAwards.vue"),
      },
      {
        path: '/artist/profile',
        component: () => import("pages/Artist/Views/ArtistProfile.vue"),
      },
      {
        path: '/artist/tickets',
        component: () => import("pages/Artist/Views/ArtistTickets.vue"),
      },{
        path: '/artist/works',
        component: () => import("pages/Artist/Views/ArtistWorks.vue"),
      },
      {
        path: '/artist/myaccount',
        component: () => import("pages/Artist/Views/ArtistAccount.vue"),
      }, {
        path: '/artist/event/:event_id',
        component: () => import("pages/Artist/Views/AwardsNomination.vue"),
      }
    ],

  }
];
export default artistRoutes
