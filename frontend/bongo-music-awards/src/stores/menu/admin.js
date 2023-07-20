import { defineStore } from "pinia"
export const useAdminStore = defineStore("admin", {
  state: () => (
    {
      admin: [
        {
          icon: "mdi-home-circle",
          text: "Dashboard",
          path: "/admin/dashboard",
        }, {
          icon: "mdi-calendar",
          text: "Events & Awards",
          path: "/admin/eventsandawards",
        },{
          icon: "mdi-vote",
          text: "Votes",
          path: "/admin/votes",
        }, {
          icon: "mdi-account-group",
          text: "Users",
          path: "/admin/users",
        }, {
          icon: "mdi-ticket",
          text: "Tickets",
          path: "/admin/tickets",
        }, {
          icon: "mdi-wechat",
          text: "SMS",
          path: "/admin/sms",
        }, {
          icon: "mdi-gmail",
          text: "Emails",
          path: "/admin/emails",
        },
        // {
        //   icon: "mdi-account-circle-outline",
        //   text: "My Account",
        //   path: "/admin/myaccount",
        // }
      ]
    }
  )
});
