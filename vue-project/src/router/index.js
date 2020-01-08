import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import about from "../views/About.vue";
import aboutA from "../views/AboutA.vue";
import aboutB from "../views/AboutB.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: about
  },
  {
    path: "/aboutA",
    name: "aboutA",
    component: aboutA
  },
  {
    path: "/aboutB",
    name: "aboutB",
    component: aboutB
  }
];

const router = new VueRouter({
  routes
});

export default router;