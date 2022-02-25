import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Layout from "../views/LayoutCase.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "index",
        component: Home,
      },
      {
        path: "/topic",
        name: "Topic",
        component: () => import("../views/TopicCase.vue"),
      },
      {
        path: "/mine",
        name: "Mine",
        component: () => import("../views/MineCase.vue"),
      },
      {
        path: "/search",
        name: "Search",
        component: () => import("../views/SearchCase.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
});

export default router;
