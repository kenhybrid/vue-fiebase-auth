import Vue from "vue";
import VueRouter from "vue-router";
// //auth
import Auth from "@/components/auth/auth";
import Authguard from "./auth-guard";
// //admin
import Dashboard from "@/components/blog/Dashboard";
import Emails from "@/components/blog/Emails";

Vue.use(VueRouter);

const routes = [
  //client
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: Authguard
  },
  {
    path: "/emails",
    name: "Emails",
    component: Emails,
    beforeEnter: Authguard
  },
  // auth
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
