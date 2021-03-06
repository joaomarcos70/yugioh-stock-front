import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login.vue";
import Wants from "../views/Wants.vue";
import Collection from "../views/Collection.vue";
import Profile from "../views/Profile.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },

  {
    path: "/wants",
    name: "Wants",
    component: Wants
  },

  {
    path: "/collection",
    name: "Collection",
    component: Collection
  },

  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
