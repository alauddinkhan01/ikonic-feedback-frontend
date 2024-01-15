// router.js

import { createRouter, createWebHistory } from "vue-router";

// Import your components
import Register from "./Auth/Register.vue";
import Login from "./Auth/Login.vue";
import Welcome from "./components/Welcome.vue";
import Dashboard from "./Dashboard/Dashboard.vue";
import Feedback from "./Feedback/Feedback.vue";
import AddFeedback from "./Feedback/AddFeedback.vue";
import FeedbackDetails from "./Feedback/FeedbackDetails.vue";

const isAuthenticated = () => {
  const token = localStorage.getItem("user-token");
  return token !== null && token !== undefined;
};

const routes = [
  { path: "/", component: Welcome },
  // { path: "/login", component: Login },
  // { path: "/register", component: Register },
  {
    path: "/login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next();
      } else {
        next("/dashboard"); // Redirect to dashboard if already logged in
      }
    },
  },
  {
    path: "/register",
    component: Register,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next();
      } else {
        next("/dashboard"); // Redirect to dashboard if already logged in
      }
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/feedback",
    name: "feedback",
    component: Feedback,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/add-feedback",
    name: "addFeedback",
    component: AddFeedback,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/feedback-details/:id",
    name: "feedbackDetails",
    component: FeedbackDetails,
    props: true,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next("/login");
      }
    },
  },
  // { path: "/dashboard", name: "dashboard", component: Dashboard },
  // { path: "/feedback", name: "feedback", component: Feedback },
  // { path: "/add-feedback", name: "addFeedback", component: AddFeedback },
  // {
  //   path: "/feedback-details/:id",
  //   name: "feedbackDetails",
  //   component: FeedbackDetails,
  //   props: true,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
