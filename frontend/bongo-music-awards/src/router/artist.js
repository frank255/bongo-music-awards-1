const artistRoutes = [
  {
    path: '/artist',
    meta: { requiresAuth: true, isArtist: "artist" },
    component:() => import ("layouts/ArtistLayout.vue"),
    children: [
      {
        path: '/artist',
        component: () => import("pages/Artist/Views/ArtistIndexPage.vue"),
      } ,{
        path: '/artist/dashboard',
        component: () => import("pages/Artist/Views/ArtistIndexPage.vue"),
        name: "Artist",

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
        path: '/artist/awardsnominations',
        component: () => import("pages/Artist/Views/AwardsNomination.vue"),
      }
    ],

  }
];
export default artistRoutes
