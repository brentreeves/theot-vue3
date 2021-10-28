import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home"),
  },
  {
    path: "/",
    alias: "/",
    name: "home",
    component: () => import("./components/Home"),
  },
  {
    path: "/home",
    alias: "/",
    name: "home",
    component: () => import("./components/Home"),
  },
  {
    path: "/tutorials",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/TutorialsList"),
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/Tutorial"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial"),
  },
  {
    path: "/dots",
    name: "dots",
    component: () => import("./components/DotsList"),
  },
  {
    path: "/wideDots",
    name: "wideDots",
    component: () => import("./components/DotsListWide"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/Login"),
  },
  {
    path: "/witness",
    name: "witness",
    component: () => import("./components/Witness"),
  },
  {
    path: "/ones",
    name: "ones",
    component: () => import("./components/Ones"),
  },

  {
    path: "/percent",
    name: "percent",
    component: () => import("./components/Percent"),
  },
  {
    path: "/ratio",
    name: "ratio",
    component: () => import("./components/Ratio"),
  },
  {
    path: "/visualize",
    name: "visualize",
    component: () => import("./components/Visualize"),
  },
  {
    path: "/newRatio",
    name: "newRatio",
    component: () => import("./components/NewRatio"),
  },
  {
    path: "/createVariantReadings",
    name: "createVariantReadings",
    component: () => import("./components/CreateVariantReadings"),
  },
  {
    path: "/populateVariantReadings",
    name: "populateVariantReadings",
    component: () => import("./components/PopulateVariantReadings"),
  },
  {
    path: "/createPercentages",
    name: "createPercentages",
    component: () => import("./components/CreatePercentages"),
  },
  {
    path: "/populatePercentages",
    name: "populatePercentages",
    component: () => import("./components/PopulatePercentages"),
  },
  {
    path: "/displayPercentages",
    name: "displayPercentages",
    component: () => import("./components/DisplayPercentages"),
  },
  {
    path: "/createRScript",
    name: "createRScript",
    component: () => import("./components/CreateRScript"),
  },
  {
    path: "/populateRScripts",
    name: "populateRScripts",
    component: () => import("./components/PopulateRScripts"),
  },
  {
    path: "/displayClusters",
    name: "displayClusters",
    component: () => import("./components/DisplayClusters"),
  },
  {
    path: "/createClusterProfileTable",
    name: "createClusterProfileTable",
    component: () => import("./components/CreateClusterProfileTable"),
  },
  {
    path: "/populateClusterProfiles",
    name: "populateClusterProfiles",
    component: () => import("./components/PopulateClusterProfiles"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
