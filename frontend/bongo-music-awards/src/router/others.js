
const otherRoutes = [
  {
    path: '/',
    meta: { requiresAuth: false },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/artists', component: () => import('pages/Voter/Views/ArtistsPage.vue') },
      { path: '/artists/:id', component: () => import('pages/Voter/Views/ArtistDetails.vue') },
      { path: '/awards', component: () => import('pages/Voter/Views/AwardsPage.vue') },
      { path: '/tickets', component: () => import('pages/Voter/Views/TicketsPage.vue') },

    ]
  },
  {
    path: '/login',
    meta: { requiresAuth: false },
    component: () => import('layouts/AppLayout.vue'),
    children: [
      {
        path: '/login', component: () => import('pages/LoginPage.vue'),
        name: 'Login'
      },
      {
        path: '/register', component: () => import('pages/RegistrationPage.vue'),
        name: 'Register'
      },
      {
        path: '/forgot_password', component: () => import('pages/ForgotPassword.vue'),
        name: 'Forgot-password'
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default otherRoutes

