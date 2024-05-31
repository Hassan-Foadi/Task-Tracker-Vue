import { createRouter, createWebHashHistory } from "vue-router";

import HomeComp from "../views/HomeComp.vue";
import AboutComp from "../views/AboutComp.vue";
const routes = [
  {
    path: "/",
    name: "HomeComp",
    component: HomeComp,
  },
  {
    path: "/about",
    name: "AboutComp",
    component: AboutComp,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
