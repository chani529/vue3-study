import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";

import Album from "../pages/album.vue";
import Filmography from "../pages/filmography.vue";
import Main from "../pages/main.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/album",
        name: "album",
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Main,
      },
      {
        path: "/filmography",
        name: "filmography",
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: Filmography,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
