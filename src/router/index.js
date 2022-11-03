import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
    meta: { keepAlive: true},
  },
 
  {
    path: "/my",
    component: () => import("../views/MyView.vue"),
    meta: {keepAlive: false },
  },
  {
    path: "/search",
    component: () => import("../views/SearchView.vue"),
    meta: {hiddenTop: true},
  },
  {
    path: "/playlist/:id",
    component: () => import("../views/PlayListView.vue"),
    meta: {hiddenTop: true},
  },
  {
    path: "/singer/:id",
    component: () => import("../views/SingerView.vue"),
    meta: { hiddenTop: true},
  },
  {
    path: "/album/:id",
    component: () => import("../views/AlbumView.vue"),
    meta: {hiddenTop: true , hiddenTab: true},
  },
  
  {
    path: "/every",
    component: () => import("../views/EveryView.vue"),
    meta: {hiddenTop: true},
  },
];

const router = new VueRouter({
  routes,
});

export default router;
