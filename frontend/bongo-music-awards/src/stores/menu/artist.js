import { defineStore } from "pinia"
export const useArtistStore = defineStore("artist", {
  state: () => (
    {
      artist: [
        {
          icon: "mdi-home-circle",
          text: "Dashboard",
          path: "/artist/dashboard",
        }, {
          icon: "mdi-calendar",
          text: "Events & Awards",
          path: "/artist/eventsandawards",
        },{
          icon: "mdi-account",
          text: "Profile",
          path: "/artist/profile",
        }, {
          icon: "mdi-ticket",
          text: "Tickets",
          path: "/artist/tickets",
        }, {
          icon: "mdi-music-clef-treble",
          text: "My Works",
          path: "/artist/works",
        },
        // {
        //   icon: "mdi-account-circle-outline",
        //   text: "My Account",
        //   path: "/artist/myaccount",
        // }
      ]
    }
  )
});
