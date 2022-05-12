import Home from './views/Home.vue';
import ProjectPage from './views/ProjectPage.vue';
import Cart from "./components/Cart/Cart.vue";
import Footer from "./components/Footer.vue";

export default [
  {
    name: "projectPage",
    path: "/:projectSlug",
    component: ProjectPage,
  },
  {
    name: "cart",
    path: "/:cart",
    component: Cart,
  },
  {
    name: "footer",
    path: "/:footer",
    component: Footer,
  },
  {
    name: "home",
    path: "/",
    component: Home,
  },
];
