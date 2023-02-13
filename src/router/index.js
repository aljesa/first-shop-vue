import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductSingle from "../views/ProductSingle.vue";
import SingleItem from "../components/posts/SingleItem.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { breadcrumb: 'Home' }
    },
    {
      path: "/products",
      name: "products",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProductsView,
      meta: { breadcrumb: 'Products' }
    },
    {
      path: "/products/:id",
      name: "productSingle",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     component: ProductSingle,
     meta: { breadcrumb: 'Single' }
      // props: (route) => ({ data: store.state.data })
    },
    {
      path: "/item/:id",
      name: "SingleItem",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     component: SingleItem,
     meta: { breadcrumb: ':title' }
      // props: (route) => ({ data: store.state.data })
    },
  ],
});

export default router;
