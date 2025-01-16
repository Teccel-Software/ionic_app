import { createRouter, createWebHistory } from "@ionic/vue-router";
import { AuthStore } from "@store/AuthStore";

//App Layout
import AppLayout from "../layouts/App.vue";

const routes = [
  {
    path: "/",
    redirect: "/test",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@view/auth/Login.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        redirect: "/test",
      },
      {
        path: "/test",
        name: "Test",
        component: () => import("@view/Test.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = AuthStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authStore.checkAuth()) {
      router.replace({
        path: "/login",
      });
    } else {
      next();
    }
  } else if (authStore.checkAuth()) {
    router.push({
      path: "/",
    });
  } else {
    next();
  }
});

export default router;
